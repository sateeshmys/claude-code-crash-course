import asyncio
import time
import subprocess
from playwright.async_api import async_playwright

async def run_profiling():
    print("Starting render profiling...")
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Listen to console events
        terminal_renders = 0
        mockup_renders = 0

        def handle_console(msg):
            nonlocal terminal_renders, mockup_renders
            text = msg.text
            if "HeroTerminal Rendered" in text:
                terminal_renders += 1
            if "TerminalMockup Rendered" in text:
                mockup_renders += 1

        page.on("console", handle_console)

        # Open landing page
        await page.goto("http://localhost:3000", wait_until="domcontentloaded")

        # Let's wait 5 seconds to capture all typing state updates and cursor blinks
        print("Monitoring console logs for 5 seconds...")
        await asyncio.sleep(5.0)

        # Take a screenshot to verify UI is working as expected
        await page.screenshot(path="verification/screenshot.png")

        await browser.close()

        print(f"HeroTerminal Render Count: {terminal_renders}")
        print(f"TerminalMockup Render Count: {mockup_renders}")

        return terminal_renders, mockup_renders

if __name__ == "__main__":
    asyncio.run(run_profiling())

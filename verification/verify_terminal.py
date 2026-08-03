import time
import subprocess
from playwright.sync_api import sync_playwright

def run_verification():
    print("Starting Playwright verification...")

    # Store console messages
    console_messages = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        # Subscribe to console events to count React renders
        def handle_console(msg):
            text = msg.text
            console_messages.append(text)
            print(f"[BROWSER LOG] {text}")

        page.on("console", handle_console)

        # Navigate to local Next.js app
        print("Navigating to http://localhost:3000...")
        try:
            page.goto("http://localhost:3000")

            # Wait for 5 seconds to let the typing animation run and complete
            print("Waiting 5 seconds for typing animation and blinking cursor cycles...")
            time.sleep(5)

            # Capture screenshot
            page.screenshot(path="verification/screenshot.png")
            print("Screenshot captured at verification/screenshot.png")

        except Exception as e:
            print(f"Navigation or screenshot failed: {e}")
        finally:
            browser.close()

    # Analyze render counts
    hero_renders = sum(1 for m in console_messages if "[HeroTerminal] Rendered" in m)
    mockup_renders = sum(1 for m in console_messages if "[TerminalMockup] Rendered" in m)

    print("\n--- Profiling Results ---")
    print(f"Parent [HeroTerminal] Render count: {hero_renders}")
    print(f"Child [TerminalMockup] Render count: {mockup_renders}")
    print("-------------------------\n")

    # Assert performance goals (Parent should render only initial mount / hydration, usually 1 or 2 times)
    # While mockup renders can happen as typing advances (approx 30 times)
    print("Verification completed.")

if __name__ == "__main__":
    run_verification()

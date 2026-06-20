import { test, expect } from '@playwright/test';
import fs from 'fs';

test('profile re-renders', async ({ page }) => {
  const logs: string[] = [];
  page.on('console', msg => {
    if (msg.text().includes('RENDER: HeroTerminal')) {
      logs.push(msg.text());
    }
  });

  await page.goto('http://localhost:3000');

  // Wait for initial load and some typing to happen
  await page.waitForTimeout(5000);

  console.log(`Captured ${logs.length} HeroTerminal renders in 5 seconds`);

  // Save result for verification
  fs.writeFileSync('render_count.txt', logs.length.toString());
});

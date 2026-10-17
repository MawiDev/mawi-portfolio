import { test as base, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const test = base.extend({
  runtimeCheck: [async ({ page }, use) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    // Vercel serves this endpoint only on its hosting platform.
    await page.route('**/_vercel/insights/script.js*', (route) => route.fulfill({
      contentType: 'application/javascript',
      body: '',
    }));
    await use();
    expect(errors, 'No browser runtime, CSP or resource errors').toEqual([]);
  }, { auto: true }],
});

test('production page loads with profile content, metadata and security headers', async ({ page }) => {
  const response = await page.goto('/');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-security-policy']).toContain("default-src 'self'");
  expect(response.headers()['x-content-type-options']).toBe('nosniff');
  await expect(page).toHaveTitle('MawiDev | Riccardo Savio — Software Developer');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hi, I’m Mawi.I build for the web.');
  await expect(page.getByRole('heading', { name: 'Tenkaichi Beerpong' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore the project' })).toHaveAttribute('href', 'https://tenkaichibeerpong.it/');
  await expect(page.getByRole('heading', { name: 'Tech stack', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Backend stack', exact: true })).toBeVisible();
  await expect(page.getByRole('list', { name: 'Backend stack', exact: true }).getByText('IPFS', { exact: true })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://mawi-portfolio.vercel.app/');
  const socialImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  const imageResponse = await page.request.get(new URL(socialImage).pathname);
  expect(imageResponse.status()).toBe(200);
  expect(imageResponse.headers()['content-type']).toContain('image/png');
});

test('minimal page has no navbar or footer and keyboard links work', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('header, nav, footer')).toHaveCount(0);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  for (const [label, id] of [['Explore my work', 'work'], ['Get in touch', 'contact']]) {
    const link = page.getByRole('link', { name: label, exact: true });
    await link.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test('project images load, links have names and the page fits the viewport', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.project-card')).toHaveCount(8);
  const featuredProject = page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Tenkaichi Beerpong', exact: true }) });
  await expect(featuredProject.getByText('Laravel', { exact: true })).toBeVisible();
  await expect(featuredProject.getByText('Livewire', { exact: true })).toBeVisible();
  await featuredProject.getByRole('img').scrollIntoViewIfNeeded();
  await expect(featuredProject.getByRole('img')).toHaveJSProperty('naturalWidth', 1440);
  await expect(featuredProject.getByRole('img')).toHaveJSProperty('naturalHeight', 960);
  const archivedProject = page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Macraman', exact: true }) });
  await expect(archivedProject.getByText('Archived project', { exact: true })).toBeVisible();
  await expect(archivedProject.getByRole('link')).toHaveCount(0);
  for (const image of await page.getByRole('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty('complete', true);
    await expect.poll(() => image.evaluate((element) => element.naturalWidth)).toBeGreaterThan(0);
    await expect(image).toHaveAttribute('alt', /.+/);
  }
  const invalidLinks = await page.getByRole('link').evaluateAll((links) => links.filter((link) => {
    const href = link.getAttribute('href');
    const name = link.getAttribute('aria-label') || link.textContent.trim();
    if (!name || !href || href === '#') return true;
    if (href.startsWith('#')) return !document.getElementById(href.slice(1));
    return !href.startsWith('https://') || link.target !== '_blank' || !link.relList.contains('noopener') || !link.relList.contains('noreferrer');
  }).map((link) => link.outerHTML));
  expect(invalidLinks).toEqual([]);
  const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test('page passes automated WCAG accessibility checks', async ({ page }, testInfo) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath('hero.png') });
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    images.forEach((image) => { image.loading = 'eager'; });
    await Promise.all(images.map((image) => image.decode()));
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.screenshot({ path: testInfo.outputPath('portfolio.png'), fullPage: true });
});

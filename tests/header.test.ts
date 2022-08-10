import { test, expect } from '@playwright/test';

test.describe('Testing Header component', () => {
	test('Header has logo', async ({ page }) => {
		await page.goto('/');

		// Expect page to have brand logo
		const logo = page.locator("[data-testid='logo']");
		await expect(logo).toBeVisible();
	});

	test('Test desktop links', async ({ page }) => {
		await page.goto('/');

		// Burger must be visible
		const burger = page.locator("[data-testid='burger']");
		await expect(burger).toBeHidden();

		// Main links must be hidden
		const links = page.locator("[data-testid='links']");
		await expect(links).toBeVisible();
	});
});

test.describe('Testing Header component in small screen', () => {
	test.use({
		viewport: {
			width: 600,
			height: 768
		}
	});

	test('Test mobile links', async ({ page }) => {
		await page.goto('/');

		// Burger must be visible
		const burger = page.locator("[data-testid='burger']");
		await expect(burger).toBeVisible();

		// Main links must be hidden
		const links = page.locator("[data-testid='links']");
		await expect(links).toBeHidden();
	});

	test('Should have exact links count', async ({ page }) => {
		await page.goto('/');

		// Should have 4 main links
		const mainLinks = page.locator("[data-testid='links'] > [data-testid='main-links'] > a");
		await expect(mainLinks).toHaveCount(4);

		// Should have 4 auth Links
		const authLinks = page.locator("[data-testid='links'] > [data-testid='auth-links'] > a");
		await expect(authLinks).toHaveCount(2);
	});
});

const { default: test, expect } = require('@playwright/test')
const { hello, helloWorld } = require('@demo/hello')

test('My first test', async ({ page }) => {

    await page.goto('https://google.com')

})
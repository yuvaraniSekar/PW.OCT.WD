import { test } from "@playwright/test";

test("Window Handling",async({page,context})=>{
    await page.goto("https://www.flipkart.com/")
    const search = page.locator("//input[@name='q']")
    await search.fill("mobiles")
    await search.press("Enter")

    const newTab = context.waitForEvent('page')
    page.locator("//div[@class='KzDlHZ']").first().click()
    const newPage = await newTab
    
    console.log(await newPage.title())
    await page.bringToFront()
    
    console.log(await page.title());
    await search.clear();
    
await page.waitForTimeout(2000)


})
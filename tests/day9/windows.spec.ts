import { test } from "@playwright/test";
test("Handling window",async({context,page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("mobiles")
    await page.keyboard.press('Enter')
    //create promise
    const newPromise = context.waitForEvent('page')
    page.locator("//div[@data-cy='title-recipe']").first().click()
    //promise resolved
    const newTab = await newPromise
    console.log(await newTab.title());//child window 
    await page.bringToFront()//activate prent window
    console.log(await page.title());//parent window
    await page.waitForTimeout(2000)
    
    


})
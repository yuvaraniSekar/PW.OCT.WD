import { Page, test } from "@playwright/test";
test("Multiple window",async({page,context})=>{
    await page.goto("https://leafground.com/")
    await page.locator("//i[@class='pi pi-globe layout-menuitem-icon']").click()
    await page.locator("//span[text()='Window']").click()
   /*  const[mutipleWindows]= await Promise.all([
        context.waitForEvent('page'),
        
    ]) */
  await page.getByText("Open Multiple",{exact:true}).click()
  await page.waitForTimeout(4000);
    const allpage = page.context().pages()
    console.log(allpage.length);

     allpage.forEach(async tabs => {
        console.log(tabs.url());
        await tabs.waitForTimeout(2000)
        console.log(await tabs.title());
     }); 

         let webpage:any
        for (let i = 0; i < allpage.length; i++) {
           await allpage[i].waitForTimeout(2000)
           const title = await allpage[i].title();
           console.log("The title of the page -->" + title);
           if(title==="Dashboard"){
            webpage = allpage[i]
        
           }
           }
           
           
           await webpage.locator("#email").fill("yuvarani@gmail.com");
          
        
        
   
    

})
/* import { expect, test } from "@playwright/test";
import path from "path";


test('test to upload the file',async({page})=>{
    await page.goto("https://leafground.com/select.xhtml")
    await page.locator(".pi.pi-circle-off.layout-menuitem-icon").click()
    await page.locator("//span[text()='File']").click()
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator("input[type=file]").setInputFiles([path.join(__dirname, '../../Data/02-NumberType.pdf')])

    await expect(page.locator(".card").filter({has:page.getByText("Basic Upload")})
.locator(".ui-fileupload-filename")).toContainText("01-Primitive-Datatypes (1).pdf")

await page.waitForTimeout(3000);
}) */


import { test } from "@playwright/test";
import path from "path";
// Remove ES module specific code; Node.js provides __dirname natively in CommonJS

test("File upload",async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")
    const upload =  page.locator("(//input[@type='file'])[1]")
    await upload.setInputFiles("Data/fUpload.txt")
    await page.waitForTimeout(2000)

   // const filePath = 
    await upload.setInputFiles(path.join(__dirname,"../../Data/fUpload.txt"));
}
)
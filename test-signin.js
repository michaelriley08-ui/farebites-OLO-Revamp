const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
    
    console.log("Navigating to localhost:8000/sign-in.html...");
    await page.goto('http://localhost:8000/sign-in.html');
    
    console.log("Typing credentials...");
    await page.fill('#auth-email-input', 'test@test.com');
    await page.fill('#auth-password-input', 'Password123!');
    
    console.log("Clicking Sign In...");
    await page.click('button:has-text("Sign In")');
    
    await page.waitForTimeout(3000);
    
    const errorText = await page.textContent('#auth-error');
    console.log("Error text is:", errorText);
    
    await browser.close();
})();

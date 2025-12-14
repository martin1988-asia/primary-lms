const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Define hub pages directly
  const hubs = {
    Students: 'https://martin1988-asia.github.io/primary-lms/students.html',
    Teachers: 'https://martin1988-asia.github.io/primary-lms/teachers.html',
    Parents: 'https://martin1988-asia.github.io/primary-lms/parents.html',
    Admin: 'https://martin1988-asia.github.io/primary-lms/admin.html'
  };

  for (const [hubName, hubUrl] of Object.entries(hubs)) {
    try {
      await page.goto(hubUrl, { waitUntil: 'networkidle0' });
      const pageText = await page.evaluate(() => document.body.innerText);

      console.log(`\nChecking ${hubName} hub (${hubUrl})`);
      console.log(pageText.includes(hubName)
        ? `✅ ${hubName} hub loaded successfully`
        : `❌ ${hubName} hub text missing`);
    } catch (err) {
      console.error(`❌ Error loading ${hubName} hub:`, err.message);
    }
  }

  await browser.close();
})();

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const dir = 'output';
const url = 'http://localhost:3000';

// check output directory
if (fs.existsSync(dir)) {
  console.log(`${dir} is exist`);
} else {
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`${dir} is created`);
  })
}

const output = fs.createWriteStream(path.join(__dirname, dir, 'example.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 }
});
archive.pipe(output);

(async () => {
  console.log(`[${url}] start`)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: `${dir}/example.png` });

  // get html document
  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  archive.append(bodyHTML, { name: 'example.txt' })
  archive.finalize();

  await browser.close();
})();

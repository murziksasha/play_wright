const { chromium } = require('@playwright/test');

async function scrapeBBC() {
  // Запуск браузера
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Переход на главную страницу BBC
  await page.goto('https://www.bbc.com');

  // Извлечение заголовков новостей
  const headlines = await page.$$eval('h2', elements =>
    elements.map(element => element.innerText.trim())
  );

  console.log('BBC News Headlines:');
  console.log(headlines);

  // Закрытие браузера
  await browser.close();
}

scrapeBBC();

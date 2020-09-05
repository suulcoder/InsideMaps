
const {Builder, By, Key, util} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');


async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
}

example();

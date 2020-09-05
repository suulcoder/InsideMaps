
const {Builder, By, Key, util} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
import { expect } from 'chai';


async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    const component = await driver.findElement(webdriver.By.id("login"));
    expect(component).equal("login");
}

example();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectValue = exports.scrollIntoView = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputValue = exports.getValue = exports.getIframeElement = exports.getAttributeText = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;

const clickElement = async (page, elementIdentifier) => {
  await page.click(elementIdentifier);
};

exports.clickElement = clickElement;

const clickElementAtIndex = async (page, elementIdentifier, elementPosition) => {
  const element = await page.$(`${elementIdentifier}>>nth=${elementPosition}`);
  await element?.click();
};

exports.clickElementAtIndex = clickElementAtIndex;

const inputValue = async (page, elementIdentifier, input) => {
  await page.focus(elementIdentifier);
  await page.fill(elementIdentifier, input);
};

exports.inputValue = inputValue;

const selectValue = async (page, elementIdentifier, option) => {
  await page.focus(elementIdentifier);
  await page.selectOption(elementIdentifier, option);
};

exports.selectValue = selectValue;

const checkElement = async (page, elementIdentifier) => {
  await page.check(elementIdentifier);
};

exports.checkElement = checkElement;

const uncheckElement = async (page, elementIdentifier) => {
  await page.uncheck(elementIdentifier);
};

exports.uncheckElement = uncheckElement;

const getValue = async (page, elementIdentifier) => {
  await page.waitForSelector(elementIdentifier);
  const value = await page.$eval(elementIdentifier, el => {
    return el.value;
  });
  return value;
};

exports.getValue = getValue;

const getIframeElement = async (page, iframeIdentifier) => {
  await page.waitForSelector(iframeIdentifier);
  const elementHandle = await page.$(iframeIdentifier);
  const elementIframe = await elementHandle?.contentFrame();
  return elementIframe;
};

exports.getIframeElement = getIframeElement;

const inputValueOnIframe = async (elementIframe, elementIdentifier, inputValue) => {
  await elementIframe.fill(elementIdentifier, inputValue);
};

exports.inputValueOnIframe = inputValueOnIframe;

const inputValueOnPage = async (pages, pageIndex, elementIdentifier, inputValue) => {
  await pages[pageIndex].focus(elementIdentifier);
  await pages[pageIndex].fill(elementIdentifier, inputValue);
};

exports.inputValueOnPage = inputValueOnPage;

const getAttributeText = async (page, elementIdentifier, attribute) => {
  const attributeText = page.locator(elementIdentifier).getAttribute(attribute);
  return attributeText;
};

exports.getAttributeText = getAttributeText;

const scrollIntoView = async (page, elementIdentifier) => {
  const element = page.locator(elementIdentifier);
  await element.scrollIntoViewIfNeeded();
};

exports.scrollIntoView = scrollIntoView;
"use strict";

var _cucumber = require("@cucumber/cucumber");

(0, _cucumber.When)(/^I click (accept)?(dismiss)? on the alert dialog$/, async function (acceptDialog, dismissDialog) {
  const {
    screen: {
      page
    }
  } = this;
  console.log(`I click ${dismissDialog ? 'dismiss ' : 'accept '}on the alert dialog`);

  if (!!dismissDialog) {
    page.on('dialog', dialog => dialog.dismiss());
  } else {
    page.on('dialog', dialog => dialog.accept());
  }
});
import { Given } from '@cucumber/cucumber'

Given(
    /^I am on the homepage$/,
    async function() {
        console.log('I am on the homepage');

        await global.page.goto('http://localhost:3000/')
    }
)
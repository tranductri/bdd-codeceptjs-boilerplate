const { I } = inject()

Given('Admin account is logged', () => {
    I.amOnPage('/'); // opens main page of website
    I.fillField('//*[@id="username"]', '44_ninh_admin')
    I.fillField('//*[@id="password"]', '12345678')
    I.click('Login')
});

Given('Benefit menuitem is opened', () => {
    I.click('//*[@id="root"]/div/section/aside/div/ul/li[2]/a')
});

When('I fill code in Search box field', () => {
    I.fillField('//*[@id="search"]', 'DF001')
    I.pressKey('Enter')
});

Then('Results matched to code will be shown on the benefit page', () => {
    I.see('DF001','//*[@id="root"]/div/section/section/main/div/div[2]/div[2]/div/div/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr/td/span[2]/span')
});

const { pause } = require("codeceptjs");

// npx codeceptjs generate:test ( tao test moi)
Feature('login'); // npx codecept-ui --app
let accounts = new DataTable(['username', 'password']);
accounts.add(['shinboizz', 'lequangphu123']);
accounts.add(['davert', '']);
accounts.add(['', 'xinchao123']);  
accounts.add(['admin', '123456']);
accounts.add(['shinboizz', 'xinchao123']); 


Data(accounts).Scenario('TC_Login', ({ I, current }) => {
    I.closeOtherTabs();
    I.amOnPage("/tai-khoan/");
    I.fillField({ xpath: `//*[@id="username"]` }, current.username);
    I.fillField({ xpath: `//*[@id="password"]` }, current.password);
    I.click({xpath: `//*[@id="post-504"]/div/div/form/p[3]/button`})
    I.see(current.username, {xpath: `/html/body/div[2]/div/div/div/main/article/div/div/div/p[1]/strong[1]`})
});

Feature('logout'); // npx codecept-ui --app
Scenario('TC_logout', ({ I }) => {
    I.amOnPage("/tai-khoan/");
    I.fillField({ xpath: `//*[@id="username"]` }, "shinboizz");
    I.fillField({ xpath: `//*[@id="password"]` }, "lequangphu123")
    I.click({xpath: `//*[@id="post-504"]/div/div/form/p[3]/button`})
    I.click({xpath: `//*[@id="post-504"]/div/div/nav/ul/li[6]/a`})
});

Feature('addshipping'); // npx codecept-ui --app
let shipping = new DataTable(['Fname', 'Lname', 'Ctyname', 'country', 'address1', 'address2', 'city', 'code']);
shipping.add(['Phu', 'Le', 'shinboizz', 'VN', 'dongnai', 'dntu', 'bienhoa', '6000']);


Data(shipping).Scenario('TC_Shipping', ({ I, current }) => {
    I.amOnPage("/tai-khoan/");
    I.fillField({ xpath: `//*[@id="username"]` }, "shinboizz");
    I.fillField({ xpath: `//*[@id="password"]` }, "lequangphu123");
    I.click({xpath: `//*[@id="post-504"]/div/div/form/p[3]/button`});
    I.click({ xpath:`//*[@id="post-504"]/div/div/nav/ul/li[4]/a`});
    I.click({ xpath:`//*[@id="post-504"]/div/div/div/div[2]/div[2]/header/a`});
    I.fillField({ xpath: `//*[@id="shipping_first_name"]` }, current.Fname);
    I.fillField({ xpath: `//*[@id="shipping_last_name"]` }, current.Lname);
    I.fillField({ xpath: `//*[@id="shipping_company"]` }, current.Ctyname);

    I.selectOption({xpath: `//*[@id="shipping_country"]`}, current.country)
    I.fillField({ xpath: `//*[@id="shipping_address_1"]` }, current.address1);
    I.fillField({ xpath: `//*[@id="shipping_address_2"]` }, current.address2);
    I.fillField({ xpath: `//*[@id="shipping_city"]` }, current.city);
    I.fillField({ xpath: `//*[@id="shipping_postcode"]` }, current.code);
    // I.wait(10);

});


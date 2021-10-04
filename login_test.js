const { pause } = require("codeceptjs");

Feature('login'); // npx codecept-ui --app
let accounts = new DataTable(['username', 'password']);
accounts.add(['shinboizz', 'lequangphu123']);
accounts.add(['davert', '']); 
accounts.add(['admin', '123456']);


Data(accounts).Scenario('TC_Login', ({ I, current }) => {
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

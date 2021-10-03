const { pause } = require("codeceptjs");

Feature('login'); // npx codecept-ui --app

Scenario('TC_Login_01', ({ I }) => {
    I.amOnPage("/tai-khoan/");
    I.fillField({ xpath: `//*[@id="username"]` }, "shinboizz");
    I.fillField({ xpath: `//*[@id="password"]` }, "lequangphu123")
    I.click({xpath: `//*[@id="post-504"]/div/div/form/p[3]/button`})
    locate({xpath: `//*[@id="wp-admin-bar-my-account"]/a`}).withText("Chào, shinboizz")
    //I.see({xpath: `/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a/span`}, "Khang Truong Gia")
});

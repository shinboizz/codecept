
const { pause } = require("codeceptjs");
Feature('order'); // npx codecept-ui --app
let order = new DataTable(['name', 'address', 'city', 'phone', 'email']);
order.add(['khang', 'truong dntu', 'tpbienhoa', '012345', 'khang@gmail.com']);
order.add(['', '', '', '', '']);
order.add(['khang', 'truong dntu', 'tpbienhoa', 'xinchao', 'khang@gmail.com']);
order.add(['khang', 'truong dntu', 'tpbienhoa', '012345', 'khanggmail.com']);
order.add(['khang', 'truong dntu', 'tpbienhoa', '012345', 'khang@gmailcom']);



Data(order).Scenario('TC_order', ({ I, current }) => {
    I.amOnPage("/cua-hang/");
    I.click({ xpath: `//*[@id="main"]/div/ul/li[1]/div[2]/a[2]`});
    I.click({ xpath: `//*[@id="main"]/div/ul/li[1]/div[2]/a[3]`});
    I.click({ xpath: `//*[@id="post-502"]/div/div/div[2]/div/div/a`});
    I.fillField({ xpath: `//*[@id="billing_first_name"]` },current.name);
    I.fillField({ xpath: `//*[@id="billing_address_1"]` },current.address);
    I.fillField({ xpath: `//*[@id="billing_city"]` },current.city);
    I.fillField({ xpath: `//*[@id="billing_phone"]` },current.phone);
    I.fillField({ xpath: `//*[@id="billing_email"]` },current.email);
    I.click({ xpath: `//*[@id="payment_method_cod"]`});
    I.click({ xpath: `//*[@id="place_order"]`});
    I.see("Cảm ơn bạn. Đơn hàng của bạn đã được nhận.", { xpath: `//*[@id="post-503"]/div/div/div/p[1]`});
    I.wait(10);
});

Feature('luckyball'); // npx codecept-ui --app
let luckyball = new DataTable(['Fname', 'Lname', 'email', 'phone', 'address', 'number']);
luckyball.add(['khang', 'gia', 'khang@gmail.com', '012345', 'bienhoa', '60']);
luckyball.add(['', '', '', '', '', '']);
luckyball.add(['khang', 'gia', 'khanggmail.com', '012345', 'bienhoa', '60']);
luckyball.add(['khang', 'gia', 'khang@gmailcom', '012345', 'bienhoa', '60']);
luckyball.add(['khang', 'gia', 'khang@gmail.com', '012345', 'bienhoa', 'aaa']);


Data(luckyball).Scenario('TC_luckyball', ({ I, current }) => {
    I.amOnPage("/lucky-ball-in-the-weekend/");
    I.fillField({ xpath: `//*[@id="wpforms-604-field_1"]` }, current.Fname);
    I.fillField({ xpath: `//*[@id="wpforms-604-field_1-last"]` }, current.Lname);
    I.fillField({ xpath: `//*[@id="wpforms-604-field_2"]` }, current.email);
    I.fillField({ xpath: `//*[@id="wpforms-604-field_6"]` }, current.phone);
    I.fillField({ xpath: `//*[@id="wpforms-604-field_4"]` }, current.address);
    I.fillField({ xpath: `//*[@id="wpforms-604-field_3"]` }, current.number);
    I.click({ xpath: `//*[@id="wpforms-submit-604"]` });
    I.see("Thanks for contacting us! We will be in touch with you shortly.",{ xpath: `//*[@id="wpforms-confirmation-604"]`})
    I.wait(10);

});

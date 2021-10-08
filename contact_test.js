
Feature('contact'); // npx codecept-ui --app
let contact = new DataTable(['Fname', 'Lname', 'email', 'phone', 'address', 'comment']);
contact.add(['phong', 'huynh', 'phong@gmail.com', '03334455', 'bienhoa', 'xinchao']);
contact.add(['', '', '', '', '', '']); //null
contact.add(['phong', 'huynh', 'phonggmail.com', '03334455', 'bienhoa', 'xinchao']); //sai gmail
contact.add(['phong', 'huynh', 'phong@gmailcom', '03334455', 'bienhoa', 'xinchao']); // sai gmail
contact.add(['phong', 'huynh', 'phong@gmail.com', 'asdasd', 'bienhoa', 'xinchao']); // sai sdt


Data(contact).Scenario('TC_Contact', ({ I, current }) => {
    I.amOnPage("/khach-hang-binh-luan/");
 
    I.fillField({ xpath: `//*[@id="wpforms-5-field_12"]` }, current.Fname);
    I.fillField({ xpath: `//*[@id="wpforms-5-field_12-last"]` }, current.Lname);
    I.fillField({ xpath: `//*[@id="wpforms-5-field_14"]` }, current.email);
    I.fillField({ xpath: `//*[@id="wpforms-5-field_13"]` }, current.phone);
    I.fillField({ xpath: `//*[@id="wpforms-5-field_17"]` }, current.address);
    I.fillField({ xpath: `//*[@id="wpforms-5-field_16"]` }, current.comment);
    I.click({xpath:`//*[@id="wpforms-submit-5"]`}) // submit
    I.see("Thanks for contacting us! We will be in touch with you shortly.",{xpath:`//*[@id="wpforms-confirmation-5"]`}) // thấy dòng báo
    I.wait(5);

});
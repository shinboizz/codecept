Feature('Register');

// Scenario('TC_Register_01', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });
//npx codecept-ui --app
Scenario('TC_Register_02', ( {I} ) => {
    I.amOnPage("/tai-khoan/")
    I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
    I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
    I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
    I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
    I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
    I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
   
    I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
    I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
    I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
    I.wait(5)
    I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
    I.click({xpath: '//*[@id="createusersub"]'})
    locate({xpath: '//*[@id="createuser"]/table[1]/tbody/tr[1]/th/label'}).withText("Tên người dùng ")
    I.wait(10)
    
});

// Scenario('TC_Register_03', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsi zip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_04', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_05', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
  
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_06', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmailcom")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_07', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
   
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_08', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
    
//     I.wait(5)
//     I.fillField({xpath: '//*[@id="pass1"]'}, "Tri@0396870696")
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });

// Scenario('TC_Register_09', ( {I} ) => {
//     I.amOnPage("/tai-khoan/")
//     I.fillField({ xpath: '//*[@id="username"]' }, "shinboizz")
//     I.fillField({ xpath: '//*[@id="password"]' }, "lequangphu123")
//     I.click({xpath: '//*[@id="post-504"]/div/div/form/p[3]/button'})
//     I.click({xpath: '//*[@id="wp-admin-bar-site-name"]/a'})
//     I.click({xpath: '//*[@id="menu-users"]/a/div[3]'})
//     I.click({xpath:'//*[@id="menu-users"]/ul/li[3]/a'})
//     I.fillField({xpath: '//*[@id="user_login"]'}, "tsizip")
//     I.fillField({xpath: '//*[@id="email"]'}, "tsizip@gmail.com")
//     I.fillField({xpath: '//*[@id="first_name"]'}, "tri")
//     I.fillField({xpath: '//*[@id="last_name"]'}, "nguyen")

    
//     I.click({xpath: '//*[@id="createusersub"]'})
//     locate({xpath: '//*[@id="user-7"]/td[2]'}).withText("tri nguyen")
//     I.wait(10)
    
// });




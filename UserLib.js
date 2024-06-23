$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp2 = new PgComponentType('comp2', 'header no login');
        comp_comp2.code = '<header class="header" data-pg-collapsed> \
    <div class="header__user-operation" data-pg-collapsed> \
        <div className="header__login-form" class="header__login-form">\
            <div class="header__input-area">\
                <input type="text" placeholder="Register Login" maxlength="14" className=\'header__input\' class="header__input"/>\
                <input type="password" placeholder="Register Password" maxlength="14" className=\'header__input\' class="header__input"/>\
            </div>\
            <div class="header__login-forgot-area">\
                <button type="button" class="header__auth-button">Вход</button>\
                <button class="header__button-forgot-password">Forgot password ?</button>\
            </div>\
        </div>         \
        <div class="header__black-line"></div>\
        <button type="button" class="header__quick-registration-button">Быстрая регистрация</button>         \
    </div>\
    <div class="header__search-bar"> \
        <div class="header__left-wave" data-pg-collapsed> \
            <div class="header__left-hide-wave"></div>             \
        </div>\
        <input type="text" placeholder="Search..." class="header__search-input"/>\
        <div class="header__search-button-arrea" data-pg-collapsed>\
            <button type="button" class="header__search-button"></button>             \
        </div>\
        <div class="header__right-wave" data-pg-collapsed> \
            <div class="header__right-hide-wave"></div>             \
        </div>\
    </div>     \
</header>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp2]);

        f.addLibSection(section);
   });
});
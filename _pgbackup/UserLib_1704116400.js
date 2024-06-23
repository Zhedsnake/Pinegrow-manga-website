$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / header');
        comp_comp1.code = '<header class="header" data-pg-collapsed> \
    <div class="header__user-operation"> \
        <div class="header__authorised-user-container">\
            <div class="header__welcome">\
                <p>Welcome, Zhedad</p>\
            </div>\
            <button type="button" class="header__auth-button">Logout</button>\
        </div>         \
        <div class="home-line"></div>         \
        <button type="button" class="header__switch-button">Switch to Register</button>         \
    </div>\
    <div class="header__search-bar"> \
        <div class="header__wave"> \
            <div class="header__hide-wave"></div>             \
        </div>\
        <input type="text" placeholder="Search..." class="header__search-input"/>\
        <div class="header__search-button-arrea">\
            <button type="button" class="header__search-button"></button>             \
        </div>\
    </div>     \
</header>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});
/* THE JQUERY PLUGIN */
jQuery.fn.isgfilter = function (options) {
    "use strict";
    
    // Selector
    var selector = jQuery(this);
    
    // Plugin Settings
    var settings = jQuery.extend({
        portfolioid: '#isg-skills-container'
    }, options);
    
    // Filter Menu Events
    selector.find("li").on("click", function (event) {
        
        event.preventDefault();
        
        // Selectors
        var filter = jQuery(this).data('filter');
        var item = jQuery(settings.portfolioid).find("figure");
        
        // Remove isg-filter-active class from all the menu items
        selector.find("li").removeClass('isg-filter-active');
        
        // Add isg-filter-active class to the selected item
        jQuery(this).addClass('isg-filter-active');
        
        // Show the items which has the selected filter and hide the others
        item.each(function () {
            var filtereditem = jQuery(this);
            if (filtereditem.filter("[data-filter~=" + filter + "]").length) {
                filtereditem.removeClass('hide-item');
            } 
            else {
                filtereditem.addClass('hide-item');
            }
        });
        
        return false;
        
    });
};

/* INITIALIZE THE PLUGIN */
jQuery(document).ready(function () {
    "use strict";
    jQuery("#isg-skills-filter").isgfilter({
        portfolioid: "#isg-skills-container"
    });
});

/* MOBILE FILTER MENU */
jQuery(".isg-filter-menu-icon", "#isg-panels").on('click', function () {
    "use strict";
    jQuery('.isg-skills-filter', "#isg-panels").slideToggle(200);
    return false;
});

/* HIDE/SHOW THE MENU ITEMS ACCORDING TO THE SCREEN SIZE */
jQuery(window).on('resize orientationchange', function () {
    "use strict";
    if (jQuery(window).width() > 800) {
        jQuery('.isg-skills-filter', "#isg-panels").show();
    } 
    else {
        jQuery('.isg-skills-filter', "#isg-panels").hide();
    }
});
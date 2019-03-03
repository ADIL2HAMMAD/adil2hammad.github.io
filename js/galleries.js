// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict"; 
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: true,
        autoplayControls: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/photos/mm1.png',
            // Thumbnail url
            'thumb': 'images/photos/1s.png',
            // Title of the image
            'subHtml': "site en version PC"
        }, {
            'src': 'images/photos/mm3.png',
            'thumb': 'images/photos/3s.png',
            'subHtml': 'Site en version Tablette'
        }, {
            'src': 'images/photos/mm2.png',
            'thumb': 'images/photos/2s.png',
            'subHtml': 'Site en version Mobile'
        }]
        
    });
    
    return false;
});
// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict"; 
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: true,
        autoplayControls: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/photos/molaflex1.png',
            // Thumbnail url
            'thumb': 'images/photos/1s.png',
            // Title of the image
            'subHtml': "site en version PC"
        }, {
            'src': 'images/photos/molaflex3.png',
            'thumb': 'images/photos/3s.png',
            'subHtml': 'Site en version Tablette'
        }, {
            'src': 'images/photos/molaflex2.png',
            'thumb': 'images/photos/2s.png',
            'subHtml': 'Site en version Mobile'
        }]
        
    });
    
    return false;
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict"; 
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: true,
        autoplayControls: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/photos/lemedia1.png',
            // Thumbnail url
            'thumb': 'images/photos/1s.png',
            // Title of the image
            'subHtml': "site en version PC"
        }, {
            'src': 'images/photos/lemedia3.png',
            'thumb': 'images/photos/3s.png',
            'subHtml': 'Site en version Tablette'
        }, {
            'src': 'images/photos/lemedia2.png',
            'thumb': 'images/photos/2s.png',
            'subHtml': 'Site en version Mobile'
        }]
        
    });
    
    return false;
});



//sticky header scroll hook to toggle shrunked look
jQuery(document).ready( () => {

    var stickyHeader = jQuery(".o-header--sticky");
    if(stickyHeader.length) {
        jQuery(document).on("scroll", function() {
            var scroll = jQuery(document).scrollTop();
            if(scroll > 70){
                stickyHeader.addClass("is-shrunk");
            } else {
                stickyHeader.removeClass("is-shrunk");
            }
        });
    }

});

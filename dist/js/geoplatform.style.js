
/* ================================== *\
   Click support for "multi" buttons
\* ================================== */

$(document)
    .on('click', '.btn-group-multi > .btn-multi', function (evt) {

    var tgt = $(evt.target);
    if(!tgt.hasClass('btn-group-multi'))
        tgt = tgt.closest('.btn-group-multi');
    tgt.toggleClass('active');
    
});
;


/* 
    Old .grid-item tab hook 
    DEPRECATED
    use .gp-ui-card for grid results
*/
$(document).on('click', '.grid-item .grid-item-detail-tabs .btn.grid-item-detail-tab', function(event) {

    var btn = $(event.target);
    if(!btn.hasClass("btn")) btn = btn.parent();

    var selector = btn.data('target');

    var item = btn.closest('.grid-item');

    //deactive current detail section
    item.find('.grid-item-detail.active').removeClass('active');

    //activate selected detail section
    item.find(".grid-item-details").find(selector).addClass('active');
    
    //deactivate other tabs
    btn.siblings().removeClass('active');
    btn.addClass('active');

});


/* New .gp-ui-card tab hook */
$(document).on('click', '.gp-ui-card__tab', function(event) {
    var tab = $(event.target);
    if(!tab.hasClass('btn')) tab = tab.parent();
    if(tab.hasClass('active')) return;

    tab.siblings().removeClass('active');
    tab.addClass('active');

    var pane = tab.closest('.gp-ui-card').find(tab.data('target'));
    pane.siblings().removeClass('active');
    pane.addClass('active');

});
;


/* ----------------------------------------- *\
    Material Forms JS Support
\* ----------------------------------------- */

(function($) {
    
    var REQUIRED_CLASS = 'is-required';
    var CHECKED_CLASS = 'is-checked';
    var FOCUS_CLASS = 'is-focused';
    var ERROR_CLASS = 'has-error';
    var EMPTY_CLASS = 'is-empty';

    var GROUP_SELECTOR = '.form-group.t-material';

    var selector = GROUP_SELECTOR + ' > .form-control, ' + 
                   GROUP_SELECTOR + ' > .input-group > .form-control, ' + 
                   GROUP_SELECTOR + ' > .input-group-slick > .form-control';
                   
    var switchSelector = GROUP_SELECTOR + '.switch .lever';
    var requiredSelector = GROUP_SELECTOR + ' .form-control[required]';

    /*
     * Listen for form control focus events and apply .is-focused class
     */
    $(document).on('focus', selector, function(event) {
        var field = $(event.target);
        var group = field.closest(GROUP_SELECTOR);
        group.addClass(FOCUS_CLASS);
    });


    /*
     * Listen for form control blur events and remove .is-focused class
     */
    $(document).on('blur', selector, function(event) {
        var field = $(event.target);
        var group = field.closest(GROUP_SELECTOR);
        group.removeClass(FOCUS_CLASS);
    });


    /*
     * Listen for form control change events and apply or remove 
     * .is-empty, .is-required, and .has-error classes appropriately
     */
    $(document).on('change', selector, function(event) {
        var field = $(event.target);
        var group = field.closest(GROUP_SELECTOR);
        if(field.val().length) { 
            group.removeClass(EMPTY_CLASS);

            //if supports HTML5 constraint API, check for validity
            // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation
            if(typeof(field[0].checkValidity) !== 'undefined') {
                
                if(field[0].checkValidity()) 
                    group.removeClass(ERROR_CLASS);
                else 
                    group.addClass(ERROR_CLASS);

            } else
                group.removeClass(ERROR_CLASS);

        } else {
            group.addClass(EMPTY_CLASS);
            if(group.hasClass(REQUIRED_CLASS)) 
                group.addClass(ERROR_CLASS);
        }
    });



    /*
     * Listen for switch control lever clicks and set 
     * the hidden checkbox input appropriately
     */
    $(document).on('click', switchSelector, function(event) {
        var field = $(event.target);
        var checkbox = field.siblings('[type="checkbox"]');
        var isChecked = checkbox.is(":checked");
        var group = field.closest('.switch');
        checkbox.prop("checked", !isChecked);
        if(isChecked) {
            group.removeClass(CHECKED_CLASS);
        } else {
            group.addClass(CHECKED_CLASS);
        }
    });


    /*
     * Find form controls with required attribute and assign 
     * the .is-required class to their parent form groups
     */
    $(document).find(requiredSelector).each(function(index, input) {
        var $input = $(input);
        var group = $input.closest(GROUP_SELECTOR);
        group.addClass(REQUIRED_CLASS);
        $input.trigger('change');
    });


}) (jQuery);
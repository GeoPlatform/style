
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

    var selector = '.form-group.t-material > .form-control, .form-group.t-material > .input-group > .form-control';
        
    $(document).on('focus', selector, function(event) {
        var field = $(event.target);
        var group = field.closest('.form-group.t-material');
        group.addClass('is-focused');
    });

    $(document).on('blur', selector, function(event) {
        var field = $(event.target);
        var group = field.closest('.form-group.t-material');
        group.removeClass('is-focused');
    });

    $(document).on('change', selector, function(event) {
        var field = $(event.target);
        var group = field.closest('.form-group.t-material');
        if(field.val().length)  group.removeClass('is-empty');
        else                    group.addClass('is-empty');
    });




    var switchSelector = '.form-group.switch .lever';
    $(document).on('click', switchSelector, function(event) {
        var field = $(event.target);
        var checkbox = field.siblings('[type="checkbox"]');
        var isChecked = checkbox.is(":checked");
        var group = field.closest('.switch');
        checkbox.prop("checked", !isChecked);
        if(isChecked) {
            group.removeClass('is-checked');
        } else {
            group.addClass('is-checked');
        }
    });

}) (jQuery);
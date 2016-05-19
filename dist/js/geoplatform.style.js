
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
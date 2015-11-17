

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
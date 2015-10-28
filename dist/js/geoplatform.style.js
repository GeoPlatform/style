
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


$(document).on('click', '.grid-item .grid-item-detail-tabs .btn', function(event) {

    var btn = $(event.target);
    if(!btn.hasClass("btn")) btn = btn.parent();

    var index = btn.index() + 1;

    btn.closest('.grid-item').find('.grid-item-detail').removeClass('active');
    btn.closest('.grid-item').find('.grid-item-detail:nth-child(' + index + ')').addClass('active');
    btn.siblings().removeClass('active');
    btn.addClass('active');

});
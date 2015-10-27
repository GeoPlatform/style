
/* ================================== *\
   Click support for "multi" buttons
\* ================================== */

$(document)
    .on('click', '.btn-group-multi > .btn-multi', function (e) {

    var tgt = $(evt.target);
    if(!tgt.hasClass('btn-group-multi'))
        tgt = tgt.closest('.btn-group-multi');
    tgt.toggleClass('active');
    
});
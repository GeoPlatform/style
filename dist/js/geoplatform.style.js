
/* ================================== *\
   Click support for "multi" buttons
\* ================================== */

$('.btn-group-multi > .btn-multi').on('click', function(evt) {
    var tgt = $(evt.target);
    if(!tgt.hasClass('btn-group-multi'))
        tgt = tgt.closest('.btn-group-multi');
    tgt.toggleClass('active');
});
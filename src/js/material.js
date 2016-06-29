

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
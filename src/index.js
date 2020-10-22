window.$ = require('jquery')

$(document).ready(function () {
    $(".select-arrow").on('click', function (el) {
        let id = $(el.target).attr('id').replace(/\D/g, '');
        let menu = $("#menu" + id);
        let border = $("#border" + id);
        if (menu.is(":visible")) {
            menu.hide();
            border.css('border-radius','4px')
        } else {
            menu.show();
            border.css('border-radius','0')
            border.css('border-top-left-radius','4px')
            border.css('border-top-right-radius','4px')
        }
    })
})

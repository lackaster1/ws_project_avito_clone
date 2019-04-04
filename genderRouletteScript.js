$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.basic-gender-container');
    var close_modal = $('.close-button-container, #overlay');
    var modal = $('.modal-form-main-container');

    open_modal.click(function (event) {
        event.preventDefault();
        overlay.fadeIn(400,
            function () {
                modal
                    .css('display', 'block', 'opacity')
                    .animate({opacity: 1, top: '50%'}, 100);
            });
    });

    close_modal.click(function () {
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

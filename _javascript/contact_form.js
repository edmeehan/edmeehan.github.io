(function($) {

    var formSuccess;

    $('#contact-form').submit(function(event){
        event.preventDefault();

        let data = {};
        
        $(this).serializeArray()
            .forEach((item) => {
                data[item.name] = item.value;
            });

        if($(this).hasClass('active')) return;

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbwEp73O79JI-Ix3qVWCQUcDY921bHyZYn8ferTFC3HNMiA0cMI/exec',
            method: 'POST',
            data: data
        })
        .done(function() {
            //success
            formSuccess = true;
        })
        .fail(function() {
            //error
            formSuccess = false;
        })
        .always(function() {
            //complete
            formComplete();
        });

        $(this).addClass('active')
            .find('input, textarea')
            .attr('disabled',true);
    });

    // adds a calls to the form element to display proper mesesage
    function formComplete(){
        if(formSuccess){
            $('#contact-form').addClass('success');
        }else{
            $('#contact-form').addClass('fail');
        }
    }

})(jQuery);
/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('slow');

    $("#set_key_form").on("submit", function(evnt) {
        evnt.preventDefault();
        var key = $(this).find("input").val();

        var objs_v = {'torrentleech.key':key};
        chrome.storage.local.set(objs_v, function(){
            $("#msg").text("Key was set.").fadeIn("slow").fadeOut("slow");
        });

    });

}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_main);

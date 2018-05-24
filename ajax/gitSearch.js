

$(document).on('keypress', event => {
    if (event.keyCode === 13) {
        const $searchBtn = $("#search");
        const btnValue = $searchBtn.val();
        const address = `https://api.github.com/search/users?q=${btnValue}`;

        const request = $.ajax({
            url: address,
            method: "GET"
        })

        request.done(msg => {
            var items = msg.items;
            var $display = $("#display");
            $display.html("");
            var htmlString = "";
            for (var i = 0; i < items.length; i++){
                //var $newDiv = $() 
                htmlString += ("<div><p>" + items[i].login + "</p><img src='"+items[i].avatar_url+"'></div>");
            }
            $display.html(htmlString);
        })

    }

});




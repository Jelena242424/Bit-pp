$(function () {

    $("#search").on('keypress', event => {
       if (event.keyCode === 13) { //da pretrazuje cim kucam ovo mi ne treba
            const $searchBtn = $("#search");
            const btnValue = $searchBtn.val();
            const address = `https://api.github.com/search/users?q=${btnValue}`;

            const request = $.ajax({
                url: address,
                method: "GET"
            });

            request.done(msg => {
                const items = msg.items;
                const $display = $("#display");
                //$display.html("");
                let htmlString = "";
                for (let i = 0; i < items.length; i++) {
                    //var $newDiv = $() mogu da ubacim Id=[i] kada dodajem html content da bi mogla da selektujem sve elemente iz drom dovn menija i stavila im .on("click", function...da je vidim koji jej i)

                    //htmlString += (`<a id="${i}" class="dropdown-item">${items[i].login}</a><br>`);
                     htmlString += (`<div><p> ${items[i].login} </p><img src=' ${items[i].avatar_url} '></div>`);
                }
                $display.html(htmlString);
               // $('#display a').on('click', function() {
                    // const i = $(this).attr('id');

                    // const user = items[i].avatar_url;
                    // alert(user);
               // });
            });

            request.fail((response, textStatus) =>  {
                alert( textStatus /*`Request failed: ${textStatus}`*/);
                console.log(response.responseText); //response.message parsirati json
                });
                

        }

    });

});


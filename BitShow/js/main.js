const dataModule = (function () {

    class Show {
        constructor(name, image, id) {
            this.name = name;
            this.image = image;
            this.id = id;
        }
    }

    const loadData = function (doneHandler) {
        $.ajax({
            url: "http://api.tvmaze.com/shows",
            method: "GET"
        }).done(function (listShows) {
            const list = listShows;
            list.sort(function (curr, next) {
                const a = curr.rating.average;
                const b = next.rating.average;
                return b - a;
            });

            const reformedList50 = list.slice(0, 50).map(singleShowObj => {
                const show = new Show(singleShowObj.name, singleShowObj.image.medium, singleShowObj.id);
                return show
            })
            console.log(reformedList50);
            doneHandler(reformedList50)
            //loadData je funkcija, koju je pozvao main controler. Ona preko ajaxa i druge logike daje rezultat reformedlist50.
            // Da bi smo podatke vratili mainu, potrebna nam je callback funkcija doneHandler, koja je preuzela podatke reformedlista50 i prosledio loadData.

        });
    };

    const fetchSingleShow = function (id, doneHandler) {
        $.ajax({
            url: "http://api.tvmaze.com/shows/" + id,
            method: "GET"
        }).done(function(show) {
            const myShow = new Show(show.name, show.image.orignal, );
        })
    }

    return {

        loadData
    }


})();

const uiModule = (function () {

    const showData = function (showList) {
        const $display = $(".display");
        let showListOnPage = "";
        for (let i = 0; i < showList.length; i++) {
            showListOnPage += (`<div class="show-card col-4" data-id='${showList[i].id}'>
                                <img src='${showList[i].image}'><p>${showList[i].name}<p></div>`);

        }
        $display.html(showListOnPage);
    }


    return {
        showData,
    }


})();

const mainController = (function (data, ui) {
    $(document).on('click', ".show-card", function () {
        // get id
        let idValue = $(".show-card").attr("id");
        // set to ls
        localStorage.setItem("id", "idValue");
        // redirect to single page 
    });

    const loadData = data.loadData(function (showLIst) {
        ui.showData(showLIst)

    });
    const loadInfoPage = data.loadInfoPage(function(info){
        ui.showInfoPage(info)
    });


    function init() {
        data.loadData(doneHandler);
    }

    return {
        init,
    }

})(dataModule, uiModule);
const dataModule = (function () {

    class Show {
        constructor(name, image, id, summary = "", seasons = "", cast = "") {
            this.name = name;
            this.image = image;
            this.id = id;
            this.summary = summary;
            this.seasons = seasons;
            this.cast = cast;
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
            });
            
            doneHandler(reformedList50);
            //loadData je funkcija, koju je pozvao main controler. Ona preko ajaxa i druge logike daje rezultat reformedlist50.
            // Da bi smo podatke vratili mainu, potrebna nam je callback funkcija doneHandler, koja je preuzela podatke reformedlista50 i prosledio loadData.

        });
    };

    const searchData = function (doneHandler) {
        const $searchInput = $("#search-field");
        const searchValue = $searchInput.val();
        $.ajax({
            url: `http://api.tvmaze.com/search/shows?q=${searchValue}`,
            method: "GET"
        }).done(function(list){
            doneHandler(list);
        })
    };


    const fetchSingleShow = function (id, doneHandler) {
        $.ajax({
            url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
            method: "GET"
        }).done(function(show) {
            const showDetail = new Show(show.name, show.image.original, show.id, show.summary, show._embedded.seasons, show._embedded.cast);
            
            doneHandler(showDetail);
        });

    }

    return {
        loadData,
        fetchSingleShow,
        searchData
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

    const loadInfoPage = function(singleShowInfo) {
        const $showTitle= $(".show-title h1");
        $showTitle.text(singleShowInfo.name);
        const $displayImage = $(".detail-show-image");
        $displayImage.html(`<img src='${singleShowInfo.image}'>`);
        const $displayShowDetail = $(".show-detail-text");
        $displayShowDetail.html(singleShowInfo.summary);
    }

    const loadSeasonsInfo = function(singleShowInfo) {
        const listOfSeasons = singleShowInfo.seasons;
        const $seasonsNumber = $(".season-number");
        $seasonsNumber.text(`Seasons (${listOfSeasons.length})`);
        const $displaySeasonDates = $(".seasons-dates");
        let showSeasonDatesOnPage = "";
        for (let i = 0; i < listOfSeasons.length; i++) {
            if (listOfSeasons[i].premiereDate) {
                showSeasonDatesOnPage += `<li>${listOfSeasons[i].premiereDate}  ${listOfSeasons[i].endDate}</li>`;
            } else {
                showSeasonDatesOnPage += `<li>TBO</li>`;
            }
        }
        $displaySeasonDates.html(showSeasonDatesOnPage);
    }

    const loadCast = function(singleShowInfo) {
        const listOfCasts = singleShowInfo.cast;
        const $displayCast = $(".show-cast");
        let showCastOnPage = "";
        for (let i = 0; i < listOfCasts.length; i++) {
            showCastOnPage += `<li>${listOfCasts[i].person.name}</li>`;
        }
        $displayCast.html(showCastOnPage);
    }

    const showDropdownData = function(list) {
        const $dropdownMenu = $(".dropdown-menu");
        let showSearch = "";
        if (list.length ===  0) {
            showSearch = `<span class="dropdown-item">No results found.</span>`;
        }
        for (let i = 0; i < list.length; i++) {
            showSearch += `<span class="dropdown-item" data-id="${list[i].show.id}">${list[i].show.name}</span>`;
            if (i > 9) {
                break;
            }
        }
        $dropdownMenu.html(showSearch);
    }

    $(document).on('click', ".show-card, .dropdown-item", function () {
        // get id
        let $idValue = $(this).data("id");
        if (!$idValue) {
            return;
        }
        // set to ls u data
        localStorage.setItem("id", $idValue);

        // redirect to single page
        window.open('/showInfoPage.html', "_self");
    });

    return {
        showData,
        loadInfoPage,
        loadSeasonsInfo,
        loadCast,
        showDropdownData
    }
})();


const mainController = (function (data, ui) {

    $("#search-field").on("keyup", function(){
        data.searchData(list => {
            ui.showDropdownData(list);
        });
    });

    const id = localStorage.getItem("id");

    if(id) {
       initSingle();
    } else { 
        initHome();
    }

    function initHome() {
        data.loadData(showList => {
            ui.showData(showList);
        });
    };

    function initSingle() {
        data.fetchSingleShow(id, singleShowInfo => {
            ui.loadInfoPage(singleShowInfo);
            ui.loadSeasonsInfo(singleShowInfo);
            ui.loadCast(singleShowInfo);
        });
        localStorage.removeItem("id");
    }

    return {
        initHome,
        initSingle
    }

})(dataModule, uiModule);





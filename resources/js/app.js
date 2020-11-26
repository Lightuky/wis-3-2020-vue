$("#copyYear").html(new Date().getFullYear());

let movies_array = new Vue({
    el: '#main',
    data: {
        searchString: "",
        sortOrder: "down",
        sortKey: "title",
        movies: movies_data.sort(function(a, b) {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        })
    },
    computed: {
        SortedMovies: function () {
            let movies_array = this.movies,
                sortKey = this.sortKey,
                sortOrder = this.sortOrder,
                searchString = this.searchString;

            movies_array = movies_array.sort(function(a, b) {
                if (sortKey === "title") {
                    if (sortOrder === "down") {
                        return a.fr_title.toLowerCase().localeCompare(b.fr_title.toLowerCase());
                    }
                    else {
                        return b.fr_title.toLowerCase().localeCompare(a.fr_title.toLowerCase());
                    }
                }
                else if (sortKey === "year") {
                    return sortOrder === "down" ? b.year - a.year : a.year - b.year;
                }
                else if (sortKey === "rate") {
                    return sortOrder === "down" ? b.rate - a.rate : a.rate - b.rate;
                }
            })

            if (!searchString) {
                return movies_array;
            }

            searchString = searchString.trim().toLowerCase();
            movies_array = movies_array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })

            return movies_array;
        }
    },
    methods: {
        toggleByIndex: function(index){
            let movieBlockIndex = ".movieBlock.p-" + index;
            $(movieBlockIndex).toggleClass("movieActive");
            $(movieBlockIndex + " .movieInfoBlock").toggleClass("d-none");
            $(movieBlockIndex + " .movieInfoList").toggleClass("d-none d-flex");
        },
        checkWatchlist: function(picture){
            this.updateLocalStorage(picture, "check");
        },
        updateWatchlist: function(picture) {
            this.updateLocalStorage(picture, "update");
        },
        updateLocalStorage: function (picture, state) {
            let localWatchList = JSON.parse(localStorage.getItem("watchlist"));
            let movieBlockIndexButton = ".movieBlock.p-" + picture + " .movieInfoBlock .buttonWatchlist";
            if (localWatchList === null) {
                if (state === "check") {
                    localStorage.setItem("watchlist",JSON.stringify(localWatchList));
                    $(movieBlockIndexButton).text("Ajouter à la watchlist");
                }
                else if (state === "update") {
                    localStorage.setItem("watchlist",JSON.stringify([picture]));
                }
            }
            else {
                if($.inArray(picture, localWatchList) !== -1) {
                    if (state === "check") {
                        $(movieBlockIndexButton).text("Retirer de la watchlist");
                    }
                    else if (state === "update") {
                        let indexPicture = localWatchList.indexOf(picture);
                        localWatchList.splice(indexPicture, 1);
                        localStorage.setItem("watchlist",JSON.stringify(localWatchList));
                    }
                }
                else {
                    if (state === "check") {
                        $(movieBlockIndexButton).text("Ajouter à la watchlist");
                    }
                    else if (state === "update") {
                        localWatchList.push(picture);
                        localStorage.setItem("watchlist",JSON.stringify(localWatchList));
                    }
                }
            }
        }
    }
});
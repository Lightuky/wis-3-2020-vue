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
            let movieBlockIndex = ".movieBlock.i-" + index;
            $(movieBlockIndex).toggleClass("movieActive");
            $(movieBlockIndex + " .movieInfoBlock").toggleClass("d-none");
            $(movieBlockIndex + " .movieInfoList").toggleClass("d-none d-flex");
        }
    }
});
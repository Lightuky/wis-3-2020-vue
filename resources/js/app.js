$("#copyYear").html(new Date().getFullYear());

let movies_array = new Vue({
    el: '#main',
    data: {
        searchString: "",
        sortKey: "title",
        movies: movies_data.sort(function(a, b) {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        })
    },
    computed: {
        SortedMovies: function () {
            let movies_array = this.movies,
                sortKey = this.sortKey,
                searchString = this.searchString;

            movies_array = movies_array.sort(function(a, b) {
                if (sortKey === "title") {
                    return a.fr_title.toLowerCase().localeCompare(b.fr_title.toLowerCase());
                }
                else if (sortKey === "year") {
                    return b.year - a.year;
                }
                else if (sortKey === "rate") {
                    return b.rate - a.rate;
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
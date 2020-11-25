const movies_data = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": "2h 22min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 9.3,
        "picture": "les-evades",
        "fr_title": "Les Évadés"

    },
    {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "duration": "2h 55min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 9.2,
        "picture": "le-parrain",
        "fr_title": "Le Parrain"

    },
    {
        "title": "The Godfather: Part II",
        "year": 1974,
        "director": "Francis Ford Coppola",
        "duration": "3h 22min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 9,
        "picture": "le-parrain-2",
        "fr_title": "Le Parrain 2ième Partie"
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "duration": "2h 32min",
        "genre": [
            "Action",
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 9,
        "picture": "the-dark-night",
        "fr_title": "The Dark Knight : Le Chevalier noir"
    },
    {
        "title": "12 Angry Men",
        "year": 1957,
        "director": "Sidney Lumet",
        "duration": "1h 36min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.9,
        "picture": "douze-hommes",
        "fr_title": "Douze Hommes en colère"

    },
    {
        "title": "Schindler\"s List",
        "year": 1993,
        "director": "Steven Spielberg",
        "duration": "3h 15min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire"
        ],
        "rate": 8.9,
        "picture": "la-liste-de",
        "fr_title": "La Liste de Schindler"

    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "duration": "2h 34min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.9,
        "picture": "pulp-fiction",
        "fr_title": "Pulp Fiction"

    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "director": "Peter Jackson",
        "duration": "3h 21min",
        "genre": [
            "Aventure",
            "Drame",
            "Fantasy"
        ],
        "rate": 8.9,
        "picture": "lotr-retour",
        "fr_title": "Le Seigneur des anneaux : Le Retour du roi"

    },
    {
        "title": "Il buono, il brutto, il cattivo",
        "year": 1966,
        "director": "Sergio Leone",
        "duration": "3h 2min",
        "genre": [
            "Western"
        ],
        "rate": 8.9,
        "picture": "bon-brute-truand",
        "fr_title": "Le Bon, la Brute et le Truand"

    },
    {
        "title": "Fight Club",
        "year": 1999,
        "director": "David Fincher",
        "duration": "2h 19min",
        "genre": [
            "Drame"
        ],
        "rate": 8.8,
        "picture": "fight-club",
        "fr_title": "Fight Club"

    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "director": "Peter Jackson",
        "duration": "2h 58min",
        "genre": [
            "Aventure",
            "Drame",
            "Fantasy"
        ],
        "rate": 8.8,
        "picture": "lotr-commu",
        "fr_title": "Le Seigneur des anneaux : La Communauté de l'anneau"

    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "director": "Robert Zemeckis",
        "duration": "2h 22min",
        "genre": [
            "Comedie",
            "Drame",
            "Romance"
        ],
        "rate": 8.8,
        "picture": "forest",
        "fr_title": "Forrest Gump"

    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980,
        "director": "Irvin Kershner",
        "duration": "2h 4min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.8,
        "picture": "star-wars-empire",
        "fr_title": "Star Wars, épisode V : L'Empire contre-attaque"

    },
    {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "duration": "2h 28min",
        "genre": [
            "Action",
            "Aventure",
            "S.F",
            "Thriller"
        ],
        "rate": 8.8,
        "picture": "inception",
        "fr_title": "Inception"

    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "director": "Peter Jackson",
        "duration": "2h 59min",
        "genre": [
            "Aventure",
            "Drame",
            "Fantasy"
        ],
        "rate": 8.7,
        "picture": "lotr-towers",
        "fr_title": "Le Seigneur des anneaux : Les Deux Tours"

    },
    {
        "title": "One Flew Over the Cuckoo\"s Nest",
        "year": 1975,
        "director": "Milos Forman",
        "duration": "2h 13min",
        "genre": [
            "Drame"
        ],
        "rate": 8.7,
        "picture": "vol-coucou",
        "fr_title": "Vol au-dessus d'un nid de coucou"

    },
    {
        "title": "Goodfellas",
        "year": 1990,
        "director": "Martin Scorsese",
        "duration": "2h 26min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.7,
        "picture": "les-affranchis",
        "fr_title": "Les Affranchis"

    },
    {
        "title": "The Matrix",
        "year": 1999,
        "director": "Lana Wachowski",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "S.F"
        ],
        "rate": 8.7,
        "picture": "matrix",
        "fr_title": "Matrix"

    },
    {
        "title": "Shichinin no samurai",
        "year": 1954,
        "director": "Akira Kurosawa",
        "duration": "3h 27min",
        "genre": [
            "Aventure",
            "Drame"
        ],
        "rate": 8.7,
        "picture": "7-samurais",
        "fr_title": "Les Sept Samouraïs"

    },
    {
        "title": "Star Wars",
        "year": 1977,
        "director": "George Lucas",
        "duration": "2h 1min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.7,
        "picture": "star-wars",
        "fr_title": "La guerre des étoiles"

    },
    {
        "title": "Cidade de Deus",
        "year": 2002,
        "director": "Fernando Meirelles",
        "duration": "2h 10min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.7,
        "picture": "cite-dieu",
        "fr_title": "La Cité de Dieu"

    },
    {
        "title": "Se7en",
        "year": 1995,
        "director": "David Fincher",
        "duration": "2h 7min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.6,
        "picture": "seven",
        "fr_title": "Seven"

    },
    {
        "title": "The Silence of the Lambs",
        "year": 1991,
        "director": "Jonathan Demme",
        "duration": "1h 58min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.6,
        "picture": "silence-agneaux",
        "fr_title": "Le Silence des agneaux"

    },
    {
        "title": "It\"s a Wonderful Life",
        "year": 1946,
        "director": "Frank Capra",
        "duration": "2h 10min",
        "genre": [
            "Drame",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.6,
        "picture": "vie-belle",
        "fr_title": "La vie est belle"

    },
    {
        "title": "La vita è bella",
        "year": 1997,
        "director": "Roberto Benigni",
        "duration": "1h 56min",
        "genre": [
            "Comedie",
            "Drame",
            "Guerre"
        ],
        "rate": 8.6,
        "picture": "vita-bella",
        "fr_title": "La vie est belle"

    },
    {
        "title": "The Usual Suspects",
        "year": 1995,
        "director": "Bryan Singer",
        "duration": "1h 46min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.6,
        "picture": "usual-suspects",
        "fr_title": "Usual Suspects"

    },
    {
        "title": "Léon",
        "year": 1988,
        "director": "Luc Besson",
        "duration": "1h 50min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.6,
        "picture": "leon",
        "fr_title": "Léon"

    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "director": "Steven Spielberg",
        "duration": "2h 49min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.6,
        "picture": "soldat-ryan",
        "fr_title": "Il faut sauver le soldat Ryan"

    },
    {
        "title": "Sen to Chihiro no kamikakushi",
        "year": 2001,
        "director": "Hayao Miyazaki",
        "duration": "2h 5min",
        "genre": [
            "Animation",
            "Aventure",
            "Familial",
            "Fantasy",
            "Suspens"
        ],
        "rate": 8.6,
        "picture": "voyage-chihiro",
        "fr_title": "Le Voyage de Chihiro"

    },
    {
        "title": "American History X",
        "year": 1998,
        "director": "Tony Kaye",
        "duration": "1h 59min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.5,
        "picture": "american-history",
        "fr_title": "American History X"

    },
    {
        "title": "C\"era una volta il West",
        "year": 1968,
        "director": "Sergio Leone",
        "duration": "2h 44min",
        "genre": [
            "Western"
        ],
        "rate": 8.6,
        "picture": "etait-fois-ouest",
        "fr_title": "Il était une fois dans l'Ouest"

    },
    {
        "title": "Interstellar",
        "year": 2014,
        "director": "Christopher Nolan",
        "duration": "2h 49min",
        "genre": [
            "Aventure",
            "Drame",
            "S.F"
        ],
        "rate": 8.6,
        "picture": "interstellar",
        "fr_title": "Interstellar"

    },
    {
        "title": "Psycho",
        "year": 1960,
        "director": "Alfred Hitchcock",
        "duration": "1h 49min",
        "genre": [
            "Horreur",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "psychose",
        "fr_title": "Psychose"

    },
    {
        "title": "The Green Mile",
        "year": 1999,
        "director": "Frank Darabont",
        "duration": "3h 9min",
        "genre": [
            "Crime",
            "Drame",
            "Fantasy",
            "Suspens"
        ],
        "rate": 8.5,
        "picture": "ligne-verte",
        "fr_title": "La Ligne verte"

    },
    {
        "title": "Casablanca",
        "year": 1942,
        "director": "Michael Curtiz",
        "duration": "1h 42min",
        "genre": [
            "Drame",
            "Romance",
            "Guerre"
        ],
        "rate": 8.5,
        "picture": "Casablanca",
        "fr_title": "Casablanca"

    },
    {
        "title": "City Lights",
        "year": 1931,
        "director": "Charles Chaplin",
        "duration": "1h 27min",
        "genre": [
            "Comedie",
            "Drame",
            "Romance"
        ],
        "rate": 8.6,
        "picture": "lumieres-ville",
        "fr_title": "Les Lumières de la ville"

    },
    {
        "title": "Intouchables",
        "year": 2011,
        "director": "Olivier Nakache",
        "duration": "1h 52min",
        "genre": [
            "Biographie",
            "Comedie",
            "Drame"
        ],
        "rate": 8.6,
        "picture": "intouchables",
        "fr_title": "Intouchables"

    },
    {
        "title": "Modern Times",
        "year": 1936,
        "director": "Charles Chaplin",
        "duration": "1h 27min",
        "genre": [
            "Comedie",
            "Drame",
            "Familial",
            "Romance"
        ],
        "rate": 8.5,
        "picture": "temps-modernes",
        "fr_title": "Les Temps modernes"

    },
    {
        "title": "Raiders of the Lost Ark",
        "year": 1981,
        "director": "Steven Spielberg",
        "duration": "1h 55min",
        "genre": [
            "Action",
            "Aventure"
        ],
        "rate": 8.5,
        "picture": "aventuriers-arche",
        "fr_title": "Les Aventuriers de l'arche perdue"

    },
    {
        "title": "The Pianist",
        "year": 2002,
        "director": "Roman Polanski",
        "duration": "2h 30min",
        "genre": [
            "Biographie",
            "Drame",
            "Music",
            "Guerre"
        ],
        "rate": 8.5,
        "picture": "le-pianiste",
        "fr_title": "Le Pianiste"

    },
    {
        "title": "The Departed",
        "year": 2006,
        "director": "Martin Scorsese",
        "duration": "2h 31min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "les-infiltres",
        "fr_title": "Les Infiltrés"

    },
    {
        "title": "Rear Window",
        "year": 1954,
        "director": "Alfred Hitchcock",
        "duration": "1h 52min",
        "genre": [
            "Suspens",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "fenetre-sur-cour",
        "fr_title": "Fenêtre sur cour"

    },
    {
        "title": "Terminator 2: Judgment Day",
        "year": 1991,
        "director": "James Cameron",
        "duration": "2h 17min",
        "genre": [
            "Action",
            "S.F",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "terminator-jugement",
        "fr_title": "Terminator 2 : Le Jugement dernier"

    },
    {
        "title": "Back to the Future",
        "year": 1985,
        "director": "Robert Zemeckis",
        "duration": "1h 56min",
        "genre": [
            "Aventure",
            "Comedie",
            "S.F"
        ],
        "rate": 8.5,
        "picture": "retour-vers-futur",
        "fr_title": "Retour vers le futur"

    },
    {
        "title": "Whiplash",
        "year": 2014,
        "director": "Damien Chazelle",
        "duration": "1h 47min",
        "genre": [
            "Drame",
            "Music"
        ],
        "rate": 8.5,
        "picture": "whiplash",
        "fr_title": "Whiplash"

    },
    {
        "title": "Gladiator",
        "year": 2000,
        "director": "Ridley Scott",
        "duration": "2h 35min",
        "genre": [
            "Action",
            "Aventure",
            "Drame"
        ],
        "rate": 8.5,
        "picture": "gladiator",
        "fr_title": "Gladiator"

    },
    {
        "title": "The Prestige",
        "year": 1994,
        "director": "Christopher Nolan",
        "duration": "2h 10min",
        "genre": [
            "Drame",
            "Suspens",
            "S.F",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "le-prestige",
        "fr_title": "Le Prestige"

    },
    {
        "title": "The Lion King",
        "year": 1994,
        "director": "Roger Allers",
        "duration": "1h 28min",
        "genre": [
            "Animation",
            "Aventure",
            "Drame",
            "Familial",
            "Musical"
        ],
        "rate": 8.5,
        "picture": "roi-lion",
        "fr_title": "Le Roi Lion"

    },
    {
        "title": "Memento",
        "year": 2000,
        "director": "Christopher Nolan",
        "duration": "1h 53min",
        "genre": [
            "Suspens",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "memento",
        "fr_title": "Memento"

    },
    {
        "title": "Apocalypse Now",
        "year": 1979,
        "director": "Francis Ford Coppola",
        "duration": "2h 27min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.5,
        "picture": "apocalyspse-now",
        "fr_title": "Apocalypse Now"

    },
    {
        "title": "Alien",
        "year": 1979,
        "director": "Ridley Scott",
        "duration": "1h 57min",
        "genre": [
            "Horreur",
            "S.F"
        ],
        "rate": 8.5,
        "picture": "alien",
        "fr_title": "Alien, le huitième passager"

    },
    {
        "title": "The Great Dictator",
        "year": 1940,
        "director": "Charles Chaplin",
        "duration": "2h 5min",
        "genre": [
            "Comedie",
            "Drame",
            "Guerre"
        ],
        "rate": 8.5,
        "picture": "le-dictateur",
        "fr_title": "Le Dictateur"

    },
    {
        "title": "Sunset Blvd.",
        "year": 1950,
        "director": "Billy Wilder",
        "duration": "1h 50min",
        "genre": [
            "Drame",
            "Film-Noir"
        ],
        "rate": 8.5,
        "picture": "boulevard-crépuscule",
        "fr_title": "Boulevard du crépuscule"

    },
    {
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "year": 1964,
        "director": "Stanley Kubrick",
        "duration": "1h 35min",
        "genre": [
            "Comedie"
        ],
        "rate": 8.5,
        "picture": "dr-folamour",
        "fr_title": "Docteur Folamour"

    },
    {
        "title": "Nuovo Cinema Paradiso",
        "year": 1988,
        "director": "Giuseppe Tornatore",
        "duration": "2h 35min",
        "genre": [
            "Drame"
        ],
        "rate": 8.5,
        "picture": "cinema-paradiso",
        "fr_title": "Cinema Paradiso"

    },
    {
        "title": "Das Leben der Anderen",
        "year": 2006,
        "director": "Florian Henckel von Donnersmarck",
        "duration": "2h 17min",
        "genre": [
            "Drame",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "la-vie-des-autres",
        "fr_title": "La Vie des autres"

    },
    {
        "title": "Hotaru no haka",
        "year": 1988,
        "director": "Isao Takahata",
        "duration": "1h 29min",
        "genre": [
            "Animation",
            "Drame",
            "Guerre"
        ],
        "rate": 8.5,
        "picture": "tombeau-lucioles",
        "fr_title": "Le Tombeau des lucioles"

    },
    {
        "title": "Blade Runner 2049",
        "year": 2017,
        "director": "Denis Villeneuve",
        "duration": "2h 44min",
        "genre": [
            "Suspens",
            "S.F",
            "Thriller"
        ],
        "rate": 8.5,
        "picture": "blade-runner-2049",
        "fr_title": "Blade Runner 2049"

    },
    {
        "title": "Paths of Glory",
        "year": 1957,
        "director": "Stanley Kubrick",
        "duration": "1h 28min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.4,
        "picture": "sentiers-gloire",
        "fr_title": "Les Sentiers de la gloire"

    },
    {
        "title": "Django Unchained",
        "year": 2012,
        "director": "Quentin Tarantino",
        "duration": "2h 45min",
        "genre": [
            "Drame",
            "Western"
        ],
        "rate": 8.4,
        "picture": "django",
        "fr_title": "Django Unchained"

    },
    {
        "title": "The Shining",
        "year": 1980,
        "director": "Stanley Kubrick",
        "duration": "2h 26min",
        "genre": [
            "Drame",
            "Horreur"
        ],
        "rate": 8.4,
        "picture": "shining",
        "fr_title": "Shining"

    },
    {
        "title": "WALL·E",
        "year": 2008,
        "director": "Andrew Stanton",
        "duration": "1h 38min",
        "genre": [
            "Animation",
            "Aventure",
            "Familial",
            "S.F"
        ],
        "rate": 8.4,
        "picture": "wall-e",
        "fr_title": "WALL-E"

    },
    {
        "title": "American Beauty",
        "year": 1999,
        "director": "Sam Mendes",
        "duration": "2h 2min",
        "genre": [
            "Drame",
            "Romance"
        ],
        "rate": 8.4,
        "picture": "american-beauty",
        "fr_title": "American Beauty"

    },
    {
        "title": "The Dark Knight Rises",
        "year": 2012,
        "director": "Christopher Nolan",
        "duration": "2h 44min",
        "genre": [
            "Action",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "dark-knight-rises",
        "fr_title": "The Dark Knight Rises"

    },
    {
        "title": "Mononoke-hime",
        "year": 1997,
        "director": "Hayao Miyazaki",
        "duration": "2h 14min",
        "genre": [
            "Animation",
            "Aventure",
            "Fantasy"
        ],
        "rate": 8.4,
        "picture": "princesse-mononoke",
        "fr_title": "Princesse Mononoké"

    },
    {
        "title": "Oldeuboi",
        "year": 2003,
        "director": "Chan-wook Park",
        "duration": "2h",
        "genre": [
            "Action",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "old-boy",
        "fr_title": "Old Boy"

    },
    {
        "title": "Aliens",
        "year": 1986,
        "director": "James Cameron",
        "duration": "2h 17min",
        "genre": [
            "Action",
            "Aventure",
            "S.F",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "aliens",
        "fr_title": "Aliens, le retour"

    },
    {
        "title": "Witness for the Prosecution",
        "year": 1957,
        "director": "Billy Wilder",
        "duration": "1h 56min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "temoin-a-charge",
        "fr_title": "Témoin à charge"

    },
    {
        "title": "Once Upon a Time in America",
        "year": 1984,
        "director": "Sergio Leone",
        "duration": "3h 49min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.4,
        "picture": "il-etait-fois-amerique",
        "fr_title": "Il était une fois en Amérique"

    },
    {
        "title": "Das Boot",
        "year": 1981,
        "director": "Wolfgang Petersen",
        "duration": "2h 29min",
        "genre": [
            "Aventure",
            "Drame",
            "Thriller",
            "Guerre"
        ],
        "rate": 8.4,
        "picture": "das-boot",
        "fr_title": "Das Boot"

    },
    {
        "title": "Citizen Kane",
        "year": 1941,
        "director": "Orson Welles",
        "duration": "1h 59min",
        "genre": [
            "Drame",
            "Suspens"
        ],
        "rate": 8.4,
        "picture": "citizen-kane",
        "fr_title": "Citizen Kane"

    },
    {
        "title": "Dangal",
        "year": 2016,
        "director": "Nitesh TiGuerrei",
        "duration": "2h 41min",
        "genre": [
            "Action",
            "Biographie",
            "Drame",
            "Sport"
        ],
        "rate": 8.6,
        "picture": "dangal",
        "fr_title": "Dangal"

    },
    {
        "title": "Vertigo",
        "year": 2001,
        "director": "Alfred Hitchcock",
        "duration": "2h 8min",
        "genre": [
            "Suspens",
            "Romance",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "vertigo",
        "fr_title": "Sueurs froides"

    },
    {
        "title": "North by Northwest",
        "year": 1959,
        "director": "Alfred Hitchcock",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "Aventure",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "mort-aux-trousses",
        "fr_title": "La Mort aux trousses"

    },
    {
        "title": "Star Wars: Episode VI - Return of the Jedi",
        "year": 1983,
        "director": "Richard Marquand",
        "duration": "2h 11min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.4,
        "picture": "star-wars-retour",
        "fr_title": "Star Wars, épisode VI : Le Retour du Jedi"

    },
    {
        "title": "Braveheart",
        "year": 1995,
        "director": "Mel Gibson",
        "duration": "2h 58min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.4,
        "picture": "braveheart",
        "fr_title": "Braveheart"

    },
    {
        "title": "Reservoir Dogs",
        "year": 1992,
        "director": "Quentin Tarantino",
        "duration": "1h 39min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "reservoir-dogs",
        "fr_title": "Reservoir Dogs"

    },
    {
        "title": "M",
        "year": 1931,
        "director": "Fritz Lang",
        "duration": "1h 57min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "m-le-maudit",
        "fr_title": "M le maudit"

    },
    {
        "title": "Requiem for a Dream",
        "year": 2000,
        "director": "Darren Aronofsky",
        "duration": "1h 42min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "requiem-dream",
        "fr_title": "Requiem for a Dream"

    },
    {
        "title": "Le fabuleux destin d\"Amélie Poulain",
        "year": 2001,
        "director": "Jean-Pierre Jeunet",
        "duration": "2h 2min",
        "genre": [
            "Comedie",
            "Romance"
        ],
        "rate": 8.4,
        "picture": "fabuleux-destin-amelie",
        "fr_title": "Le Fabuleux Destin d'Amélie Poulain"

    },
    {
        "title": "Taare Zameen Par",
        "year": 2007,
        "director": "Aamir Khan",
        "duration": "2h 45min",
        "genre": [
            "Drame",
            "Familial"
        ],
        "rate": 8.5,
        "picture": "taare-zameen-par",
        "fr_title": "Taare Zameen Par"

    },
    {
        "title": "A Clockwork Orange",
        "year": 1971,
        "director": "Stanley Kubrick",
        "duration": "2h 16min",
        "genre": [
            "Crime",
            "Drame",
            "S.F"
        ],
        "rate": 8.3,
        "picture": "orange-mecanique",
        "fr_title": "Orange mécanique"

    },
    {
        "title": "Kimi no na wa.",
        "year": 2016,
        "director": "Makoto Shinkai",
        "duration": "1h 46min",
        "genre": [
            "Animation",
            "Drame",
            "Fantasy",
            "Romance"
        ],
        "rate": 8.5,
        "picture": "your-name",
        "fr_title": "Your Name."

    },
    {
        "title": "Lawrence of Arabia",
        "year": 1962,
        "director": "David Lean",
        "duration": "3h 36min",
        "genre": [
            "Aventure",
            "Biographie",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.3,
        "picture": "lawrence-d-arabie",
        "fr_title": "Lawrence d'Arabie"

    },
    {
        "title": "Double Indemnity",
        "year": 1944,
        "director": "Billy Wilder",
        "duration": "1h 47min",
        "genre": [
            "Crime",
            "Drame",
            "Film-Noir",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "assurance-sur-la-mort",
        "fr_title": "Assurance sur la mort"

    },
    {
        "title": "Amadeus",
        "year": 1984,
        "director": "Milos Forman",
        "duration": "2h 40min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire",
            "Music"
        ],
        "rate": 8.3,
        "picture": "amadeus",
        "fr_title": "Amadeus"

    },
    {
        "title": "Eternal Sunshine of the Spotless Mind",
        "year": 2004,
        "director": "Michel Gondry",
        "duration": "1h 48min",
        "genre": [
            "Drame",
            "Romance",
            "S.F"
        ],
        "rate": 8.3,
        "picture": "Du soleil plein la tête",
        "fr_title": "Du soleil plein la tête"

    },
    {
        "title": "Taxi Driver",
        "year": 1976,
        "director": "Martin Scorsese",
        "duration": "1h 53min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.3,
        "picture": "taxi-driver",
        "fr_title": "Taxi Driver"

    },
    {
        "title": "To Kill a Mockingbird",
        "year": 1962,
        "director": "Robert Mulligan",
        "duration": "2h 9min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.3,
        "picture": "du-silence-ombres",
        "fr_title": "Du silence et des ombres"

    },
    {
        "title": "Dunkirk",
        "year": 2017,
        "director": "Christopher Nolan",
        "duration": "1h 46min",
        "genre": [
            "Action",
            "Drame",
            "Histoire",
            "Thriller",
            "Guerre"
        ],
        "rate": 8.3,
        "picture": "dunkerque",
        "fr_title": "Dunkerque"

    },
    {
        "title": "Full Metal Jacket",
        "year": 1987,
        "director": "Stanley Kubrick",
        "duration": "1h 56min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.3,
        "picture": "full-metal-jacket",
        "fr_title": "Full Metal Jacket"

    },
    {
        "title": "2001: A Space Odyssey",
        "year": 1968,
        "director": "Stanley Kubrick",
        "duration": "2h 29min",
        "genre": [
            "Aventure",
            "S.F"
        ],
        "rate": 8.3,
        "picture": "2001-l-odyssee",
        "fr_title": "2001, l'Odyssée de l'espace"

    },
    {
        "title": "Singin\" in the Rain",
        "year": 1952,
        "director": "Stanley Donen",
        "duration": "1h 43min",
        "genre": [
            "Comedie",
            "Musical",
            "Romance"
        ],
        "rate": 8.3,
        "picture": "chantons-sous-la-pluie",
        "fr_title": "Chantons sous la pluie"

    },
    {
        "title": "Toy Story 3",
        "year": 2010,
        "director": "Lee Unkrich",
        "duration": "1h 43min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.3,
        "picture": "toy-story-3",
        "fr_title": "Toy Story 3"

    },
    {
        "title": "Toy Story",
        "year": 1995,
        "director": "John Lasseter",
        "duration": "1h 21min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.3,
        "picture": "toy-story",
        "fr_title": "Toy Story"

    },
    {
        "title": "The Sting",
        "year": 1973,
        "director": "George Roy Hill",
        "duration": "2h 9min",
        "genre": [
            "Comedie",
            "Crime",
            "Drame"
        ],
        "rate": 8.3,
        "picture": "l-arnaque",
        "fr_title": "L'Arnaque"

    },
    {
        "title": "3 Idiots",
        "year": 2009,
        "director": "Rajkumar Hirani",
        "duration": "2h 50min",
        "genre": [
            "Aventure",
            "Comedie",
            "Drame",
            "Romance"
        ],
        "rate": 8.4,
        "picture": "3-idiots",
        "fr_title": "3 Idiots"

    },
    {
        "title": "Ladri di biciclette",
        "year": 1948,
        "director": "Vittorio De Sica",
        "duration": "1h 29min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "voleur-de-bicyclette",
        "fr_title": "Le Voleur de bicyclette"

    },
    {
        "title": "Inglourious Basterds",
        "year": 2009,
        "director": "Quentin Tarantino",
        "duration": "2h 33min",
        "genre": [
            "Aventure",
            "Drame",
            "Guerre"
        ],
        "rate": 8.3,
        "picture": "inglorious-basterds",
        "fr_title": "Inglourious Basterds"

    },
    {
        "title": "The Kid",
        "year": 1921,
        "director": "Charles Chaplin",
        "duration": "1h 8min",
        "genre": [
            "Comedie",
            "Drame",
            "Familial"
        ],
        "rate": 8.3,
        "picture": "the-kid",
        "fr_title": "The Kid"

    },
    {
        "title": "Snatch",
        "year": 2000,
        "director": "Guy Ritchie",
        "duration": "1h 44min",
        "genre": [
            "Comedie",
            "Crime"
        ],
        "rate": 8.3,
        "picture": "snatch",
        "fr_title": "Snatch : Tu braques ou tu raques"

    },
    {
        "title": "Monty Python and the Holy Grail",
        "year": 1975,
        "director": "Terry Gilliam",
        "duration": "1h 31min",
        "genre": [
            "Aventure",
            "Comedie",
            "Fantasy"
        ],
        "rate": 8.3,
        "picture": "monty-python-graal",
        "fr_title": "Monty Python : Sacré Graal !"

    },
    {
        "title": "Good Will Hunting",
        "year": 1997,
        "director": "Gus Van Sant",
        "duration": "2h 6min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "will-hunting",
        "fr_title": "Will Hunting"

    },
    {
        "title": "Jagten",
        "year": 2012,
        "director": "Thomas Vinterberg",
        "duration": "1h 55min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "la-chasse",
        "fr_title": "La Chasse"

    },
    {
        "title": "Per qualche dollaro in più",
        "year": 1965,
        "director": "Sergio Leone",
        "duration": "2h 12min",
        "genre": [
            "Western"
        ],
        "rate": 8.3,
        "picture": "pour-quelques-dollars",
        "fr_title": "Et pour quelques dollars de plus"

    },
    {
        "title": "L.A. Confidential",
        "year": 1997,
        "director": "Curtis Hanson",
        "duration": "2h 18min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "l-a-confidential",
        "fr_title": "L.A. Confidential"

    },
    {
        "title": "Scarface",
        "year": 1983,
        "director": "Brian De Palma",
        "duration": "2h 50min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.3,
        "picture": "scarface",
        "fr_title": "Scarface"

    },
    {
        "title": "The Apartment",
        "year": 1960,
        "director": "Billy Wilder",
        "duration": "2h 5min",
        "genre": [
            "Comedie",
            "Drame",
            "Romance"
        ],
        "rate": 8.3,
        "picture": "la-garconniere",
        "fr_title": "La Garçonnière"

    },
    {
        "title": "Metropolis",
        "year": 1927,
        "director": "Fritz Lang",
        "duration": "2h 33min",
        "genre": [
            "Drame",
            "S.F"
        ],
        "rate": 8.3,
        "picture": "metropolis",
        "fr_title": "Metropolis"

    },
    {
        "title": "Jodaeiye Nader az Simin",
        "year": 2011,
        "director": "Asghar Farhadi",
        "duration": "2h 3min",
        "genre": [
            "Drame",
            "Suspens"
        ],
        "rate": 8.4,
        "picture": "une-separation",
        "fr_title": "Une séparation"

    },
    {
        "title": "Rashômon",
        "year": 1950,
        "director": "Akira Kurosawa",
        "duration": "1h 28min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens"
        ],
        "rate": 8.3,
        "picture": "rashomon",
        "fr_title": "Rashōmon"

    },
    {
        "title": "Indiana Jones and the Last Crusade",
        "year": 1989,
        "director": "Steven Spielberg",
        "duration": "2h 7min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy"
        ],
        "rate": 8.3,
        "picture": "indiana-derniere-croisade",
        "fr_title": "Indiana Jones et la Dernière Croisade"

    },
    {
        "title": "All About Eve",
        "year": 1950,
        "director": "Joseph L. Mankiewicz",
        "duration": "2h 18min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "eve",
        "fr_title": "Ève"

    },
    {
        "title": "Yôjinbô",
        "year": 1961,
        "director": "Akira Kurosawa",
        "duration": "1h 50min",
        "genre": [
            "Action",
            "Drame",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "yojimbo",
        "fr_title": "Yojimbo"

    },
    {
        "title": "Babam ve Oglum",
        "year": 2005,
        "director": "Çagan Irmak",
        "duration": "1h 48min",
        "genre": [
            "Drame"
        ],
        "rate": 8.5,
        "picture": "mon-pere-mon-fils",
        "fr_title": "Mon père et mon fils"

    },
    {
        "title": "Up",
        "year": 2009,
        "director": "Pete Docter",
        "duration": "1h 36min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial"
        ],
        "rate": 8.3,
        "picture": "la-haut",
        "fr_title": "Là-haut"

    },
    {
        "title": "Batman Begins",
        "year": 2005,
        "director": "Christopher Nolan",
        "duration": "2h 32min",
        "genre": [
            "Action",
            "Aventure",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "batman-begins",
        "fr_title": "Batman Begins"

    },
    {
        "title": "Some Like It Hot",
        "year": 1959,
        "director": "Billy Wilder",
        "duration": "2h 1min",
        "genre": [
            "Comedie",
            "Romance"
        ],
        "rate": 8.3,
        "picture": "certains-laiment-chaud",
        "fr_title": "Certains l'aiment chaud"

    },
    {
        "title": "The Treasure of the Sierra Madre",
        "year": 1948,
        "director": "John Huston",
        "duration": "2h 6min",
        "genre": [
            "Aventure",
            "Drame",
            "Western"
        ],
        "rate": 8.3,
        "picture": "tresor-sierra-madre",
        "fr_title": "Le Trésor de la Sierra Madre"

    },
    {
        "title": "Unforgiven",
        "year": 1992,
        "director": "Clint Eastwood",
        "duration": "2h 10min",
        "genre": [
            "Drame",
            "Western"
        ],
        "rate": 8.2,
        "picture": "impitoyable",
        "fr_title": "Impitoyable"

    },
    {
        "title": "Der Untergang",
        "year": 2004,
        "director": "Oliver Hirschbiegel",
        "duration": "2h 36min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "la-chute",
        "fr_title": "La Chute"

    },
    {
        "title": "Die Hard",
        "year": 1988,
        "director": "John McTiernan",
        "duration": "2h 11min",
        "genre": [
            "Action",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "die-hard",
        "fr_title": "Die Hard"

    },
    {
        "title": "Raging Bull",
        "year": 1980,
        "director": "Martin Scorsese",
        "duration": "2h 9min",
        "genre": [
            "Biographie",
            "Drame",
            "Sport"
        ],
        "rate": 8.2,
        "picture": "raging-bull",
        "fr_title": "Raging Bull"

    },
    {
        "title": "Heat",
        "year": 1995,
        "director": "Michael Mann",
        "duration": "2h 50min",
        "genre": [
            "Action",
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "heat",
        "fr_title": "Heat"

    },
    {
        "title": "The Third Man",
        "year": 1949,
        "director": "Carol Reed",
        "duration": "1h 44min",
        "genre": [
            "Film-Noir",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "le-troisieme-homme",
        "fr_title": "Le Troisième Homme"

    },
    {
        "title": "Bacheha-Ye aseman",
        "year": 1997,
        "director": "Majid Majidi",
        "duration": "1h 29min",
        "genre": [
            "Drame",
            "Familial"
        ],
        "rate": 8.4,
        "picture": "enfants-du-ciel",
        "fr_title": "Les Enfants du ciel"

    },
    {
        "title": "The Great Escape",
        "year": 1963,
        "director": "John Sturges",
        "duration": "2h 52min",
        "genre": [
            "Aventure",
            "Drame",
            "Histoire",
            "Thriller",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "la-grande-evasion",
        "fr_title": "La Grande Évasion"

    },
    {
        "title": "Ikiru",
        "year": 1952,
        "director": "Akira Kurosawa",
        "duration": "2h 23min",
        "genre": [
            "Drame"
        ],
        "rate": 8.3,
        "picture": "ikiru",
        "fr_title": "Vivre"

    },
    {
        "title": "Chinatown",
        "year": 1974,
        "director": "Roman Polanski",
        "duration": "2h 10min",
        "genre": [
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "chinatown",
        "fr_title": "Chinatown"

    },
    {
        "title": "El laberinto del fauno",
        "year": 2006,
        "director": "Guillermo del Toro",
        "duration": "1h 58min",
        "genre": [
            "Drame",
            "Fantasy",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "labyrinthe-de-pan",
        "fr_title": "Le Labyrinthe de Pan"

    },
    {
        "title": "Tonari no Totoro",
        "year": 1988,
        "director": "Hayao Miyazaki",
        "duration": "1h 26min",
        "genre": [
            "Animation",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.2,
        "picture": "voisin-totoro",
        "fr_title": "Mon voisin Totoro"

    },
    {
        "title": "Incendies",
        "year": 2010,
        "director": "Denis Villeneuve",
        "duration": "2h 11min",
        "genre": [
            "Drame",
            "Suspens",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "incenties",
        "fr_title": "Incendies"

    },
    {
        "title": "Ran",
        "year": 1985,
        "director": "Akira Kurosawa",
        "duration": "2h 42min",
        "genre": [
            "Action",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "ran",
        "fr_title": "Ran"

    },
    {
        "title": "The Gold Rush",
        "year": 1925,
        "director": "Charles Chaplin",
        "duration": "1h 35min",
        "genre": [
            "Aventure",
            "Comedie",
            "Drame",
            "Familial"
        ],
        "rate": 8.2,
        "picture": "ruee-vers-l-or",
        "fr_title": "La Ruée vers l'or"

    },
    {
        "title": "El secreto de sus ojos",
        "year": 2009,
        "director": "Juan José Campanella",
        "duration": "2h 9min",
        "genre": [
            "Drame",
            "Suspens",
            "Romance",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "dans-ses-yeux",
        "fr_title": "Dans ses yeux"

    },
    {
        "title": "Inside Out",
        "year": 2014,
        "director": "Pete Docter",
        "duration": "1h 35min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Drame",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.2,
        "picture": "vice-versa",
        "fr_title": "Vice-versa"

    },
    {
        "title": "Judgment at Nuremberg",
        "year": 1961,
        "director": "Stanley Kramer",
        "duration": "3h 6min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.3,
        "picture": "jugement-nuremberg",
        "fr_title": "Jugement à Nuremberg"

    },
    {
        "title": "On the Waterfront",
        "year": 1954,
        "director": "Elia Kazan",
        "duration": "1h 48min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "sur-les-quais",
        "fr_title": "Sur les quais"

    },
    {
        "title": "Hauru no ugoku shiro",
        "year": 2004,
        "director": "Hayao Miyazaki",
        "duration": "1h 59min",
        "genre": [
            "Animation",
            "Aventure",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.2,
        "picture": "chateau-ambulant",
        "fr_title": "Le Château ambulant"

    },
    {
        "title": "The Bridge on the River Kwai",
        "year": 1957,
        "director": "David Lean",
        "duration": "2h 41min",
        "genre": [
            "Aventure",
            "Drame",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "pont-riviere-kwai",
        "fr_title": "Le Pont de la rivière Kwaï"

    },
    {
        "title": "Room",
        "year": 2015,
        "director": "Lenny Abrahamson",
        "duration": "1h 58min",
        "genre": [
            "Drame"
        ],
        "rate": 8.2,
        "picture": "room",
        "fr_title": "Room"

    },
    {
        "title": "Det sjunde inseglet",
        "year": 1957,
        "director": "Ingmar Bergman",
        "duration": "1h 36min",
        "genre": [
            "Drame",
            "Fantasy"
        ],
        "rate": 8.2,
        "picture": "le-septieme-sceau",
        "fr_title": "Le Septième Sceau"

    },
    {
        "title": "Lock, Stock and Two Smoking Barrels",
        "year": 1998,
        "director": "Guy Ritchie",
        "duration": "1h 47min",
        "genre": [
            "Comedie",
            "Crime"
        ],
        "rate": 8.2,
        "picture": "arnaques-crimes-botanique",
        "fr_title": "Arnaques, Crimes et Botanique"

    },
    {
        "title": "Mr. Smith Goes to Washington",
        "year": 1939,
        "director": "Frank Capra",
        "duration": "2h 9min",
        "genre": [
            "Comedie",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "mr-smith-senat",
        "fr_title": "Monsieur Smith au Sénat"

    },
    {
        "title": "Blade Runner",
        "year": 1982,
        "director": "Ridley Scott",
        "duration": "1h 57min",
        "genre": [
            "S.F",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "blade-runner",
        "fr_title": "Blade Runner"

    },
    {
        "title": "Casino",
        "year": 1995,
        "director": "Martin Scorsese",
        "duration": "2h 58min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "casino",
        "fr_title": "Casino"

    },
    {
        "title": "A Beautiful Mind",
        "year": 2001,
        "director": "Ron HoGuerred",
        "duration": "2h 15min",
        "genre": [
            "Biographie",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "une-homme-d-exception",
        "fr_title": "Un homme d'exception"

    },
    {
        "title": "The Elephant Man",
        "year": 1980,
        "director": "David Lynch",
        "duration": "2h 4min",
        "genre": [
            "Biographie",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "elephant-man",
        "fr_title": "Elephant Man"

    },
    {
        "title": "Smultronstället",
        "year": 1957,
        "director": "Ingmar Bergman",
        "duration": "1h 31min",
        "genre": [
            "Drame",
            "Romance"
        ],
        "rate": 8.2,
        "picture": "les-fraises-sauvages",
        "fr_title": "Les Fraises sauvages"

    },
    {
        "title": "V for Vendetta",
        "year": 2005,
        "director": "James McTeigue",
        "duration": "2h 12min",
        "genre": [
            "Action",
            "Drame",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "v-pour-vendetta",
        "fr_title": "V pour Vendetta"

    },
    {
        "title": "The Wolf of Wall Street",
        "year": 2013,
        "director": "Martin Scorsese",
        "duration": "3h",
        "genre": [
            "Biographie",
            "Comedie",
            "Crime",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "Le Loup de Wall Street",
        "fr_title": "Le Loup de Wall Street"

    },
    {
        "title": "The General",
        "year": 1926,
        "director": "Clyde Bruckman",
        "duration": "1h 7min",
        "genre": [
            "Action",
            "Aventure",
            "Comedie",
            "Drame",
            "Guerre",
            "Western"
        ],
        "rate": 8.2,
        "picture": "mecano-de-la-generale",
        "fr_title": "Le mécano de la Générale"

    },
    {
        "title": "Warrior",
        "year": 2011,
        "director": "Gavin O\"Connor",
        "duration": "2h 20min",
        "genre": [
            "Drame",
            "Sport"
        ],
        "rate": 8.2,
        "picture": "warrior",
        "fr_title": "Warrior"

    },
    {
        "title": "Trainspotting",
        "year": 1996,
        "director": "Danny Boyle",
        "duration": "1h 34min",
        "genre": [
            "Drame"
        ],
        "rate": 8.2,
        "picture": "trainspotting",
        "fr_title": "Trainspotting"

    },
    {
        "title": "Dial M for Murder",
        "year": 1954,
        "director": "Alfred Hitchcock",
        "duration": "1h 45min",
        "genre": [
            "Crime",
            "Film-Noir",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "le-crime-presque-parfait",
        "fr_title": "Le crime était presque parfait"

    },
    {
        "title": "Gran Torino",
        "year": 2008,
        "director": "Clint Eastwood",
        "duration": "1h 56min",
        "genre": [
            "Drame"
        ],
        "rate": 8.2,
        "picture": "gran-torino",
        "fr_title": "Gran Torino"

    },
    {
        "title": "Sunrise: A Song of Two Humans",
        "year": 1927,
        "director": "F.W. Murnau",
        "duration": "1h 34min",
        "genre": [
            "Drame",
            "Romance"
        ],
        "rate": 8.2,
        "picture": "l-aurore",
        "fr_title": "L'Aurore"

    },
    {
        "title": "Gone with the Wind",
        "year": 1939,
        "director": "Victor Fleming",
        "duration": "3h 58min",
        "genre": [
            "Drame",
            "Histoire",
            "Romance",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "autant-en-emporte-le-vent",
        "fr_title": "Autant en emporte le vent"

    },
    {
        "title": "Andrey Rublev",
        "year": 1966,
        "director": "Andrei Tarkovsky",
        "duration": "3h 25min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire"
        ],
        "rate": 8.3,
        "picture": "andrei-roublev",
        "fr_title": "Andreï Roublev"

    },
    {
        "title": "The Deer Hunter",
        "year": 1978,
        "director": "Michael Cimino",
        "duration": "3h 3min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "voyage-au-bort-de-l-enfer",
        "fr_title": "Voyage au bout de l'enfer"

    },
    {
        "title": "Fargo",
        "year": 1996,
        "director": "Joel Coen",
        "duration": "1h 38min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "fargo",
        "fr_title": "Fargo"

    },
    {
        "title": "The Sixth Sense",
        "year": 1999,
        "director": "M. Night Shyamalan",
        "duration": "1h 47min",
        "genre": [
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "sixieme-sens",
        "fr_title": "Sixième Sens"

    },
    {
        "title": "The Thing",
        "year": 2004,
        "director": "John Carpenter",
        "duration": "1h 49min",
        "genre": [
            "Horreur",
            "Suspens",
            "S.F"
        ],
        "rate": 8.2,
        "picture": "la-chose",
        "fr_title": "La Chose"

    },
    {
        "title": "No Country for Old Men",
        "year": 2007,
        "director": "Ethan Coen",
        "duration": "2h 2min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "non-ce-pays-pas-pour-vieil-homme",
        "fr_title": "Non, ce pays n'est pas pour le vieil homme"

    },
    {
        "title": "The Big Lebowski",
        "year": 1998,
        "director": "Joel Coen",
        "duration": "1h 57min",
        "genre": [
            "Comedie",
            "Crime"
        ],
        "rate": 8.2,
        "picture": "the-big-lebowski",
        "fr_title": "The Big Lebowski"

    },
    {
        "title": "Eskiya",
        "year": 1996,
        "director": "Yavuz Turgul",
        "duration": "2h 8min",
        "genre": [
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8.4,
        "picture": "eskiya",
        "fr_title": "Eşkıya"

    },
    {
        "title": "Finding Nemo",
        "year": 2003,
        "director": "Andrew Stanton",
        "duration": "1h 40min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial"
        ],
        "rate": 8.1,
        "picture": "le-monde-de-nemo",
        "fr_title": "Le Monde de Nemo"

    },
    {
        "title": "Tôkyô monogatari",
        "year": 1953,
        "director": "Yasujirô Ozu",
        "duration": "2h 16min",
        "genre": [
            "Drame"
        ],
        "rate": 8.2,
        "picture": "voyage-a-tokyo",
        "fr_title": "Voyage à Tokyo"

    },
    {
        "title": "There Will Be Blood",
        "year": 2007,
        "director": "Paul Thomas Anderson",
        "duration": "2h 38min",
        "genre": [
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "there-will-be-blood",
        "fr_title": "There Will Be Blood"

    },
    {
        "title": "Cool Hand Luke",
        "year": 1967,
        "director": "Stuart Rosenberg",
        "duration": "2h 6min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "luke-main-droide",
        "fr_title": "Luke la main froide"

    },
    {
        "title": "Rebecca",
        "year": 1940,
        "director": "Alfred Hitchcock",
        "duration": "2h 10min",
        "genre": [
            "Drame",
            "Suspens",
            "Romance",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "rebecca",
        "fr_title": "Rebecca"

    },
    {
        "title": "Hacksaw Ridge",
        "year": 2016,
        "director": "Mel Gibson",
        "duration": "2h 19min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "tu-ne-tuera-point",
        "fr_title": "Tu ne tueras point"

    },
    {
        "title": "La La Land",
        "year": 2016,
        "director": "Damien Chazelle",
        "duration": "2h 8min",
        "genre": [
            "Comedie",
            "Drame",
            "Music",
            "Musical",
            "Romance"
        ],
        "rate": 8.2,
        "picture": "la-la-land",
        "fr_title": "La La Land"

    },
    {
        "title": "Idi i smotri",
        "year": 1992,
        "director": "Elem Klimov",
        "duration": "2h 22min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.2,
        "picture": "requiem-for-a-massacre",
        "fr_title": "Requiem pour un massacre"

    },
    {
        "title": "Kill Bill: Vol. 1",
        "year": 2003,
        "director": "Quentin Tarantino",
        "duration": "1h 51min",
        "genre": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "kill-bill",
        "fr_title": "Kill Bill: Volume 1"

    },
    {
        "title": "Rang De Basanti",
        "year": 2006,
        "director": "Rakeysh Omprakash Mehra",
        "duration": "2h 37min",
        "genre": [
            "Comedie",
            "Drame",
            "Histoire",
            "Romance"
        ],
        "rate": 8.3,
        "picture": "rang-de-basanti",
        "fr_title": "Rang De Basanti"

    },
    {
        "title": "How to Train Your Dragon",
        "year": 2010,
        "director": "Dean DeBlois",
        "duration": "1h 38min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.1,
        "picture": "dragons",
        "fr_title": "Dragons"

    },
    {
        "title": "La passion de Jeanne d\"Arc",
        "year": 1928,
        "director": "Carl Theodor Dreyer",
        "duration": "1h 50min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire"
        ],
        "rate": 8.2,
        "picture": "la-passion-jeanne-d-arc",
        "fr_title": "La Passion de Jeanne d'Arc"

    },
    {
        "title": "Mary and Max",
        "year": 2009,
        "director": "Adam Elliot",
        "duration": "1h 32min",
        "genre": [
            "Animation",
            "Comedie",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "mary-et-max",
        "fr_title": "Mary et Max."

    },
    {
        "title": "Gone Girl",
        "year": 2014,
        "director": "David Fincher",
        "duration": "2h 29min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "gone-girl",
        "fr_title": "Gone Girl"

    },
    {
        "title": "Into the Wild",
        "year": 2007,
        "director": "Sean Penn",
        "duration": "2h 28min",
        "genre": [
            "Aventure",
            "Biographie",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "into-the-wild",
        "fr_title": "Into the Wild"

    },
    {
        "title": "Shutter Island",
        "year": 2010,
        "director": "Martin Scorsese",
        "duration": "2h 18min",
        "genre": [
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "shutter-island",
        "fr_title": "Shutter Island"

    },
    {
        "title": "Logan",
        "year": 2017,
        "director": "James Mangold",
        "duration": "2h 17min",
        "genre": [
            "Action",
            "Drame",
            "S.F",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "logan",
        "fr_title": "Logan"

    },
    {
        "title": "It Happened One Night",
        "year": 1934,
        "director": "Frank Capra",
        "duration": "1h 45min",
        "genre": [
            "Comedie",
            "Romance"
        ],
        "rate": 8.2,
        "picture": "new-york-miami",
        "fr_title": "New York-Miami"

    },
    {
        "title": "Life of Brian",
        "year": 1979,
        "director": "Terry Jones",
        "duration": "1h 34min",
        "genre": [
            "Comedie"
        ],
        "rate": 8.1,
        "picture": "monty-python-brian",
        "fr_title": "Monty Python : La Vie de Brian"

    },
    {
        "title": "Relatos salvajes",
        "year": 2014,
        "director": "Damián Szifron",
        "duration": "2h 2min",
        "genre": [
            "Comedie",
            "Drame",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "les-nouveaux-sauvages",
        "fr_title": "Les Nouveaux Sauvages"

    },
    {
        "title": "A Wednesday",
        "year": 2008,
        "director": "Neeraj Pandey",
        "duration": "1h 44min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.3,
        "picture": "a-wednesday",
        "fr_title": "A Wednesday"

    },
    {
        "title": "Platoon",
        "year": 1986,
        "director": "Oliver Stone",
        "duration": "2h",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.1,
        "picture": "platoon",
        "fr_title": "Platoon"

    },
    {
        "title": "Hotel Rwanda",
        "year": 2004,
        "director": "Terry George",
        "duration": "2h 1min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.1,
        "picture": "hotel-rwanda",
        "fr_title": "Hôtel Rwanda"

    },
    {
        "title": "Le salaire de la peur",
        "year": 1953,
        "director": "Henri-Georges Clouzot",
        "duration": "2h 11min",
        "genre": [
            "Aventure",
            "Drame",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "le-salaire-de-la-peur",
        "fr_title": "Le salaire de la peur"

    },
    {
        "title": "Network",
        "year": 1976,
        "director": "Sidney Lumet",
        "duration": "2h 1min",
        "genre": [
            "Drame"
        ],
        "rate": 8.1,
        "picture": "network",
        "fr_title": "Network : Main basse sur la télévision"

    },
    {
        "title": "Rush",
        "year": 2013,
        "director": "Ron HoGuerred",
        "duration": "2h 3min",
        "genre": [
            "Action",
            "Biographie",
            "Drame",
            "Histoire",
            "Sport"
        ],
        "rate": 8.1,
        "picture": "rush",
        "fr_title": "Rush"

    },
    {
        "title": "In the Name of the Father",
        "year": 1993,
        "director": "Jim Sheridan",
        "duration": "2h 13min",
        "genre": [
            "Biographie",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "au-non-du-pere",
        "fr_title": "Au nom du père"

    },
    {
        "title": "Stand by Me",
        "year": 1986,
        "director": "Rob Reiner",
        "duration": "1h 29min",
        "genre": [
            "Aventure",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "compte-sur-toi",
        "fr_title": "Compte sur moi"

    },
    {
        "title": "Persona",
        "year": 1966,
        "director": "Ingmar Bergman",
        "duration": "1h 25min",
        "genre": [
            "Drame",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "persona",
        "fr_title": "Persona"

    },
    {
        "title": "Ben-Hur",
        "year": 1959,
        "director": "William Wyler",
        "duration": "3h 32min",
        "genre": [
            "Aventure",
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "ben-hur",
        "fr_title": "Ben-Hur"

    },
    {
        "title": "The Grand Budapest Hotel",
        "year": 2014,
        "director": "Wes Anderson",
        "duration": "1h 39min",
        "genre": [
            "Aventure",
            "Comedie",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "the-grand-budapest-hotel",
        "fr_title": "The Grand Budapest Hotel"

    },
    {
        "title": "Les quatre cents coups",
        "year": 1959,
        "director": "François Truffaut",
        "duration": "1h 32min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "quatre-cents-coups",
        "fr_title": "Les Quatre Cents Coups"

    },
    {
        "title": "Salinui chueok",
        "year": 2003,
        "director": "Joon-ho Bong",
        "duration": "2h 11min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "memories-of-murder",
        "fr_title": "Memories of Murder"

    },
    {
        "title": "12 Years a Slave",
        "year": 2013,
        "director": "Steve McQueen",
        "duration": "2h 14min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "12-years-a-slave",
        "fr_title": "Twelve Years a Slave"

    },
    {
        "title": "Mad Max: Fury Road",
        "year": 2015,
        "director": "George Miller",
        "duration": "2h",
        "genre": [
            "Action",
            "Aventure",
            "S.F",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "mad-max-fury-road",
        "fr_title": "Mad Max: Fury Road"

    },
    {
        "title": "Jurassic Park",
        "year": 2000,
        "director": "Steven Spielberg",
        "duration": "2h 7min",
        "genre": [
            "Aventure",
            "S.F",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "jurassic-park",
        "fr_title": "Jurassic Park"

    },
    {
        "title": "Spotlight",
        "year": 2015,
        "director": "Tom McCarthy",
        "duration": "2h 8min",
        "genre": [
            "Crime",
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "spotlight",
        "fr_title": "Spotlight"

    },
    {
        "title": "Million Dollar Baby",
        "year": 2004,
        "director": "Clint Eastwood",
        "duration": "2h 12min",
        "genre": [
            "Drame",
            "Sport"
        ],
        "rate": 8.1,
        "picture": "million-dollar-baby",
        "fr_title": "Million Dollar Baby"

    },
    {
        "title": "Stalker",
        "year": 1979,
        "director": "Andrei Tarkovsky",
        "duration": "2h 42min",
        "genre": [
            "Drame",
            "S.F"
        ],
        "rate": 8.1,
        "picture": "stalker",
        "fr_title": "Stalker"

    },
    {
        "title": "Butch Cassidy and the Sundance Kid",
        "year": 1969,
        "director": "George Roy Hill",
        "duration": "1h 50min",
        "genre": [
            "Biographie",
            "Crime",
            "Drame",
            "Western"
        ],
        "rate": 8.1,
        "picture": "butch-cassidy-kid",
        "fr_title": "Butch Cassidy et le Kid"

    },
    {
        "title": "Amores perros",
        "year": 2000,
        "director": "Alejandro González Iñárritu",
        "duration": "2h 34min",
        "genre": [
            "Drame",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "amours-chiennes",
        "fr_title": "Amours chiennes"

    },
    {
        "title": "The Truman Show",
        "year": 1990,
        "director": "Peter Weir",
        "duration": "1h 43min",
        "genre": [
            "Comedie",
            "Drame",
            "S.F"
        ],
        "rate": 8.1,
        "picture": "the-truman-show",
        "fr_title": "The Truman Show"

    },
    {
        "title": "Hachi: A Dog\"s Tale",
        "year": 1983,
        "director": "Lasse Hallström",
        "duration": "1h 33min",
        "genre": [
            "Drame",
            "Familial"
        ],
        "rate": 8.1,
        "picture": "hatchi",
        "fr_title": "Hatchi"

    },
    {
        "title": "The Maltese Falcon",
        "year": 1941,
        "director": "John Huston",
        "duration": "1h 40min",
        "genre": [
            "Film-Noir",
            "Suspens"
        ],
        "rate": 8.1,
        "picture": "le-faucon-maltais",
        "fr_title": "Le Faucon maltais"

    },
    {
        "title": "Kaze no tani no Naushika",
        "year": 1984,
        "director": "Hayao Miyazaki",
        "duration": "1h 57min",
        "genre": [
            "Animation",
            "Aventure",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.1,
        "picture": "nausicaa-vallee-du-vent",
        "fr_title": "Nausicaä de la Vallée du Vent"

    },
    {
        "title": "The Princess Bride",
        "year": 1987,
        "director": "Rob Reiner",
        "duration": "1h 38min",
        "genre": [
            "Aventure",
            "Familial",
            "Fantasy",
            "Romance"
        ],
        "rate": 8.1,
        "picture": "princess-bride",
        "fr_title": "Princess Bride"

    },
    {
        "title": "Before Sunrise",
        "year": 1995,
        "director": "Richard Linklater",
        "duration": "1h 41min",
        "genre": [
            "Drame",
            "Romance"
        ],
        "rate": 8.1,
        "picture": "before-sunrise",
        "fr_title": "Before Sunrise"

    },
    {
        "title": "Le notti di Cabiria",
        "year": 1957,
        "director": "Federico Fellini",
        "duration": "1h 50min",
        "genre": [
            "Drame"
        ],
        "rate": 8.2,
        "picture": "les-nuits-de-cabiria",
        "fr_title": "Les Nuits de Cabiria"

    },
    {
        "title": "Paper Moon",
        "year": 1973,
        "director": "Peter Bogdanovich",
        "duration": "1h 42min",
        "genre": [
            "Comedie",
            "Crime",
            "Drame"
        ],
        "rate": 8.2,
        "picture": "paper-moon",
        "fr_title": "La Barbe à papa"

    },
    {
        "title": "Prisoners",
        "year": 2013,
        "director": "Denis Villeneuve",
        "duration": "2h 33min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "prisoners",
        "fr_title": "Prisoners"

    },
    {
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "year": 2011,
        "director": "David Yates",
        "duration": "2h 10min",
        "genre": [
            "Aventure",
            "Drame",
            "Fantasy",
            "Suspens"
        ],
        "rate": 8.1,
        "picture": "harry-potter-reliques-2-partie",
        "fr_title": "Harry Potter et les reliques de la mort - 2ème partie"

    },
    {
        "title": "The Grapes of Wrath",
        "year": 1940,
        "director": "John Ford",
        "duration": "2h 9min",
        "genre": [
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "les-raisins-de-la-colere",
        "fr_title": "Les Raisins de la colère"

    },
    {
        "title": "Rocky",
        "year": 1976,
        "director": "John G. Avildsen",
        "duration": "2h",
        "genre": [
            "Drame",
            "Sport"
        ],
        "rate": 8.1,
        "picture": "rocky-balboa",
        "fr_title": "Rocky Balboa"

    },
    {
        "title": "Catch Me If You Can",
        "year": 2002,
        "director": "Steven Spielberg",
        "duration": "2h 21min",
        "genre": [
            "Biographie",
            "Crime",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "arrete-moi-si-tu-peux",
        "fr_title": "Arrête-moi si tu peux"

    },
    {
        "title": "Touch of Evil",
        "year": 1958,
        "director": "Orson Welles",
        "duration": "1h 35min",
        "genre": [
            "Crime",
            "Drame",
            "Film-Noir",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "la-soif-du-mal",
        "fr_title": "La Soif du mal"

    },
    {
        "title": "Les diaboliques",
        "year": 1955,
        "director": "Henri-Georges Clouzot",
        "duration": "1h 57min",
        "genre": [
            "Crime",
            "Drame",
            "Horreur",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "les-diaboliques",
        "fr_title": "Les diaboliques"

    },
    {
        "title": "Gandhi",
        "year": 1982,
        "director": "Richard Attenborough",
        "duration": "3h 11min",
        "genre": [
            "Biographie",
            "Drame",
            "Histoire"
        ],
        "rate": 8.1,
        "picture": "gandhi",
        "fr_title": "Gandhi"

    },
    {
        "title": "Donnie Darko",
        "year": 2001,
        "director": "Richard Kelly",
        "duration": "1h 53min",
        "genre": [
            "Drame",
            "S.F",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "donnie-darko",
        "fr_title": "Donnie Darko"

    },
    {
        "title": "Munna Bhai M.B.B.S.",
        "year": 2003,
        "director": "Rajkumar Hirani",
        "duration": "2h 36min",
        "genre": [
            "Comedie",
            "Drame",
            "Romance"
        ],
        "rate": 8.2,
        "picture": "munna-bhai",
        "fr_title": "Munna Bhai M.B.B.S."

    },
    {
        "title": "Monsters, Inc.",
        "year": 2001,
        "director": "Pete Docter",
        "duration": "1h 32min",
        "genre": [
            "Animation",
            "Aventure",
            "Comedie",
            "Familial",
            "Fantasy"
        ],
        "rate": 8.1,
        "picture": "monstres-et-cie",
        "fr_title": "Monstres et Cie"

    },
    {
        "title": "Star Wars: Episode VII - The Force Awakens",
        "year": 2015,
        "director": "J.J. Abrams",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.1,
        "picture": "star-wars-reveil",
        "fr_title": "Star Wars : Le Réveil de la Force"

    },
    {
        "title": "Annie Hall",
        "year": 1977,
        "director": "Woody Allen",
        "duration": "1h 33min",
        "genre": [
            "Comedie",
            "Romance"
        ],
        "rate": 8.1,
        "picture": "annie-hall",
        "fr_title": "Annie Hall"

    },
    {
        "title": "The Terminator",
        "year": 1984,
        "director": "James Cameron",
        "duration": "1h 47min",
        "genre": [
            "Action",
            "S.F"
        ],
        "rate": 8,
        "picture": "terminator",
        "fr_title": "Terminator"
    },
    {
        "title": "Barry Lyndon",
        "year": 1975,
        "director": "Stanley Kubrick",
        "duration": "3h 4min",
        "genre": [
            "Aventure",
            "Drame",
            "Histoire",
            "Guerre"
        ],
        "rate": 8.1,
        "picture": "barry-lyndon",
        "fr_title": "Barry Lyndon"

    },
    {
        "title": "The Bourne Ultimatum",
        "year": 2007,
        "director": "Paul Greengrass",
        "duration": "1h 55min",
        "genre": [
            "Action",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "la-vengeance-dans-la-peau",
        "fr_title": "La Vengeance dans la peau"

    },
    {
        "title": "The Wizard of Oz",
        "year": 1939,
        "director": "Victor Fleming",
        "duration": "1h 42min",
        "genre": [
            "Aventure",
            "Familial",
            "Fantasy",
            "Musical"
        ],
        "rate": 8.1,
        "picture": "the-wizard-of-oz",
        "fr_title": "Le Magicien d'Oz"

    },
    {
        "title": "Groundhog Day",
        "year": 1993,
        "director": "Harold Ramis",
        "duration": "1h 41min",
        "genre": [
            "Comedie",
            "Fantasy",
            "Romance"
        ],
        "rate": 8,
        "picture": "un-jour-sans-fin",
        "fr_title": "Un jour sans fin"
    },
    {
        "title": "La haine",
        "year": 1995,
        "director": "Mathieu Kassovitz",
        "duration": "1h 38min",
        "genre": [
            "Crime",
            "Drame"
        ],
        "rate": 8.1,
        "picture": "la-haine",
        "fr_title": "La Haine"

    },
    {
        "title": "8½",
        "year": 1963,
        "director": "Federico Fellini",
        "duration": "2h 18min",
        "genre": [
            "Drame"
        ],
        "rate": 8.1,
        "picture": "huit-et-demi",
        "fr_title": "Huit et demi"

    },
    {
        "title": "Jaws",
        "year": 1975,
        "director": "Steven Spielberg",
        "duration": "2h 4min",
        "genre": [
            "Aventure",
            "Drame",
            "Thriller"
        ],
        "rate": 8,
        "picture": "les-dents-de-la-mer",
        "fr_title": "Les Dents de la mer"
    },
    {
        "title": "Twelve Monkeys",
        "year": 1995,
        "director": "Terry Gilliam",
        "duration": "2h 9min",
        "genre": [
            "Suspens",
            "S.F",
            "Thriller"
        ],
        "rate": 8,
        "picture": "l-armee-des-12-singes",
        "fr_title": "L'Armée des 12 singes"
    },
    {
        "title": "The Best Years of Our Lives",
        "year": 1946,
        "director": "William Wyler",
        "duration": "2h 50min",
        "genre": [
            "Drame",
            "Romance",
            "Guerre"
        ],
        "rate": 8.1,
        "picture": "les-plus-belles-annees-de-notre-vie",
        "fr_title": "Les Plus belles années de notre vie"

    },
    {
        "title": "Mou gaan dou",
        "year": 2002,
        "director": "Wai-Keung Lau",
        "duration": "1h 41min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "infernal-affairs",
        "fr_title": "Infernal Affairs"

    },
    {
        "title": "Paris, Texas",
        "year": 1984,
        "director": "Wim Wenders",
        "duration": "2h 25min",
        "genre": [
            "Drame"
        ],
        "rate": 8.1,
        "picture": "paris-texas",
        "fr_title": "Paris, Texas"

    },
    {
        "title": "The Help",
        "year": 2011,
        "director": "Tate Taylor",
        "duration": "2h 26min",
        "genre": [
            "Drame"
        ],
        "rate": 8.1,
        "picture": "la-couleur-des-sentiments",
        "fr_title": "La couleur des sentiments"

    },
    {
        "title": "Faa yeung nin wa",
        "year": 2000,
        "director": "Kar-Wai Wong",
        "duration": "1h 38min",
        "genre": [
            "Drame",
            "Romance"
        ],
        "rate": 8.1,
        "picture": "in-the-mood-for-love",
        "fr_title": "In the Mood for Love"

    },
    {
        "title": "Sholay",
        "year": 1975,
        "director": "Ramesh Sippy",
        "duration": "3h 18min",
        "genre": [
            "Action",
            "Aventure",
            "Comedie",
            "Drame",
            "Musical",
            "Thriller"
        ],
        "rate": 8.2,
        "picture": "sholay",
        "fr_title": "Sholay"

    },
    {
        "title": "Beauty and the Beast",
        "year": 1991,
        "director": "Gary Trousdale",
        "duration": "1h 24min",
        "genre": [
            "Animation",
            "Familial",
            "Fantasy",
            "Musical",
            "Romance"
        ],
        "rate": 8,
        "picture": "la-belle-et-la-bete",
        "fr_title": "La Belle et la Bête"
    },
    {
        "title": "La battaglia di Algeri",
        "year": 1966,
        "director": "Gillo Pontecorvo",
        "duration": "2h 1min",
        "genre": [
            "Drame",
            "Guerre"
        ],
        "rate": 8.1,
        "picture": "la-bataille-d-alger",
        "fr_title": "La Bataille d'Alger"

    },
    {
        "title": "Ah-ga-ssi",
        "year": 2016,
        "director": "Chan-wook Park",
        "duration": "2h 24min",
        "genre": [
            "Crime",
            "Drame",
            "Suspens",
            "Romance",
            "Thriller"
        ],
        "rate": 8.1,
        "picture": "mademoiselle",
        "fr_title": "Mademoiselle"

    },
    {
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "year": 2003,
        "director": "Gore Verbinski",
        "duration": "2h 23min",
        "genre": [
            "Action",
            "Aventure",
            "Fantasy"
        ],
        "rate": 8,
        "picture": "pirates-des-caraibes-malediction",
        "fr_title": "Pirates des Caraïbes : La Malédiction du Black Pearl"
    },
    {
        "title": "PK",
        "year": 2014,
        "director": "Rajkumar Hirani",
        "duration": "2h 33min",
        "genre": [
            "Comedie",
            "Drame",
            "Fantasy",
            "S.F"
        ],
        "rate": 8.2,
        "picture": "peekay",
        "fr_title": "Peekay"

    },
    {
        "title": "Dog Day Afternoon",
        "year": 1975,
        "director": "Sidney Lumet",
        "duration": "2h 5min",
        "genre": [
            "Biographie",
            "Crime",
            "Drame",
            "Thriller"
        ],
        "rate": 8,
        "picture": "un-apres-midi-de-chien",
        "fr_title": "Un après-midi de chien"
    },
    {
        "title": "Dead Poets Society",
        "year": 1989,
        "director": "Peter Weir",
        "duration": "2h 8min",
        "genre": [
            "Comedie",
            "Drame"
        ],
        "rate": 8,
        "picture": "le-cercle-des-poetes-disparus",
        "fr_title": "Le Cercle des poètes disparus"
    }
]
const ImageLinks = {
    Hedonist: './img/hedonist.jpg',
    Portfolio: './img/portfolio.png',
    Customer: './img/nature.jpg',
    Sunshine: './img/sunshine.jpg',
    Movies: './img/movies.jpg',
    Network: './img/neural.jpg'
}

const ProjectLinks = {
    Hedonist: 'https://github.com/michaelKurowski/hedonist',
    Portfolio: 'https://github.com/Jordan141/PortfolioCode',
    Customer: 'https://github.com/Jordan141/CustomerServiceApp',
    Sunshine: 'https://github.com/Jordan141/SunshineWeatherApp',
    Movies: 'https://github.com/Jordan141/PopularMoviesApp',
    Network: 'https://github.com/Jordan141/NeuralNetwork'
}


module.exports = {
    "languages": {'ENGLISH': 'EN', 'GAEILGE': 'IE', 'POLSKI': 'PL', 'NORSK': 'NO'},
    "EN": {
        "language": "Languages",
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "HOME","ABOUT","PORTFOLIO","CONTACT"
            ]
        },
        "banner": {
            "title": "Portfolio",
            "sub": "A website by Jordan Moss"
        },
        "about": {
            "lineOne": "Current technologies: ReactJS, Redux, Webpack, Gulp, Pug, Sass.",
            "lineTwo": "I'm a 22 year old Full-Stack Web developer striving to create great applications in current web technologies.",
            "lineThree": "I usually spend more time on the design phase of a project than coding it, to ensure I'm using the appropriate frameworks and libraries.",
            "subtitle": "An assiduous Full-Stack web developer utilizing modern technologies.",
            "title": "About Me"
        },
        "contact": {
            "title":"CONTACT",
            "desc": "Don't be shy! Say Hello!"
        },
        "portfolio": {
            "title": "PORTFOLIO",
            "desc": "Below you'll find some of my recent work.",
            "projects": [
            {"title": "Hedonist", "desc": "A craftbeer search engine, designed by myself & Michael Kurowski using ReactJS and Express.", "imageURL": ImageLinks['Hedonist'], "url": ProjectLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A web application designed using ReactJS which shows my most notable projects.", "imageURL": ImageLinks['Portfolio'], "url": ProjectLinks['Portfolio'] },
            {"title": "Customer App", "desc": "Currently in progress - completion date ~ 03/2018", "imageURL": ImageLinks['Customer'], "url": ProjectLinks['Customer'] },
            {"title": "Sunshine", "desc": "An Android application developed utilizing OpenWeatherMap API & GCM services.", "imageURL": ImageLinks['Sunshine'], "url": ProjectLinks['Sunshine'] },
            {"title": "Popular Movies", "desc": "An Android application developed utilizing TMDB API & Android's internal SQLite DB", "imageURL": ImageLinks['Movies'], "url": ProjectLinks['Movies'] },
            {"title": "Neural Network", "desc": "A basic neural network developed in C#, .NET 4.5, utilizing XML data storage.", "imageURL": ImageLinks['Network'], "url": ProjectLinks['Network'] }
          ]
        },
        "footer": " All rights and reservations of images belong to "
    },
    "PL": {
        "language": "Languages",
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "STRONA GŁÓWNA", "O MNIE", "PORTFOLIO", "KONTAKT"
            ]
        },
        "banner": {
            "title": "Portfolio",
            "sub": "Strona stworzona przez Jordana Mossa"
        },
        "about": {
            "lineOne": "Zdolności w zakresie: ReactJS, Redux, Webpack, Gulp, Git, Pug, Sass.",
            "lineTwo": "Jestem 22 letnim full-stack developerem. W skład moich pasji wchodzi tworzenie aplikacji internetowych przy wykorzystaniu obecnie używanych technologii.",
            "lineThree": "Zazwyczaj spędzam więcej czasu na planowaniu i projektowaniu niż pisaniu kodu, po to by upewnić się, że użyję do apliakcji odpowiednich frameworków i bibiliotek.",
            "subtitle": "Cierpliwy full-stack developer, używający nowoczesnych technologii.",
            "title": "O mnie"
        },
        "contact": {
            "title":"KONTAKT",
            "desc": "Nie bądź nieśmiały! Przywitaj się!"
        },
        "portfolio": {
            "title": "PORTFOLIO",
            "desc": "Poniżej znajdziesz niektóre z moich ostatnich prac.",
            "projects": [
            {"title": "Hedonist", "desc": "Wyszukiwarka piw, zaprojektowana przeze mnie oraz Michaela Kurowskiego przy użyciu ReactJS i Express.", "imageURL": ImageLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "Aplikacja internetowa, stworzona w technologii ReactJS która prezentuje moje najistotniejsze projekty.", "imageURL": ImageLinks['Portfolio'] },
            {"title": "Fotorgrafia", "desc": "W trakcie realizacji - data ukończenia ~ 10/07", "imageURL": ImageLinks['Customer'] },
            {"title": "Sunshine", "desc": "Aplikacja na telefony z systemem Android, wykorzystująca OpenWeatherMap API oraz usługę GCM.", "imageURL": ImageLinks['Sunshine'] },
            {"title": "Popularne filmy", "desc": "Aplikacja na telefony z systemem Android, wykorzystująca TMDB API oraz wewnętrzną bazę danych Androida - SQLite", "imageURL": ImageLinks['Movies'] },
            {"title": "Sieć neuronowa", "desc": "Prosta sieć neuronowa, stworzona przy użyciu: C#, .NET 4.5, składująca dane w formacie XML.", "imageURL": ImageLinks['Network'] }
          ]
        },
        "footer": " Wszystkie prawa do obrazów należą do "
    },
    "IE": {
        "language": "Teanga",
        "navbar": {
            "brand": "Jordan Ó Maolmona",
            "tiles": [
                "ABHAILE","ABOUT","PORTFOLIO","CONTACT"
            ]
        },
        "banner": {
            "title": "Portfolio",
            "sub": "A website by Jordan Moss"
        },
        "about": {
            "text": ""
        },
        "contact": {
            "title":"CONTACT",
            "desc": "Don't be shy! Say Hello!"
        },
        "portfolio": {
            "title": "PORTFOLIO",
            "desc": "Below you'll find some of my recent work.",
            "projects": [
            {"title": "Hedonist", "desc": "A very good application designed by me.", "status": "80%", "imageURL": ImageLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A very good application designed by me.", "status": "50%", "imageURL": ImageLinks['Portfolio'] },
            {"title": "Photography", "desc": "A very good application designed by me.", "status": "Design Phase", "imageURL": ImageLinks['Photography'] },
            {"title": "Hedonist", "desc": "A very good application designed by me.", "status": "80%", "imageURL": ImageLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A very good application designed by me.", "status": "50%", "imageURL": ImageLinks['Portfolio'] },
            {"title": "Photography", "desc": "A very good application designed by me.", "status": "Design Phase", "imageURL": ImageLinks['Photography'] }
          ]
        }
    },
    "NO": {
        "language": "Språk",
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "HJEM","OM MEG","PORTFOLIO","KONTAKTINFORMASJON"
            ]
        },
        "banner": {
            "title": "Portfolio",
            "sub": "En nettside av Jordan Moss"
        },
        "about": {
            "lineOne": "Kunnskap i gjeldende teknologier: ReactJS, Redux, Webpack, Gulp, Pug, Sass.",
            "lineTwo": "Jeg er en 22 år gammel Full-Stack webutvikler som har et lidenskap for å lage gode applikasjoner i dagens webteknologi.",
            "lineThree": "Jeg bruker vanligvis mer tid på å designe et prosjekt enn å kode det for å forsikre om at de beste rammeverker og biblioteker benyttes.",
            "subtitle": "En flittig Full-Stack webutvikler som benytter dagens teknologi.",
            "title": "Om meg"
        },
        "contact": {
            "title":"Kontaktinformasjon",
            "desc": "Ikke vær sjenert! Si hei!"
        },
        "portfolio": {
            "title": "PORTFOLIO",
            "desc": "Nedenfor finner du noe av mitt nylige arbeid.",
            "projects": [
            {"title": "Hedonist", "desc": "Søkemotor for håndverksbrygget øl, designet av meg selv og Michael Kurowski ved hjelp av ReactJS og Express.", "imageURL": ImageLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "Internett-applikasjon laget med ReactJS som viser mine mest bemerkelsesverdige prosjekter.", "imageURL": ImageLinks['Portfolio'] },
            {"title": "Customer App", "desc": "Pågående prosjekt - sluttdato ~ 03/2018", "imageURL": ImageLinks['Customer'] },
            {"title": "Sunshine", "desc": "Android-applikasjon som benytter OpenWeatherMap API og GCM-tjenester.", "imageURL": ImageLinks['Sunshine'] },
            {"title": "Popular Movies", "desc": "Android-applikasjon som benytter TMDB API og Androids interne SQlite database.", "imageURL": ImageLinks['Movies'] },
            {"title": "Neural Network", "desc": "Enkelt Nevralt nettverk laget i C#, .NET 4.5, benytter XML data lagring.", "imageURL": ImageLinks['Network'] }
          ]
        },
        "footer": " Alle bilderettigheter tilhører "
    }
}
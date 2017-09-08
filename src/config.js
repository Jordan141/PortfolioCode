const ProjectLinks = {
    Hedonist: 'http://imageupper.com/s11/1/9/R15048963998852_1.jpg',
    Portfolio: 'http://imageupper.com/s11/1/9/R15048963998852_7.png',
    Photography: 'http://imageupper.com/s11/1/9/R15048963998852_4.jpg',
    Sunshine: 'http://imageupper.com/s11/1/9/R15048963998852_8.jpg',
    Movies: 'http://imageupper.com/s11/1/9/R15048963998852_3.jpg',
    Network: 'http://imageupper.com/s11/1/9/R15048963998852_5.jpg'
}


module.exports = {
    "languages": {'ENGLISH': 'EN','GAEILGE': 'IE','ESPAÑA': 'ES','DEUTSCH': 'DE','POLSKI': 'PL','FRANCAIS': 'FR'},
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
            "lineOne": "Current technologies: ReactJS, Redux, Webpack, Gulp, Git, Pug, Sass.",
            "lineTwo": "I'm a 21 year old Full-Stack web developer striving to develop great applications in the current web technologies.",
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
            {"title": "Hedonist", "desc": "A beer search engine, designed by myself & Michael Kurowski using ReactJS and Express.", "url": ProjectLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A web application designed using ReactJS which shows my most notable projects.", "url": ProjectLinks['Portfolio'] },
            {"title": "Realtime Customer Support", "desc": "Technologies: Sockets.IO, HTTPS, MongoDB Currently in progress - ~ October 2017", "url": ProjectLinks['Photography'] },
            {"title": "Sunshine", "desc": "An Android application developed utilizing OpenWeatherMap API & GCM services.", "url": ProjectLinks['Sunshine'] },
            {"title": "Popular Movies", "desc": "An Android application developed utilizing TMDB API & Android's internal SQLite DB", "url": ProjectLinks['Movies'] },
            {"title": "Neural Network", "desc": "A basic neural network developed in C#, .NET 4.5, utilizing XML data storage.", "url": ProjectLinks['Network'] }
          ]
        },
        "footer": " All rights and reservations of images belong to "
    },
    "DE": {
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "","","",""
            ]
        },
        "banner": {
            "title": "",
            "sub": ""
        },
        "about": {
            "text": ""
        },
        "portfolio": {
            "title": "",
            "desc" : "",
            "projects": [
            {"title": "x", "desc": "abc", "status": "" },
            {"title": "y", "desc": "abc", "status": "" }
            ]
        }
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
            "lineTwo": "Jestem 21 letnim full-stack developerem. W skład moich pasji wchodzi tworzenie aplikacji internetowych przy wykorzystaniu obecnie używanych technologii.",
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
            {"title": "Hedonist", "desc": "Wyszukiwarka piw, zaprojektowana przeze mnie oraz Michaela Kurowskiego przy użyciu ReactJS i Express.", "url": ProjectLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "Aplikacja internetowa, stworzona w technologii ReactJS która prezentuje moje najistotniejsze projekty.", "url": ProjectLinks['Portfolio'] },
            {"title": "Fotorgrafia", "desc": "W trakcie realizacji - data ukończenia ~ 10/07", "url": ProjectLinks['Photography'] },
            {"title": "Sunshine", "desc": "Aplikacja na telefony z systemem Android, wykorzystująca OpenWeatherMap API oraz usługę GCM.", "url": ProjectLinks['Sunshine'] },
            {"title": "Popularne filmy", "desc": "Aplikacja na telefony z systemem Android, wykorzystująca TMDB API oraz wewnętrzną bazę danych Androida - SQLite", "url": ProjectLinks['Movies'] },
            {"title": "Sieć neuronowa", "desc": "Prosta sieć neuronowa, stworzona przy użyciu: C#, .NET 4.5, składująca dane w formacie XML.", "url": ProjectLinks['Network'] }
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
            {"title": "Hedonist", "desc": "A very good application designed by me.", "status": "80%", "url": ProjectLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A very good application designed by me.", "status": "50%", "url": ProjectLinks['Portfolio'] },
            {"title": "Photography", "desc": "A very good application designed by me.", "status": "Design Phase", "url": ProjectLinks['Photography'] },
            {"title": "Hedonist", "desc": "A very good application designed by me.", "status": "80%", "url": ProjectLinks['Hedonist'] },
            {"title": "Portfolio", "desc": "A very good application designed by me.", "status": "50%", "url": ProjectLinks['Portfolio'] },
            {"title": "Photography", "desc": "A very good application designed by me.", "status": "Design Phase", "url": ProjectLinks['Photography'] }
          ]
        }
    },
    "FR": {
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "","","",""
            ]
        },
        "banner": {
            "title": "",
            "sub": ""
        },
        "about": {
            "text": ""
        },
        "portfolio": {
            "title": "",
            "desc" : "",
            "projects": [
            {"title": "x", "desc": "abc", "status": "" },
            {"title": "y", "desc": "abc", "status": "" }
            ]
        }
    },
    "ES": {
        "navbar": {
            "brand": "Jordan Moss",
            "tiles": [
                "","","",""
            ]
        },
        "banner": {
            "title": "",
            "sub": ""
        },
        "about": {
            "text": ""
        },
        "portfolio": {
            "title": "",
            "desc" : "",
            "projects": [
            {"title": "x", "desc": "abc", "status": "" },
            {"title": "y", "desc": "abc", "status": "" }
            ]
        }
    }
}
//after messing with postman for a few hours a day and being unsure of the assignment, 
//I decided to just write my endpoints here, along with my JSON scheme and the arrays that should be returned.

//schema
{
                "category": "string",
                "name": "string",
                "id":"number"
}

// endpoints

/movies/
//return
[{
    "category":"movie",
    "name":"kill Bill",
    "id": "1"
}, 
{
    "category": "movie",
    "name": "kill Bill 2",
    "id": "2"
}
]

/actors/

[{
    "category": "actor",
    "name":"uma Therman",
    "id":"3"
}, {
    "category":"actor",
    "name": "Lucy Lu",
    "id":"4"
    }
]

/release/

[{
    "category":"Release Date",
    "name":"2003",
    "id": "5"
}, {
    "category":"Release Date",
    "name":"2004",
    "id":"6"
}]

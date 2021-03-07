# The Api

## Todos

### Getting all Todos
```
GET http://localhost:3000/todos
```
### Adding a Todo
```
POST http://localhost:3000/todos
Content-Type: application/json

{
    "description": "Get Tacos"
}
```
### Removing a Todo
```
DELETE http://localhost:3000/todos/cklz8w6rx0001y0w66gf4gdyo
```

## Songs

### Getting all Songs

```
GET http://localhost:3000/songs
```

### Adding a Song

```
POST http://localhost:3000/songs
Content-Type: application/json

{
    "title": "Merry Had a Little Lamb"
}

POST http://localhost:3000/songs
Content-Type: application/json

{
    "title": "Ships Song",
    "artist": "Nick Cave",
    "album": "Boatman's Call"
}
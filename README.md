# adonisJS
Demo with register new user and login

---------------------------------------------------------------------------------------------------------------------------------------------
API : Register - Method : POST
url : http://localhost:3333/api/user/register
data : 
{
    "email" : "lunguyen123@gmail.com",
    "password" : "123",
    "username" : "lunguyen"
}
Result : 
{
    "user": {
        "email": "lunguyen123@gmail.com",
        "password": "$2a$10$TZ64LaVCD1TknHFO6eF5M..i0xsIYDAWvMw1155LmRTk5DBGLPCDe",
        "username": "lunguyen",
        "created_at": "2021-10-05 09:39:20",
        "updated_at": "2021-10-05 09:39:20",
        "id": 1
    },
    "access_token": {
        "type": "bearer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc2MH0.EV6ILOKfAnh7VYq4FAWYRraPP0ul4stV-m3r1cTw8Dg",
        "refreshToken": null
    }
}

---------------------------------------------------------------------------------------------------------------------------------------------

Api : login  - Method : POST
url : http://localhost:3333/api/user/login
data : 
{
    "email" : "lunguyen123@gmail.com",
    "password" : "123"
}

Result :
{
    "user": {
        "id": 1,
        "username": "lunguyen",
        "email": "lunguyen123@gmail.com",
        "password": "$2a$10$TZ64LaVCD1TknHFO6eF5M..i0xsIYDAWvMw1155LmRTk5DBGLPCDe",
        "created_at": "2021-10-05 09:39:20",
        "updated_at": "2021-10-05 09:39:20"
    },
    "access_token": {
        "type": "bearer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc4MH0.mpZTzxHdeWXz8yEICz5eN83SwGe3xqNCFIt9EvvV6WU",
        "refreshToken": null
    }
}

---------------------------------------------------------------------------------------------------------------------------------------------

Api : get all jobs - Method : GET
url : http://localhost:3333/api/job
header :
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc4MH0.mpZTzxHdeWXz8yEICz5eN83SwGe3xqNCFIt9EvvV6WU

Result : job list

---------------------------------------------------------------------------------------------------------------------------------------------

api : Create a job - Method POST
url : http://localhost:3333/api/job

header :
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc4MH0.mpZTzxHdeWXz8yEICz5eN83SwGe3xqNCFIt9EvvV6WU
data : {
    "title" : "PHP developer",
    "link" : "google.com.vn",
    "description" : "Fresher php developer"
}
Result : Json job info

---------------------------------------------------------------------------------------------------------------------------------------------

api : Update a job - Method PUT
url : http://localhost:3333/api/job/id

header :
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc4MH0.mpZTzxHdeWXz8yEICz5eN83SwGe3xqNCFIt9EvvV6WU

Result : Json job info

---------------------------------------------------------------------------------------------------------------------------------------------

api : Delete a job - Method DELETE
url : http://localhost:3333/api/job/id

header :
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMzQyNjc4MH0.mpZTzxHdeWXz8yEICz5eN83SwGe3xqNCFIt9EvvV6WU

Result : Json job info

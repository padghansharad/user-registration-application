var UserDbModel = require('./api/User/UserDbModel.js')
app.post('/saveUserDetails', function (request, response, next) {
    UserDbModel.saveUserDetails(client, response, request.body, next)
})

app.post('/updateUserDetails', function (request, response, next) {
    UserDbModel.updateUserDetails(client, response, request.body, next)
})

app.get('/getUsers', function (request, response, next) {
    UserDbModel.getUsers(client, response, request.body, next)
})

app.delete('/deleteUser/:id', function (request, response, next) {
    UserDbModel.deleteUser(client, response, request.params.id, next)
})
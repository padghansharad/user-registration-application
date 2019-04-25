var HospitalDbModel = require('./api/Hospital/HospitalDbModel.js')
app.post('/saveUserDetails', function (request, response, next) {
    HospitalDbModel.saveUserDetails(client, response, request.body, next)
})

app.post('/updateUserDetails', function (request, response, next) {
    HospitalDbModel.updateUserDetails(client, response, request.body, next)
})

app.get('/getUsers', function (request, response, next) {
    HospitalDbModel.getUsers(client, response, request.body, next)
})

app.delete('/deleteUser/:id', function (request, response, next) {
    HospitalDbModel.deleteUser(client, response, request.params.id, next)
})
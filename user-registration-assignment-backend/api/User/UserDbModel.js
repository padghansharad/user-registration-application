var HospitalDbModels = exports;
HospitalDbModels.saveUserDetails = function (client, response, data, next) {
    try {
        const query = {
            text: 'INSERT INTO myschema.user(name,address) VALUES ($1,$2)',                
            values: [data.name, data.address]
        }
        client.query(query, (err, res) => {
            if (err) {
                console.log('Error while saveUserDetails',err);                                
                response.send("Error from saveUserDetails");
            } else {
                response.send(res.rows);                
                next();
            }
        })
    } catch (err) {
        console.log('Error while saveUserDetails',err);  
    }
}

HospitalDbModels.updateUserDetails = function (client, response, data, next) {    
    try {
        const query = {
            text: 'UPDATE myschema.user  SET name=$1, address=$2 WHERE id=$3;',                
            values: [data.name, data.address,data.id]
        }
        client.query(query, (err, res) => {
            if (err) {
                console.log('Error while updateUserDetails',err);                                
                response.send("Error from updateUserDetails");
            } else {
                response.send(res.rows);                
                next();
            }
        })
    } catch (err) {
        console.log('Error while updateUserDetails',err);  
    }
}

HospitalDbModels.getUsers = function (client, response, data, next) {
    try {
        const query = {
            text: 'SELECT * FROM myschema.user'             
        }
        client.query(query, (err, res) => {
            if (err) {
                console.log('Error while getUsers',err);                                
                response.send("Error from getUsers");
            } else {
                response.send(res.rows);                
                next();
            }
        })
    } catch (err) {
        console.log('Error while getUsers',err);  
    }
}
HospitalDbModels.deleteUser = function (client, response, data, next) {
    try {
        const query = {
            text: 'delete FROM myschema.user where id=$1',
            values:[data]             
        }        
        client.query(query, (err, res) => {
            if (err) {
                console.log('Error while deleteUser',err);                                
                response.send("Error from deleteUser");
            } else {
                response.send(res.rows);                
                next();
            }
        })
    } catch (err) {
        console.log('Error while deleteUser',err);  
    }
}

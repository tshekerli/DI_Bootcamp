const fs = require('fs');
const bcrypt = require('bcrypt');

const register = (data) => {

    const db = JSON.parse(fs.readFileSync('../db/db.json', 'utf-8'))
    //I need the lenght of the database so that I can assign id to the new user if it's empty then the id will be 1
    let id = db.length === 0 ? 1 : db[db.length - 1].id + 1;
    //I need to hash the password before saving it to the database
    let hashedPassword = bcrypt.hashSync(data.password, 10);


    let user = {id:id,username: data.username, password: hashedPassword}
    db.push(user)
    fs.writeFileSync('../db/db.json', JSON.stringify(db))
    .then(() => {
        console.log('User registered')
    })

}

const login = (data) => {
    const db = JSON.parse(fs.readFileSync('../db/db.json', 'utf-8'))
    let user = db.find(user => user.username === data.username)
    if(user){
        let match = bcrypt.compareSync(data.password, user.password)
        if(match){
            console.log('User logged in')
        }
    }
}

const getAllUsers = () => {
    const db = JSON.parse(fs.readFileSync('../db/db.json', 'utf-8'))
    return db
}

const getUser = (id) => {
    const db = JSON.parse(fs.readFileSync('../db/db.json', 'utf-8'))
    let user = db.find(user => user.id === id)
    return user
}

const updateUser = (id, data) => {
    const db = JSON.parse(fs.readFileSync('../db/db.json', 'utf-8'))
    let user = db.find(user => user.id === id)
    user.username = data.username
    user.password = data.password
    fs.writeFileSync('../db/db.json', JSON.stringify(db))
}

module.exports = { register, login, getAllUsers, getUser, updateUser }
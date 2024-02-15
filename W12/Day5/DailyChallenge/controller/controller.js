const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

const readDbFile = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing db file', err);
        return [];
    }
};

const register = (data) => {
    return new Promise((resolve, reject) => {
        if (!data || !data.username || !data.password) {
            console.error('Invalid data or password');
            reject('Invalid data or password');
            return;
        }

        const db = readDbFile();
        
        let id = db.length === 0 ? 1 : db[db.length - 1].id + 1;
        
        let hashedPassword = bcrypt.hashSync(data.password, 10);

        let user = {id:id,username: data.username, password: hashedPassword};
        db.push(user);

        fs.writeFile(dbPath, JSON.stringify(db), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                reject(err);
            } else {
                console.log('User registered');
                resolve();
            }
        });
    });
};

const login = (data) => {
    const db = readDbFile();
    let user = db.find(user => user.username === data.username);
    if(user){
        let match = bcrypt.compareSync(data.password, user.password);
        if(match){
            console.log('User logged in');
        }
    }
};

const getAllUsers = () => {
    return readDbFile();
};

const getUser = (id) => {
    const db = readDbFile();
    let user = db.find(user => user.id === id);
    return user;
};

const updateUser = (id, data) => {
    const db = readDbFile();
    let user = db.find(user => user.id === id);
    if (user) {
        user.username = data.username;
        //if the user password is not empty, update the user password
        if(data.password){
            user.password = bcrypt.hashSync(data.password, 10);
        }
        
        fs.writeFile(dbPath, JSON.stringify(db), (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('User updated');
            }
        });
    }
};

module.exports = { register, login, getAllUsers, getUser, updateUser };
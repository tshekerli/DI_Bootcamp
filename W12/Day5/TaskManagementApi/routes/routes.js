const express = require('express');
const fs = require('fs');
const router = express.Router();

const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    });
});

router.get('/tasks', (req, res) => {
    readFilePromise
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500
            ).send(err);
        }
        );
}
);

router.get('/tasks/:id', (req, res) => {
    readFilePromise
        .then(data => {
            const tasks = JSON.parse(data);
            const task = tasks.find(task => task.id === parseInt(req.params.id));
            if (!task) {
                res.status(404).send('Task not found');
                return;
            }
            res.send(task);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post('/tasks', (req, res) => {
    readFilePromise
        .then(data => {
            const tasks = JSON.parse(data);
            const task = {
                id: tasks.length + 1,
                taskName: req.body.taskName,
                taskDetails: req.body.taskDetails,
                completed: req.body.completed
            };
            tasks.push(task);
            fs.writeFile('./db/db.json', JSON.stringify(tasks), err => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.send(task);
            });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.put('/tasks/:id', (req, res) => {
    readFilePromise
        .then(data => {
            const tasks = JSON.parse(data);
            const task = tasks.find(task => task.id === parseInt(req.params.id));
            if (!task) {
                res.status(404).send('Task not found');
                return;
            }
            task.taskName = req.body.taskName;
            task.taskDetails = req.body.taskDetails;
            task.completed = req.body.completed;
            fs.writeFile('./db/db.json', JSON.stringify(tasks), err => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.send(task);
            });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.delete('/tasks/:id', (req, res) => {
    readFilePromise
        .then(data => {
            let tasks = JSON.parse(data);
            tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
            fs.writeFile('./db/db.json', JSON.stringify(tasks), err => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.send('Task deleted');
            });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});


module.exports = router;
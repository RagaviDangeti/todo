var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({ username: req.params.uname })
            .then(results => {
                res.send(results);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

    app.get('/api/todo/:id',function(req,res){
        Todos.find({_id: req.params.id})
        .then(results => {
            res.send(results);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    });

    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment })
            .then(() => {
                res.send('success');
            })
            .catch(err => {
                res.status(500).send(err);
            });
        }
        
        else {
           
           var newTodo = Todos({
               username: 'test',
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save()
           .then(() => {
                res.send('success');
            })
            .catch(err => {
                res.status(500).send(err);
            });
            
        }
        
    });
    
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndDelete(req.body.id)
        .then(() => {
            res.send('success');
        })
        .catch(err => {
            res.status(500).send(err);
        });
        
    });
}
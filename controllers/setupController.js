var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos',function(req,res){
        //seed Database
        var starterTodos =[
            {
                username: 'Ragavi',
                todo: 'Nodejs Dive Deep',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Ragavi',
                todo: 'Javascript',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Ragavi',
                todo: 'Reactjs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Ragavi',
                todo: 'Mysql',
                isDone: false,
                hasAttachment: false
            },
            {
                "username": "Burch",
                "todo": "ce2440f0-6522-403e-9b98-57bae7803a86",
                "isDone": true,
                "hasAttachment": false
            },
            {
                "username": "Dee",
                "todo": "a7c3b149-a21c-4eae-9035-d4e11bf5c658",
                "isDone": false,
                "hasAttachment": true
            }
        ];

        Todos.create(starterTodos);
    })
}
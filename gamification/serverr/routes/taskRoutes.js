const router =require('express').Router();

const {createTask , getTasks , deleteTask , countTasks} = require('./../controllers/taskController')

router.post('/' , createTask)

router.get('/', getTasks)

router.delete('/:id' , deleteTask)

router.get('/countTasks' , countTasks)




module.exports = router;
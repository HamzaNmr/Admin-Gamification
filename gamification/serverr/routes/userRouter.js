const router =require('express').Router();

const {createUser , getUsers , getUser,topUsers , lateastUsers , countUsers , deleteUser , updateUser} =  require('./../controllers/userController');


router.post('/', createUser);
router.get('/' , getUsers);
router.delete('/:id' , deleteUser)
router.get('/topUsers' , topUsers);
router.get('/lateastUsers' , lateastUsers);
router.get('/countUsers' , countUsers)
router.get('/:id' , getUser)
router.put('/update/:id' , updateUser)


module.exports = router;


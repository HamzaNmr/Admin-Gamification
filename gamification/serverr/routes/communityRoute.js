const router = require('express').Router();

const { getGroups, getGroup , createGroup ,deleteGroup , countGroups} = require('../controllers/communityController');



router.post('/create', createGroup)
router.get('/',getGroups );
router.get('/:id',getGroup );
router.delete('/delete/:id',deleteGroup)
router.get('/countGroup/count',countGroups)




module.exports = router;
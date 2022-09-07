const router =require('express').Router();

const {createReward , getRewards , deleteReward , countReward} = require('./../controllers/rewardController')

router.post('/' , createReward)
router.get('/' , getRewards)
router.delete('/:id' , deleteReward)
router.get('/countReward' , countReward)





module.exports = router;
const router = require('express').Router();

const {getBadges, createBadges,deleteBadges , countBadges } = require('../controllers/badgesController');



router.post('/create',createBadges),
router.get('/',getBadges),
router.get('/count',countBadges),
router.delete('/delete/:id' , deleteBadges)




module.exports = router;
const express =require('express');
const router=express.Router();
const limiter=require('../middlewares/ratelimiter.middleware');

const {addVechile, assignDriver}=require('../controllers/vechile.controller');

router.post('/add, limiter, addVechile');
router.patch('/assign-driver/:vechileID',assignDriver);

module.exports =router;
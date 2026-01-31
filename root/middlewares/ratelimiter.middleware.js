const rateLimit= require('express-rate-limit');

const vechileLimiter=rateLimit({
    windows:1*60*1000,
    max:3,
    message:"too many vechile creation "
});

module.exports =vechileLimiter;
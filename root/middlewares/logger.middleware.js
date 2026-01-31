const fs= require('fs');
module.exports=(req,res,next)=>{
    const log =`${req.method} {req.url} -${new Date().toISOString()}\n`;

    fs.appendFileSync('logs.text',log);
    next();
}
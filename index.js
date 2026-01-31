require('dotenv').config();
const express=require('express');

const app=express();
app.use(express.json());
app.use(require('./root/middlewares/logger.middleware'));

app.use('/users',require('./root/routes/user.routes'));
app.use('/vechiles',require('./root/routes/vechiles.routes'));
app.use('/trip',require('./root/routes/trip.routes'));
app.use('/analytics',require('./root/routes/analytics.routes'));

app.use(require('./root/middlewares/notfound.middleware'));

app.listen(process.env.PORT, ()=>{
    console.log(`server runnin on port ${process.env.PORT}`)
});




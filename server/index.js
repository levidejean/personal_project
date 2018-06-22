require('dotenv').config();
const express = require('express');
const { json } = require ('body-parser');
const cors = require ('cors');
const massive = require('massive');
const session = require ('express-session');
const passport = require('passport');
const path = require('path');

const { getUser, strat, logout } = require(`${__dirname}/controllers/authControl`);
const {getData, getImg} =  require('./controllers/dataController');
const {getPlaceId} = require(`${__dirname}/controllers/reviewController`);


const port = process.env.PORT || 3001;

const app = express();
app.use( express.static( `${__dirname}/../build` ) );


 //console.log(process.env.CONNECTION_STRING);

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(console.log);

app.use(json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100000
    }
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {

    console.log(user.id);
    console.log(user.displayName);
    const db = app.get('db');
    db.getUserByAuthID([user.id]).then(response => {

        if(!response[0]) {
            db.addUserByAuthID([user.displayName, user.id])
            .then(res => done(null, res[0]))
            .catch(console.log);   
        }else return done(null, response[0])
    }).catch(console.log)
});
passport.deserializeUser((user, done) => done(null, user));

app.get(
    '/login',
    passport.authenticate('auth0', {
        successRedirect: 'http://localhost:3000/#/picker',
        failRedirect: '/#/'
    })
);

//user endpoints
app.get('api/me', getUser);
app.post('/logout', logout);

//places endpoints
app.get('/getdata/:info', getData);
//app.get(`/api/img`, getImg)

//review endpoints
app.get('/reviews/:id', getPlaceId);

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
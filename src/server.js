const app = require ('./app');
const {DB,env} = require('./configs');

const MONGO_URL = env.DB_URL;
const port = env.port || 8000;


//create our server
const start = async ()=>{
    try{
        const connected = await DB(MONGO_URL);
        if (connected){
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        });
    }
    }catch (error){
        console.error("error starting server: " + error.message);
    }
}
start();
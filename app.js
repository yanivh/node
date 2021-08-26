const  express = require ('express');
const app = express() ;

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log("dfind aws");
});

app.get('/', (req,res) => {
    res.send("welcome Dfind");

});
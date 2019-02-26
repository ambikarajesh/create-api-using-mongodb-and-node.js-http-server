const MongoClient = require('mongodb').MongoClient;
const http = require('http');
var url = 'mongodb://localhost:27017/learning-mongo';

MongoClient.connect(url, (error, db)=>{
    const collection = db.collection('tours');
    collection.insert({'tourName':'India'}).toArray((err, doc)=>{
        console.log('Connction MongoDB Successfully');
        http.createServer((req, res)=>{
            if(req.url ==='/'){
                res.writeHead(200, {'Content-Type':'application/json'});
                res.end(JSON.stringify(doc));
            }
        }).listen(3000, ()=>{
            console.log('Server Start port is 3000');
        })
    })
    db.close();
})

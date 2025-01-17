const {MongoClient} = require('mongodb')
const url = "mongodb+srv://shahzaib:shahzaib@cluster0.ek4ncrq.mongodb.net/"
const database = "shahzaib"
const client = new MongoClient(url)

async function  getData  (){

    let result = await client.connect();
    let db = result.db(database)
    let collection = db.collection('SampleData');
    let respone = await collection.find({}).toArray();
    console.log(respone ,"asd")
} 

getData()

///
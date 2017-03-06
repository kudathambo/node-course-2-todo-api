//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Todos').find({
//		_id:new ObjectID('58bd1ba6b7e28e2ac87b10df')
//	}).toArray().then((docs)=>{
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, (err)=>{
//		console.log('Unable to fetch docs');
//	});
	
//	db.collection('Todos').find().count().then((count)=>{
//		console.log(`Todos count : ${count}`);
//	}, (err)=>{
//		console.log('Unable to fetch docs');
//	});
	
	db.collection('Users').find({name:'Kudakwashe Thambo'}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch documents');
	})
	
	//db.close();
});
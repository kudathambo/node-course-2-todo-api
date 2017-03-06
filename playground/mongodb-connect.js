//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Todos').insertOne({
//		text:'Something to EAT',
//		completed:false
//	}, (err, result)=>{
//		if(err){
//			return console.log('Unable to insert todo', err);
//		}
//		console.log(JSON.stringify(result.ops, undefined, 2));
//	});
//	db.collection('Users').insertOne({
//		name:'Kudakwashe Thambo',
//		age:25,
//		location: 'Harare, Zimbabwe'
//	}, (err, result)=>{
//		if(err){
//			return console.log('Unable to insert user', err);
//		}
//		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//	});
	
	db.close();
});
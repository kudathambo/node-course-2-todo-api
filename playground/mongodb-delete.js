//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
//	db.collection('Todos').deleteMany({
//    text:'Eat Lunch'
//	}).then((result)=>{
//		console.log(result);
//	});
	//deleteone
	
//	db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//		console.log(result);
//	});
	
	//findOneAndDelete
//	db.collection('Todos').findOneAndDelete({completed:false}).then((docs)=>{
//		console.log(JSON.stringify(docs, undefined, 2));
//	});
	

//	db.collection('Users').deleteMany({name:'Kudakwashe Thambo'}).then((result)=>{
//		console.log('DELETE');
//		console.log(result);
//	}, (err)=>{
//		if(err){
//			console.log('Unable to delete document(s)');
//		}
//	});
	
	db.collection('Users').findOneAndDelete({ _id: new ObjectID('58bd1ee7487028244c9abce8')}).then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 4));
	});
	//db.close();
});
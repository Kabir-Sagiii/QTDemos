var { MongoClient, ObjectId } = require("mongodb");
var url = "mongodb://localhost:27017";

var client = new MongoClient(url);

var dbname = "mydb";
var collectionName = "users";

async function connectDB() {
  //connect Mongodb Server
  await client.connect();

  //Connect Database in Server
  var db = client.db(dbname);

  //Connect Collection in Database
  var coll = db.collection(collectionName);

  return coll;
}

async function getData() {
  var coll = await connectDB();

  //Access Data From Database
  var info = await coll.find({}).toArray();
  console.log(info);
}

async function insertData() {
  var coll = await connectDB();

  //insert Data in Database
  var info = await coll.insertOne({ name: "dummy re" });
  console.log(info);
}

async function deleteD() {
  var coll = await connectDB();

  var d = await coll.deleteMany({
    _id: new ObjectId("6729fa7f853169328186b023"),
  });

  console.log("delete", d);
}

insertData();
// getData();
deleteD();
getData();

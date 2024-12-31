```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("65202839753974214150")},{"$inc":{"field":1}});
```
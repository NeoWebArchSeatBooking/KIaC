
const database = 'infradb';
const collection1 = 'locations';
const collection2 = 'seats';
// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection1);
db.createCollection(collection2);
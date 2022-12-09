const mongoose = require('mongoose');
const dbURI = "mongodb+srv://cilliann:<310722>@siamsatirecluster.ixjyuq2.mongodb.net/Siamsa?retryWrites=true&w=majority";
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected successfully")
);
}
 catch (e) {
  console.log("Could not connect to DB");
}
require('./locations');
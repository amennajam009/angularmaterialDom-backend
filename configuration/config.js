const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI;
const Package = require('../package.json');
// Setting
mongoose.set('debug', true);

// Connection
mongoose
  .connect(dbUrl, 
    // Some common settings (You don't need to understand these)
   { useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
   }
  )
  // eslint-disable-next-line no-console
  .then(() => {
    console.log('\nMogoDb Connected Successfuly at MongoAtlas with Database Name blah blah DataBase\n');

    // Iterate over dependencies in the .then block
    for (const dependency in Package.dependencies) {
      console.log(dependency);
    }
  }) //Success
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('DB Connection Error :( -------> ', err); //Failed
  });

  
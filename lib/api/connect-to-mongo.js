import mongoose from 'mongoose';

// we'll import all the schemas here and return them
// on the mongo connection object
// for use in the handlers
import UserSchema from '../../data/models/User';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    'mongodb://localhost:27017/nextjs',
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true
    }
  );
  const User = connection.model("User", UserSchema);
  return {
    connection,
    models: {
      User
    }
  };
}

export default connectToMongo;
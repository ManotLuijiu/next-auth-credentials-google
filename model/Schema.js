// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isAdmin: { type: Boolean, required: true, default: false },
//   since: {
//     type: Date,
//     default: Date.now,
//   },
// });
// mongoose.models = {};
// const User = mongoose.model('User', userSchema);
// export default User;
import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  token: { type: String, required: false, default: '' },
});

const Users = models.user || model('user', userSchema);

export default Users;

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: false,
//     required: false,
//     trim: true
//   },
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//   }
// });



// // UserSchema.pre('save', function(next) {
// //   var user = this;
// //   if (user.password) {
// //     bcrypt.hash(user.password, 10, (err, hash) => {
// //       if (err) {
// //         console.log("err: ", err);
// //         return next(err);
// //       }
// //       user.password = hash;
// //       user.passwordConf = hash;
// //       next();
// //     });
// //   } else {
// //     console.log(user);
// //     next();
// //   }
// // });


// const User = mongoose.model('User', UserSchema);
// module.exports = User;
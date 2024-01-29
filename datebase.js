const mongoose = require('mongoose');
const opciones = {
  user: "michael",
  pass: "barcelona01.",
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect('mongodb+srv://michaelalejandro0112:madrid01.@cluster0.p6gxiwn.mongodb.net/?retryWrites=true&w=majority', opciones);
module.exports = mongoose;
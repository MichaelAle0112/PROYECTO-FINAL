const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const UserSchema = moongose.Schema(
    {
        id:{
            type: Number
        },
        nombre:{
            type: String,
            required: [true, "Please enter a name"]
        },
        correo:{
            type: String,
            required: [true, "Please enter a email"]
        },
        password:{
            type: String,
            required: [true, "Please enter a password"]
        },
        verified:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const MyUser = mongoose.model("User", UserSchema);

module.exports = MyUser;  
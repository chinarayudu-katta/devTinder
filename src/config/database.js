const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://chinarayudukatta_db_user:G3JovEdZt0Outq6S@hellonode.dhm5vpj.mongodb.net/devTinder"
)
}
module.exports = connectDB;


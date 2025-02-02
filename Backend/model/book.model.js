import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
})

const BookModel = mongoose.model("Book", bookSchema)

export default BookModel
const Book = require('../models/Book')

const getAllBooks = async(req, res, next)=>{
    let book;
    try {
        book= await Book.find();
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(404).json({message: 'No product found'})
    }
    return res.status(200).json({book});

};

const addBook = async(req ,res, next)=>{
    const {name, author, description, price,available,image} = req.body;
    let book;
    try {
        book = new Book({
            name,
            author, 
            description, 
            price,
            available,
            image
        });
        await book.save();
    } catch (error) {
        console.log(error)       
    }
    if(!book){
        return res.status(500).json({message: 'Unable to add'})
    }
    return res.status(201).json({book});
}

const getById = async(req ,res, next)=>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);

    } catch (error) {
        console.log(error) 
    }
    if(!book){
        return res.status(404).json({message: 'No book found'})
    }
    return res.status(200).json({book});
}

const updateBook = async(req ,res, next)=>{
    const id = req.params.id;
    const {name, author, description, price,available,image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name, 
            author, 
            description, 
            price,
            available,
            image
        });
        await book.save();
    } catch (error) {
        console.log(error)       
    }
    if(!book){
        return res.status(404).json({message: 'Unable to update By this ID'})
    }
    return res.status(200).json({book});
}

const deleteBook = async(req ,res, next)=>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)   
    }
    if(!book){
        return res.status(404).json({message: 'Unable to daleta By this ID'})
    }
    return res.status(200).json({message: 'delete succesfuly'});
}

exports.getAllBooks= getAllBooks;
exports.addBook= addBook;
exports.getById= getById;
exports.updateBook= updateBook;
exports.deleteBook= deleteBook;



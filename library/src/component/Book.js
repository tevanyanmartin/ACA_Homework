import React, { useState, useRef } from 'react'
import { useCookies } from 'react-cookie';
import '../css/book.css'



const Book = () => {

    const [cookies, setCookie] = useCookies(['username', 'book'])
    const [books, setBook] = useState([

        {
            name: 'To Kill a Mockingbird',
            description: 'Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century. Humour entwines the delicate strands of prejudice, hatred, hypocrisy, love and innocence to create one of the best novels ever written.',
            author: 'Harper Lee'
        },
        {
            name: 'Harry Potter and the Philosopher’s Stone',
            description: 'I’m willing to bet you’ve heard of Harry Potter, but have you read the books?I’m willing to bet you’ve heard of Harry Potter, but have you read the books?I’m willing to bet you’ve heard of Harry Potter, but have you read the books?I’m willing to bet you’ve heard of Harry Potter, but have you read the books?I’m willing to bet you’ve heard of Harry Potter, but have you read the books?I’m willing to bet you’ve heard of Harry Potter, but have you read the books? Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.',
            author: 'J.K. Rowling'
        },
        {
            name: 'The Lord of the Rings',
            description: 'Middle Earth is a wonderful, expansive fantasy world filled with turmoil, heroes, evil and innocence. Although our protagonist Frodo Baggins’ quest seems impossible to complete, this trilogy is a tale of triumph in the most impossible circumstances.',
            author: 'J.R.R. Tolkien'
        }

    ])
    setCookie('book', books, { path: '/' })
    let bookChange = [...books]
    const handleChange = e => {
        if (e.target.name === 'name') {
            bookChange[Number(e.target.id)].name = e.target.value
        } else if (e.target.name = 'description') {
            bookChange[Number(e.target.id)].description = e.target.value
        } else if (e.target.name = 'author') {
            bookChange[Number(e.target.id)].author = e.target.value
        }
        setBook(bookChange)
        setCookie('book', bookChange, { path: '/' })
    };
    const handleDelete = (e) => {
        console.log(Number(e.target.id))
        bookChange.splice(Number(e.target.id), 1)
        setBook(bookChange)
        setCookie('book', bookChange, { path: '/' })

    }
    const handleUpdate = () => {
        setCookie('book', books, { path: '/' })
    }
    const [newBook, setNewbook] = useState({
        name: '',
        description: '',
        author: ''
    })
    let newBooktmp = { ...newBook }
    const handleCreateChange = (e) => {
        if (e.target.name === 'name') {
            newBooktmp.name = e.target.value
        } else if (e.target.name === 'description') {
            newBooktmp.description = e.target.value
        } else if (e.target.name === 'author') {
            newBooktmp.author = e.target.value
        }

        setNewbook(newBooktmp)

    }
    const handleCreateBook = (e) => {
        e.preventDefault()
        bookChange.push(newBooktmp)
        setBook(bookChange)
        setCookie('book', bookChange, { path: '/' })
        
    }
    let bookContent;
    let createBook;
    if (!cookies.username) {
        bookContent = books.map((book, i) => (
            <div key={i} className='book'>
                <p className='name-of-book'>{book.name}</p>
                <p className='description-of-book'>{book.description}</p>
                <p className='author-of-book' >{book.author}</p>
            </div>
        ))
    } else {
        createBook = <div className='create-new-book'>
            <div className='create-book-container'>
                <div className='create-book-title'>
                    <h2>Create New Book</h2>
                </div>
                <div className='create-book-form'>
                    <form onSubmit={handleCreateBook}>
                        <input type="text" name="name" value={newBook.name} onChange={handleCreateChange} placeholder='Name' required />
                        <input type="text" name="author" value={newBook.author} onChange={handleCreateChange} placeholder='author' required />
                        <textarea name='description' value={newBook.description} onChange={handleCreateChange} placeholder='description' required></textarea>

                        <input type='submit' value="Create" />
                    </form>
                </div>
            </div>
        </div>
        bookContent = cookies.book.map((book, i) => (
            <div key={i} className='book'>
                <textarea id={i} name='name' value={book.name} onChange={handleChange} className='name-of-book' ></textarea>
                <textarea id={i} name='description' value={book.description} onChange={handleChange} className='description-of-book' ></textarea>
                <textarea id={i} name='author' value={book.author} onChange={handleChange} className='author-of-book' ></textarea>
                <div className='upd-and-del-btn'>
                    <button id={i} className='delete-book' onClick={handleDelete} >DELETE</button>
                    <button id={i} className='update-book' onClick={handleUpdate}>UPDATE</button>
                </div>
            </div>
        ))
    }

    return (
        <>
            <div className='books-main-content'>
                {createBook}
                <div className='books-container'>

                    {bookContent}
                </div>
            </div>
        </>
    )
}


export default Book

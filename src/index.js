import React from 'react'
import ReactDOM from 'react-dom/client'
import books from './books'
import Book from './Book'
import './index.css'
/*
function Greeting() {
  return (
    <div>
      {/* <person />
      <message /> }
      <h2>Vijay Makkad</h2>
      <p>Message is mine</p>
      <Person />
      <Message />
      <Betti />
    </div>
  )
}
const Person = () => <h2>My name is vijay</h2>
const Message = () => {
  return (
    <div>
      <p>Maachudyae </p>
      <p>THis is my message</p>
    </div>
  )
}
//CApital letter must be used
const Betti = () => {
  return <p>Rajisthani hai kya!</p>
}
*/
// function Greeting() {
//   return React.createElement('h2',{},'Heellooo worldss')
// }  Long way for including in html

//There is no class but classname

/*
const Booklist = () => {
  const someValue = 'VijayMakkad'
  const displayValue=()=>{
    console.log(someValue)
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        const {id}=book //destructuring
        //const{img,title,author}=book
        return (
          // <div>
          //   <img src={book.img} alt={book.title} />
          //   <h2>{book.title}</h2>
          //   <h4>{book.author}</h4>
          // </div>
          <section>
           {/* <Eventexample /> }
            <Book book={book} key={id} displayValue={displayValue} />
          </section>
        )
      })}
    </section>
  )
}

const Book = ({book:{ title, author, img,displayValue}}) => {
  //destructuring it in the function parameter itself
  //destructuring (we dont have to write using dot operator)
  // const { title, author, img } = props
  const handleEventonclick = () => {
    console.log(title)
    alert('Clicked!!!')
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={displayValue}>Buy me!</button>
      {/* <p>{let x=6}</p> this wont gonna work as does not return a value and commenting multiple lines shortcut is ctrl+m+/ }
    </article>
  )
}
*/


const BookList = () => {
  /*const getbook=(id)=>{
    const book=books.find((book)=>book.id===id)
    console.log(book);
  }*/
  const someValue = 'VijayMakkad';
  const displayValue = () => {  //can only passs props down the component tree
    console.log(someValue);
  };

  return (
    <div>
      <div className='div1'>
        <h1>Amazon Best Seller</h1>
      </div>
      <section className="booklist">
        {books.map((book, id) => {
          return (
            <>
              <Book
                {...book}
                key={book.id}
                number={id}
                displayValue={displayValue}
              />
            </>
          )
        })}
      </section>
    </div>
  )
}

//details in the readme.md file

/*
const Eventexample=()=>{
  const Outsidebutton = () => {
    alert('Form Clicked!!!')
  }
  const handleForminput=(e)=>{
    console.log(e.target)//gives all the info of the tag
    console.log(e.target.name)//gives the name of input
    console.log(e.target.value)//Gives back the parameter which we typed
    console.log("Helos")
  }
  const handleForm=(e)=>{
    e.preventDefault();  //Letting the user to handle the forms
    console.log("Submitted!!!")
  }
  return (
    <section>
      <form onSubmit={handleForm}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          placeholder="Name"
          onChange={handleForminput}
          style={{ margin: '1rem 0', padding: '1rem' }}
        />
        {/* If it has type submit then it will directly submit the form }
        <button onClick={Outsidebutton} type='button'>Click me!</button>
        <button type='submit'>submit</button>
      </form>
    </section>
  )
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
//createRoot s the root DOM element where the React application will be mounted

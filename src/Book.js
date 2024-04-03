const Book = (props) => {
  const { img, title, author,id,displayValue } = props
  // console.log(props);
  //setting up wrapper so as to overcome the bug caused by parameter passing in the onclick function   3:40:00
  // const getSingleBook=()=>{
  //   getbook(id)
  // }
    const handleClick = () => {
      alert('Button Clicked!!!')
      console.log(title)
    }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      {/* <button onClick={}>Click me!</button> */}
      <h4>{author}</h4>
      <span className="number">{`#${id}`}</span> 
      {/* way to add hashtag */}
      <button onClick={handleClick}>Click Me!!!</button>
      <button onClick={displayValue}>Buy me!</button>
    </article>
  )
}
export default Book;
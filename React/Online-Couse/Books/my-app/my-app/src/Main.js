import './app.css'
import books  from './books';
import Book from './book';

const BookList = () => {
  return(
    <>
    <h1>Pavic book list </h1>
    <section className='booklist'>
      {books.map((book,index)=>{
        return <Book {...book} key={book.id} number={index} />
      })
      }
    </section>
    </>
  )
}

function Main() {
  return (
    <BookList/>
  );
}

export default Main;

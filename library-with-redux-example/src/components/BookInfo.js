import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function BookInfo() {
    const history = useHistory();
    const book = useSelector((state) => { return state.selectedBook });

    return (
        <main className="background-dark">
            <div className="book-info">
                <header>
                    <a href="#" className="back" onClick={ () => history.push('/') }>&#8592;</a>
                </header>
                <section className="display">
                    <article className="book" style={{ backgroundColor: book.color }}>
                        <section className="bg"></section>
                        <section className="content">
                            <aside></aside>
                            <section className="about">
                                <h2>{ book.title }</h2>
                                <h3>{ book.author }</h3>
                            </section>
                        </section>
                    </article>
                </section>
                <section className="info">
                    <h1>{ book.title }</h1>
                    <h3>{ book.author }</h3>
                    <p>{ book.plot }</p>
                    <footer>
                        <p><b>Audience:</b> { book.audience }</p>
                        <p><b>First Published:</b> { book.year }</p>
                        <p><b>Pages:</b> { book.pages || '-' }</p>
                        <p><b>Publisher:</b> { book.publisher }</p>
                    </footer>
                </section>
            </div>
        </main>
    )
}

export default BookInfo;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectBook } from '../actions/bookAction';

function Book({ book }) {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(selectBook(book));
        history.push('/info');
    }

    return (
        <article className="book" onClick={ handleClick } style={{ backgroundColor : book.color }}>
            <section className="bg"></section>
            <section className="content">
                <aside></aside>
                <section className="about">
                    <h2>{ book.title }</h2>
                    <h3>{ book.author }</h3>
                </section>
            </section>
        </article>
    )
}

export default Book;
import React from 'react';
import { useQuery } from 'react-apollo';

import { Container, Loading, List, Controls } from './styles';
import BookDetails from '../BookDetails';
import AuthorAdder from '../AuthorAdder';
import BookAdder from '../BookAdder';
import { getBooksQuery } from '../../queries/queries';

function BookList() {
  const [selectedBook, setSelectedBook] = React.useState('');

  const { loading, data } = useQuery(getBooksQuery);

  return (
    <Container>
      <div>
        {loading ? (
          <Loading>loading</Loading>
        ) : (
          <List>
            <h1>List of Books</h1>
            {data.books.map((book) => {
              return (
                <li
                  onClick={(e) => {
                    setSelectedBook(book.id);
                  }}
                  key={book.id}
                >
                  {book.name}
                </li>
              );
            })}
          </List>
        )}
        <Controls>
          <BookAdder />
          <AuthorAdder />
        </Controls>
      </div>
      <BookDetails bookId={selectedBook} />
    </Container>
  );
}

export default BookList;

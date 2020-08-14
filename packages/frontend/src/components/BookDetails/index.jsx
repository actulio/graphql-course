import React from 'react';
import { useQuery, useMutation } from 'react-apollo';

import {
  getBookQuery,
  getBooksQuery,
  deleteBookMutation,
} from '../../queries/queries';
import {
  Container,
  DetailsCard,
  DetailsHeader,
  DetailsBody,
  ButtonContainer,
} from './styles';

function BookDetails({ bookId }) {
  const { data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  const [selectedBook, setSelectedBook] = React.useState(null);

  React.useEffect(() => {
    if (data) {
      setSelectedBook(data.book);
    }
  }, [data]);

  const [deleteBook] = useMutation(deleteBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });

  function deleteBookHandler() {
    deleteBook({ variables: { id: bookId } });
    setSelectedBook(null);
  }

  return (
    <Container>
      {!selectedBook ? (
        <h4>No book selected.</h4>
      ) : (
        <DetailsCard>
          <DetailsHeader>
            <p>{selectedBook.name}</p>
            <p>{selectedBook.author.name}</p>
            <p>{selectedBook.genre}</p>
          </DetailsHeader>

          <DetailsBody>
            <p>All books by this author:</p>
            <ul>
              {selectedBook.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </DetailsBody>
          <ButtonContainer onClick={deleteBookHandler}>
            Delete book
          </ButtonContainer>
        </DetailsCard>
      )}
    </Container>
  );
}

export default BookDetails;

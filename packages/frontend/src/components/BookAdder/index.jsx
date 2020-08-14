import React from 'react';
import { useQuery, useMutation } from 'react-apollo';

import {
  Container,
  InputContainer,
  ButtonContainer,
  ContainerLabel,
} from './styles';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../../queries/queries';

function BookAdder() {
  const [name, setName] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const [authorId, setAuthorId] = React.useState('');
  const formRef = React.useRef(null);

  const { loading: authorsLoading, data: authorsData } = useQuery(
    getAuthorsQuery
  );
  const [addBook] = useMutation(addBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });

  function submitForm(e) {
    e.preventDefault();
    if (name.length && genre.length && authorId.length) {
      addBook({ variables: { name, genre, authorId } });
      formRef.current.reset();
    } else {
      console.log('Validate Fields first.');
    }
  }

  return (
    <Container>
      <ContainerLabel>Add new book.</ContainerLabel>
      <form ref={formRef} onSubmit={submitForm}>
        <InputContainer>
          <label>Author: </label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option value="">Select Author</option>
            {!authorsLoading &&
              authorsData.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label>Book Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </InputContainer>

        <InputContainer>
          <label>Genre: </label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </InputContainer>

        <ButtonContainer type="submit">Add Book</ButtonContainer>
      </form>
    </Container>
  );
}

export default BookAdder;

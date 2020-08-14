import React from 'react';
import { useMutation } from 'react-apollo';

import {
  Container,
  InputContainer,
  ButtonContainer,
  ContainerLabel,
} from './styles';

import { getAuthorsQuery, addAuthorMutation } from '../../queries/queries';

function AuthorAdder() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(null);
  const formRef = React.useRef(null);

  const [addAuthor] = useMutation(addAuthorMutation, {
    refetchQueries: [{ query: getAuthorsQuery }],
  });

  function submitForm(e) {
    e.preventDefault();
    if (name.length && age.length) {
      addAuthor({ variables: { name, age: parseInt(age, 10) } });
      formRef.current.reset();
    } else {
      console.log('Validate Fields first.');
    }
  }

  return (
    <Container>
      <ContainerLabel>Add new author.</ContainerLabel>
      <form ref={formRef} onSubmit={submitForm}>
        <InputContainer>
          <label>Author Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </InputContainer>

        <InputContainer>
          <label>Age: </label>
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </InputContainer>

        <ButtonContainer type="submit">Add Author</ButtonContainer>
      </form>
    </Container>
  );
}

export default AuthorAdder;

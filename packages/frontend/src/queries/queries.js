import { gql } from 'apollo-boost';

export const getAuthorsQuery = gql`
  query {
    authors {
      id
      age
      name
    }
  }
`;
export const getBooksQuery = gql`
  query {
    books {
      id
      name
      genre
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        books {
          name
          id
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const deleteBookMutation = gql`
  mutation($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export const addAuthorMutation = gql`
  mutation($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`;

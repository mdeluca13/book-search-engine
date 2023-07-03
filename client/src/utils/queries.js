// Importing necessary files
import { gql } from '@apollo/client';

// Setting query for logged in user
export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;
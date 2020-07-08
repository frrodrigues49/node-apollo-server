const { ApolloServer, gql } = require('apollo-server');

const courses =[
  {
    title: 'React',
    author: 'Fagner',
    description: 'Um bom curso para se fazer',
    url: 'http://cursos.com/react'
  },
  {
    title: 'React Native',
    author: 'Fagner',
    description: 'Otimo para fazer aplicativos',
    url: 'http://cursos.com/react-native'
  },
  {
    title: 'Node',
    author: 'Fagner',
    description: 'Faça uma api rapida e eficaz',
    url: 'http://cursos.com/node'
  } 
];

const typeDefs = gql`
  type Course {
    title: String,
    author: String,
    description: String,
    url: String,
  }
  type Query {
    courses: [Course]
  }
`;

const resolvers = {
  Query: {
    courses: () => courses
  }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});

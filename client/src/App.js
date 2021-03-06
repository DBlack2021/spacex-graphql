import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto'}}/>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

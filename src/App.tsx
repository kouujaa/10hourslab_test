import './App.css';
import { ApolloProvider } from '@apollo/client'
import CallCenterController from './components/CallCenter/CallCenterController';
import apolloClient from './apollo'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
            {/* @ts-expect-error ts-migrate(2741) FIXME: Property 'setLink' is missing in type 'ApolloClien... Remove this comment to see the full error message */}
      <ApolloProvider client={apolloClient}>
      <CallCenterController /></ApolloProvider>
    </div>
  );
}

export default App;

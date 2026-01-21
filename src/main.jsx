import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
// import store from "./stores/Stores.js"
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ApolloClient,InMemoryCache,HttpLink} from "@apollo/client"
import {ApolloProvider} from  "@apollo/client/react"


const client=new ApolloClient({
  link:new HttpLink({uri:"https://countries.trevorblades.com"}),
  cache:new InMemoryCache(),
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter basename="/app">
  <ApolloProvider client={client}>
    <App/>
    </ApolloProvider>
</BrowserRouter>
  </StrictMode>,
);

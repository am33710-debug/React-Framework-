import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import { App } from './App';
import store from './store';

import { Cake } from './components/Cake';
import { Comments } from './components/Comments';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/cake' element={<Cake/>}/>
          <Route path='/comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>
)
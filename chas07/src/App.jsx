import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from './components/Navigation';

export function App() {
  return(
    <div id="app">
      <nav>
        <Navigation/>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
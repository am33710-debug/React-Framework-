import React from 'react';
import { Age } from './Age';
import { Address } from './Address';

export function App() {
  const user1 = {
    ime: "Andrej",
    prezime: "Micevski",
    adresa: "Skopje",
    godini: 19
  }

  const user2 = {
    ime: "Marko",
    prezime: "Petrov",
    adresa: "Bitola",
    godini: 16
  }

  const user3 = {
    ime: "Elena",
    prezime: "Stefanova",
    adresa: "Skopje",
    godini: 22
  }

  const user4 = {
    ime: "Sara",
    prezime: "Jovanova",
    adresa: "Ohrid",
    godini: 15
  }

  return(
    <div id="main-container">
      <Age 
        user1={user1}
        user2={user2}
        user3={user3}
        user4={user4}
      />

      <Address
        user1={user1}
        user2={user2}
        user3={user3}
        user4={user4}
      />
    </div>
  )
}
import { useState } from 'react'

import List from './Components/List'
import AddToList from './Components/AddToList'
// import Foods from './Components/Foods'

import './App.css'

export interface IState {
  people: {
    name: string,
    age: number,
    url?: string,
    note?: string // question mark can also be undefined
  }[] // array of objects
}

const App = () => {
        // HOVER               // HOVER
  const [animal, setAnimal] = useState([ // TS infers the data types in this array
    {
      type: 'dog',
      mammal: true,
      notes: 'fluffy'
    },
    {
      type: 'turtle',
      mammal: false
    }
  ])

  // HOVER
  animal.map(animal => {
    // animal. // HOVER, gives you only valid properties
    // animal.type = 2 // HOVER, cannot change the types here
    return console.log(animal)
  })
  //////////////////////////

  // const [person, setPerson] = useState<{name: string, age: number, url: string}>([]) // if you want to start with an empty array - define types manually
  const [people, setPeople] = useState<IState['people']>([ // use interface to define a complicated state instead of above
    {
      name: 'Harry Potter',
      age: 30,
      note: 'Boy wizard, maybe he can do some tricks?',
      url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?width=982&height=726&auto=webp&quality=75'
    }
  ])

  people.map(person => person.age) // type number but without interface it's type never (TS has no idea what that is if not defined)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>People Invited To My Party</h1>
        <List people={people} /> {/* we want to pass data down to let child render people/ passing props */}
        <AddToList setPeople={setPeople} people={people} />
        {/* <Foods people={people} /> Example of TS working with regular React and proptypes */}
      </header>
    </div>
  );
}

export default App;

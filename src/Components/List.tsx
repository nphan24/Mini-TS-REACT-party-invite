import React from 'react'

import './List.css'

interface ListIProps { // defined the props coming in
  people: {
    name: string,
    age: number,
    url?: string,
    note?: string
  }[]
}

// how we pass props with TS in React
// want to define types a function outputs
// React functional component that contains listProps
const List: React.FC<ListIProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => { // define the output
    return people.map(person => {
      return(
        <li className='listContainer' key={person.name}>
          <img src={person.url} alt={person.name} className='img' />
          <span>{person.name}</span>
          <span>{person.age}</span>
          <span>{person.note}</span>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()} {/* hover, returns jsx element not void */}
    </ul>
  )
}

export default List

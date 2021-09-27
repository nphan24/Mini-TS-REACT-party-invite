import { useState } from 'react'

import { IState as Iprops } from '../App' // can import other interfaces

import './AddToList.css'

interface AddToListProps {
  people: Iprops['people'];
  setPeople: React.Dispatch<React.SetStateAction<Iprops['people']>>, // identical to the bottom
//   setPeople: React.Dispatch<React.SetStateAction<{
//     name: string;
//     age: number;
//     url?: string | undefined;
//     note?: string | undefined;
// }[]>>
}

const AddToList: React.FC<AddToListProps> = ({ people, setPeople }) => {
  const [inputState, setInputState] = useState({
    name: '',
    age: '',
    url: '',
    note: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const { name, value } = event.target

    setInputState(inputState => ({
      ...inputState,
      [name]: value
    }))
  }

  const handleClick = (): void => { // void means there's no return value
    if (!inputState.name ||
        !inputState.age ||
        !inputState.url 
      ) {
        return
      }
    setPeople([...people, {
      name: inputState.name,
      age: parseInt(inputState.age),
      url: inputState.url,
      note: inputState.note
    }])
    setInputState({
      name: '',
      age: '',
      url: '',
      note: ''
    })
  }

  return (
    <div className='addToListContainer'>
      <input 
        type='text' 
        placeholder='Name' 
        name='name' 
        className='input'
        value={inputState.name}
        onChange={(handleChange)} // HOVER, tells you the type
      />
      <input 
        type='number' 
        placeholder='Age' 
        name='age' 
        className='input' 
        value={inputState.age}
        onChange={handleChange}
      />
      <input 
        type='text' 
        placeholder='Url' 
        name='url' 
        className='input'
        value={inputState.url}
        onChange={handleChange}
      />
      <textarea 
        placeholder='Note' 
        name='note' 
        className='input'
        value={inputState.note}
        onChange={handleChange} // HOVER, different HTML element
      />
      <button className='addbtn' onClick={handleClick}>Add to list</button>
    </div>
  )
}

export default AddToList

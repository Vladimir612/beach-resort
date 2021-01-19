import React, { useEffect } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'
//get all unique values

const getUnique = (array, value) => {
  return [...new Set(array.map((item) => item[value]))]
}
const RoomFilter = ({ rooms }) => {
  let {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = React.useContext(RoomContext)
  //get unique types

  let types = [...getUnique(rooms, 'type')]
  console.log(types)
  //add all
  types = ['all', ...types]
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/*select type*/}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end select type*/}
      </form>
    </section>
  )
}

export default RoomFilter

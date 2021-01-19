import React, { useState, useEffect } from 'react'
import items from './data'
const RoomContext = React.createContext()

const RoomProvider = ({ children }) => {
  const [resort, setResort] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //filter
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  })

  const FormatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)
      let room = { ...item.fields, images, id }
      return room
    })
    return tempItems
  }

  const getRoom = (slug) => {
    let tempRooms = [...resort.rooms]
    const room = tempRooms.find((room) => room.slug === slug)
    return room
  }

  const handleChange = (e) => {
    const target = e.target
    const value = e.type === 'checkbox' ? target.checked : target.value
    const name = e.target.name
    console.log(name, value)

    setResort(
      {
        [name]: value,
      },
      filterRooms
    )
  }

  const filterRooms = () => {
    console.log('hello there')
  }

  useEffect(() => {
    let rooms = FormatData(items)
    let featuredRooms = rooms.filter((room) => room.featured === true)

    let maxPrice = Math.max(
      ...rooms.map((room) => {
        return room.price
      })
    )
    let maxSize = Math.max(
      ...rooms.map((room) => {
        return room.size
      })
    )
    setResort({
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    })
  }, [])

  return (
    <RoomContext.Provider value={{ ...resort, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  )
}

const RoomConsumer = RoomContext.Consumer

//function so I don't have to use  RoomConsumer everywhere, I just called this funczion and my Component will be returned with it-s context
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext }

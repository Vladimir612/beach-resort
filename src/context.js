import React, { useState, useEffect } from 'react'
//import items from './data'
import Client from './Contentful'

const RoomContext = React.createContext()

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [sortedRooms, setSortedRooms] = useState([])
  const [featuredRooms, setFeaturedRooms] = useState([])
  const [loading, setLoading] = useState(true)
  //filter
  const [filter, setFilter] = useState({
    type: 'all',
    capacity: 1,
    minPrice: 0,
    minSize: 0,
    breakfast: false,
    pets: false,
    price: 0,
    maxPrice: 0,
    maxSize: 0,
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
    let tempRooms = [...rooms]
    const room = tempRooms.find((room) => room.slug === slug)
    return room
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = e.target.name

    setFilter({
      ...filter,
      [name]: value,
    })
  }

  useEffect(() => filterRooms(), [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const filterRooms = () => {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } = filter

    //all rooms
    let tempRooms = [...rooms]

    //transform value
    capacity = parseInt(capacity)
    price = parseInt(price)

    //filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => {
        return room.type === type
      })
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => {
        return room.capacity === capacity
      })
    }
    //filter by price
    tempRooms = tempRooms.filter((room) => {
      return room.price <= price
    })
    //filter by size
    tempRooms = tempRooms.filter((room) => {
      return room.size >= minSize && room.size <= maxSize
    })
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => {
        return room.breakfast === true
      })
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => {
        return room.pets === true
      })
    }
    //change state
    setSortedRooms(tempRooms)
  }
  const getData = async () => {
    try {
      //fetching the data from contentful
      let response = await Client.getEntries({
        content_type: 'beachResortRoom',
        order: '-fields.price',
      })

      let rooms = FormatData(response.items)
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
      setRooms(rooms)
      setSortedRooms(rooms)
      setFeaturedRooms(featuredRooms)
      setLoading(false)
      setFilter({
        ...filter,
        price: maxPrice,
        maxPrice: maxPrice,
        maxSize: maxSize,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getRoom,
        handleChange,
        ...filter,
      }}
    >
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

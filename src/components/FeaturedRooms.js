import React from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Title from './Title'

import Room from './Room'

const FeaturedRooms = () => {
  let { loading, featuredRooms } = React.useContext(RoomContext)
  featuredRooms = featuredRooms.map((featuredRoom) => {
    return <Room key={featuredRoom.id} featuredRoom={featuredRoom} />
  })

  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : featuredRooms}
      </div>
    </section>
  )
}

export default FeaturedRooms

import React from 'react'
// Components
import { Col } from 'react-bootstrap'
import Chat from '../components/Chat'
import FloatLogoutButton from '../components/FloatLogoutButton'

const Stream = () => {
  return (
    <div className='vh-100 d-flex' >
      <Col xs={8} >
        <p>Video stream</p>
      </Col>
      <Chat />
      <FloatLogoutButton />
    </div>
  )
}

export default Stream
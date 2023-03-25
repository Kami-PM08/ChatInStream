import React from 'react'
import PropTypes from 'prop-types';
// Components
import { Col } from 'react-bootstrap';


const ChatMessage = ({message, user}) => {
  return (
    <Col >
    </Col>
  )
}

ChatMessage.propTypes = {
    message: PropTypes.object,
    user: PropTypes.string
}

export default ChatMessage
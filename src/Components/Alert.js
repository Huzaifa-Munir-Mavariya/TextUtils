import React from 'react'

function Alert(props) {
  return (
    props.Alert && <div className="alert alert-success container alert-dismissible fade show" role="alert">
  <strong>{props.Alert.type}</strong>: {props.Alert.msg}
</div>
  )
}

export default Alert

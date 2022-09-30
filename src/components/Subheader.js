import React from 'react'

function formatName(user) {
    return user.user + ' ' + user.phrase;
  }
  
  const user = {
    user: 'stranger',
    phrase: 'login to proceed to dashboard!'
  };
  
  const element = (
   <div className='center ui'>
      <h1 className='main'>
        Hello, {formatName(user)}!  </h1>
   </div>
  )

  const Subheader = () => {
    return (
        <div className='ui container'>{element} </div>
    )
  }
  export default Subheader
  

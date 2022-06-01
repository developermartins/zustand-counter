import React from 'react'

const Form = () => {
  return (
    <div>
        <form  onSubmit={() => ({})}>
            <input type="text" name='user' placeholder='user' />
            <input type="text" name='email' placeholder='email' />
            <button type='submit'>Add user</button>
        </form>
    </div>
  )
}

export default Form
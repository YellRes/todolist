import React, { useState, useEffect } from 'react'

export default function Button() {
  const [count, setCount] = useState(0)

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on : ' + count)
    }, 3000)
  }

  useEffect(() => {
    document.title = '进化完成哦耶'
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me 
      </button>
      <button onClick={handleAlertClick}>
        show alert
      </button>
    </div>
  )
}
import React from 'react'

export default function HolidayInfo(props) {
  return (
    <div className='holiday-box box'>
      {console.log(props)}
      <h1>About {props.holiday[0].name}</h1>
      <h2>{props.holiday[0].name} is a {props.holiday[0].type[0]}.</h2>
    </div>
  )
}

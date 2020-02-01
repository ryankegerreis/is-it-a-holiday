import React from 'react'

import HolidayInfo from './HolidayInfo'

export default function Holiday(props) {
  return (
    <div>
      <div className='holiday-box'>
        <div className='box'>
          <h2>Yep Today's a Holiday!</h2>
          <h1>Today is {props.holiday[0].name}</h1>
        </div>
        <div className='box'>
          <svg className='svg' height="64" width="64"><g><path d="m28.345 41.676c-1.202 0-2.332-.469-3.182-1.318l-17.66-17.662c-1.754-1.754-1.754-4.609 0-6.363.85-.85 1.98-1.318 3.183-1.318s2.333.468 3.182 1.318l14.477 14.479 14.478-14.479c.85-.85 1.979-1.318 3.182-1.318s2.332.468 3.182 1.318c.851.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182l-17.659 17.658c-.851.853-1.982 1.321-3.183 1.321zm-17.659-24.661c-.668 0-1.296.26-1.769.732-.975.975-.975 2.561 0 3.535l17.66 17.661c.936.936 2.557.948 3.504.029l17.69-17.69c.473-.473.732-1.1.732-1.768s-.26-1.295-.732-1.768c-.945-.944-2.59-.944-3.535 0l-15.891 15.894-15.891-15.893c-.473-.472-1.1-.732-1.768-.732z" /></g></svg>
        </div>
      </div>
      <HolidayInfo {...props} />
    </div>
  )
}

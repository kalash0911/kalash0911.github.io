import React from 'react'

export const Field = ({ label, registerLabel, register }) => {
  return (
    <div className='field'>
        <label>
            {label}
            <input type="text" {...register(registerLabel)}/>
        </label>
    </div>
  )
}

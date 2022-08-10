import React from 'react'

export const ProgressBar = ({label, current, length, lengthLabel}) => {
    const curentPercents = current / length * 100 + '%';
  return (
    <div className="progress-wrap">
        <div className="progress-heading">
            <span className="counter">
            {current} / {length} {lengthLabel}
            </span>
            <span className="test-name">{label}</span>
        </div>
        <div className="progress-bar">
            <div className="progress-line" style={{width: curentPercents}}/>
        </div>
    </div>
  )
}

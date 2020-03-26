import React from 'react'
import PropTypes from 'prop-types'

import {Info} from 'react-feather'
import colors from '../styles/colors'

const Counter = ({value, label, color, previousValue, details}) => {
  const difference = (Number.isInteger(value) && Number.isInteger(previousValue) && value - previousValue !== 0) ? value - previousValue : null

  return (
    <div className='counter-container'>
      <div className='counter'>
        <div className='value'>
          {typeof value === 'number' ? value : '?'}
          <div className='hover'>
            <Info size={12} style={{position: 'inherit'}} />
            {details && (
              <span>
                <p>
                  {details}
                </p>
              </span>
            )}
          </div>
        </div>
        {difference && (
          <div className='difference'>
            ( {Math.sign(difference) === 1 ? '+' : ''}{difference} )
          </div>
        )}
        <div>{label}</div>
      </div>

      <style jsx>{`
        .hover {
          display: flex;
          flex-direction: column;
        }

        span {
          visibility: hidden;
          font-size: .5em;
          font-weight: lighter;
          background-color: #000000aa;
          color: ${colors.white};
          position: absolute;
          margin: 1em;
          padding: 0em .8em;
          border-radius: 5px;
        }

        .hover:hover span {
          visibility: visible;
          color: white;
        }

        .counter {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: center;
          margin: 1em 0;
          color: ${colors[color]};
        }

        .counter-container {
          background-color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .difference {
          font-size: small;
          font-style: italic;
        }

        .value {
          font-size: xx-large;
          font-weight: bold;
          margin-right: -12px;
          display: flex;
          justify-content: center;
          flex-direction: row;
        }
        `}</style>
    </div>
  )
}

Counter.defaultProps = {
  value: null,
  label: null,
  color: 'almostBlack',
  previousValue: null,
  details: null
}

Counter.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  previousValue: PropTypes.number,
  details: PropTypes.string
}

export default Counter

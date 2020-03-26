import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const Counters = ({report, previousReport}) => {
  const {casConfirmes, hospitalises, reanimation, deces, gueris} = report || {}

  return (
    <div className='stats'>
      <div className='counters'>
        <Counter value={gueris} previousValue={previousReport.gueris} label='retours à domicile' details='Nombre de Retours à domicile' color='green' />
        <Counter value={deces} previousValue={previousReport.deces} label='décès' details='Nombre de décés' color='red' />
        <Counter value={hospitalises} previousValue={previousReport.hospitalises} label='hospitalisations' details='Nombre d’hospitalisation' color='darkGrey' />
        <Counter value={reanimation} previousValue={previousReport.reanimation} label='en réanimation' details='Nombre d’entrées en réanimation' color='darkerGrey' />
      </div>
      <Counter value={casConfirmes} previousValue={previousReport.casConfirmes} label='cas confirmés' color='orange' />
      <style jsx>{`
        .counters {
          background-color: whitesmoke;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  )
}

Counters.defaultProps = {
  report: {},
  previousReport: {}
}

Counters.propTypes = {
  report: PropTypes.object,
  previousReport: PropTypes.object
}

export default Counters

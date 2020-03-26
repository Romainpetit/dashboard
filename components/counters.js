import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const Counters = ({report, previousReport}) => {
  const {casConfirmes, hospitalises, reanimation, deces, gueris} = report || {}
  const details = {
    casConfirmes: 'Nombre de cas de COVID-19 confirmés par un test positif. Ce chiffre est bien en deça du nombre probable de cas de COVID-19 puisque la stratégie sanitaire actuelle est de ne tester que les cas les plus inquiétants. Un nouvel indicateur plus pertinent sera bientôt proposé.',
    gueris: 'Nombre de personnes ayant été hospitalisées pour COVID-19 et de retour à domicile en raison de l’amélioration de leur état de santé',
    deces: 'Nombre de personnes atteintes de COVID-19 décédées à l’hôpital',
    hospitalises: 'Nombre de patients hospitalisés pour COVID-19',
    reanimation: ' Nombre de patients hospitalisés pour COVID-19 et nécessitant une assistance respiratoire'
  }

  return (
    <div className='stats'>
      <div className='counters'>
        <Counter value={gueris} previousValue={previousReport.gueris} label='retours à domicile' details={details.gueris} color='green' />
        <Counter value={deces} previousValue={previousReport.deces} label='décès' details={details.deces} color='red' />
        <Counter value={hospitalises} previousValue={previousReport.hospitalises} label='hospitalisations' details={details.hospitalises} color='darkGrey' />
        <Counter value={reanimation} previousValue={previousReport.reanimation} label='en réanimation' details={details.reanimation} color='darkerGrey' />
      </div>
      <Counter value={casConfirmes} previousValue={previousReport.casConfirmes} label='cas confirmés' details={details.casConfirmes} color='orange' />
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

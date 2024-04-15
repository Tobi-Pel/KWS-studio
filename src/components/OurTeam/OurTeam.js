import React from 'react'
import style from './OurTeam.module.css'
import Adilet from '../../assets/team-item/Adilet.png'
import Bekbolot from '../../assets/team-item/Bekbolot.png'
import Aytegin from '../../assets/team-item/Aytegin.png'

const OurTeam = () => {
  return (
    <div className={style.OurTeam}>
        <h1 className={style.H1}>Наша команда</h1>
        <div className={style.collector}>
            <img className={style.card} src={Adilet}/>
            <img className={style.card} src={Bekbolot}/>
            <img className={style.card} src={Aytegin}/>
        </div>
    </div> 
  )
}

export default OurTeam

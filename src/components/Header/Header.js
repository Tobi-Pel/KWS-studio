import React from 'react'
import style from './Header.module.css'

const header = () => {
  return (
    <div className={style.Header}>
      <img 
        src={'https://s3-alpha-sig.figma.com/img/0737/203c/c35724fa8f6701bfcaf1f4fac3d4d9f1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgJldEkcTC2OsJB1vcR62ZWnvDCdK3EOwNv5UtD-mRkl1TLHOEXBRxAnbeLZjZXtu1PyO5gs6xSipBfL5yTSG2IgpId2s8r5ql7ygc1f1TGYm0uyEOJtIryqmdndDnc7gFzxVXhfjfMUFMDTeDoz9cNzUDtvYdJmfHOXTukkybXcTuF9a4zOeAX~GJK-0uDoimHL58bscW3L3RpEIFp~YRBNIEtFevazkNberSIKlOZ6AWSAQA-00rDUSVL5iuLXHTq2XeDVs6LvzIZGdCOeAfCpwxqzj77Ig4uRelOVMjmnUtbhTtJBhlNbwxgAhqyZZI5ZkQa1a2V3VxBjPtBfTQ__'}
        className={style.image}
      />
      <div className={style.Navbar}>
          <a href={'#'} className={style.a}>Главная</a>
          <a href={'#'} className={style.a}>О нас</a>
          <a href={'#'} className={style.a}>Как мы работаем</a>
          <a href={'#'} className={style.a}>Цены</a>
          <a href={'#'} className={style.a}>Контакты</a>
      </div>
    </div>
  )
}

export default header

import React, { useState } from 'react'
import style from './HowSection.module.css'
import ItemWithArrow from './ItemWithArrow/ItemWithArrow';

const HowSection = () => {
    const itemInfo = [
        {
            url: 'https://s3-alpha-sig.figma.com/img/890b/0675/a76171f48e18d5cd3baa019f0647d5ad?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSgWSfOuKphWG0VP8H~yc~rmcPOGRTFmW91vuZzpqwpps8p8kXMg4vHWPHmgUiRRT5C8xWtmUbbWWaUrNkkzPQlY5rCYwxDrX-lBeY8gEwdRrh2cF8R7cffdvnZD~PSbV9zNzJL10Vv3II2p11hi7XqaYmKFR6UsW1kdWUF2LuVzyKOR0SacJ8FsmP1QiINy6Dw5TQaX~VeKKdo9bfHq7dKX6tgXchUomtKj5gMJ-2A9aVW~Q0mjNwcPqgCmoiv6iyWzNjl27aOSsMXuFG1UpLPOA5-SHj3DkZ4lvrtuW0bUFlK1qHo-A4sSoEU0pL~0kr5eu3YuSbDshwFJ4V-EPg__',
            description: 'После заключения договора с Вами, мы приступаем к разработке прототипов и блок схем, и далее - дизайна. После мы отправляем дизайн Вам на утверждение. Если он вам понравится - двигаемся дальше, если нет - то вносим корректировки или переделываем его по-другому.' , 
            header: 'ПРОТОТИП' ,
            index: 0
        } 
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/e009/8228/3d3f1f4dbcebf8f552dfe5b3d6bd211d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZ5gBd71vWYJ4skSu8WQnRkSTOc8a6VI5QJAeF2zb8feqqJnWgkfY-YkHgRFgeEMeXpQtOnd7ZkTaA4E-BuxCPCNNzwvpeGutXVd3H7oKxEbj8Y92aZoRc-pZhDRgGW60~Rrm6xtfc7Oo1va0HIlmXqhGJFPMPAO2NST5znBaCpbI5HUiEjSpMJkVcckBNqMcMBWEcQCqeI8aGwBCVUS9gXEkLAtkSnjqnCsd5R3OHTXWEgk~2IgpoxdcYMHEePPwoWa5qsCIlT1X-zbf~4vBQwSsIdxrQx~Z-IEX7P-FCagXZTaJpmbfBpfvn~tA99odrzk1HHT3a1~bgQey1OEyg__' , 
            description: 'После того, как мы утвердим дизайн с Вами, мы приступаем к разработке сайта на основе данного дизайна' , 
            header: 'РАЗРАБОТКА' ,
            index: 1
        } 
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/b524/b994/a310d5baf60f3149fde5bcad9f79a932?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpRAYN7e19a0zYrD0Gsq9lgZedWLNfCcfzU9D-Cic~GCjc4RnpKPqa8cXp9ADbcf6Go~wj-j0stl5coCEyJtOaWdYVk6fkfyfAYwdmF8HjCWE-j4oeJyohmZWhvLLJIXv9fsR3U0bI2oiLYg6pay850-W7OQnkS47T54rhqafiauNXFwxk30zy4oacD5XqiZlv4ojdt17EE1BXM9U32rBNc6z2d3Wi8MIeI6Vz6DWvJYOKCost7etS2declHgDyavADMBTAGoMc5MiAaY0rMCtvu2PhexVKPp36WGTwHXrDSIogPMyUhGEr-mRJ8IMo2TfI~kUKMEELnPHOOi8JxMQ__',
            description: 'После завершения процесса разработки, мы тестируем сайт от А до Я на всех устройствах и во всех популярных браузерах.' ,
            header: 'ТЕСТ' ,
            index: 2
        }
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/8400/34bb/36d9d045768b4bb1cbba45c8a122ea80?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Be5SlHhnE3yny6VE-~CQgNn7CpTAocfF5FgLZFeZqBpl9BeF2XLFp5u2nbaF66Sp-vUuFa60SWRztwjqPgWhV1cvnSKobPyE-oZ-Z0J6AAddy39mUVSHWq~gOExsHfspFy79p30aR4Pi3SbugEzLL1UbqEcD2QN2dHXXVnTJyldjU7-RjNU5jyE3I3FnONZh0krslix6WyEAI2nRZdOo~iTKxyV8qF-knBBmYxIDG9qdiS9ewISKm8N6hC4YEja0ze-Kfw2KYyRZ8WxCfOzaDrUEkDCWWbQz8Y2wcWr3~od9ITYGZdgY1fF-bLwyXpf5zjn0HGcwvC-HN8yLw~pjiw__', 
            description: 'Проект разработан и протестирован! Пора запускаться и громко объявлять о запуске!' ,
            header: 'ЗАПУСК' ,
            index: 3
        }
    ]

    const [currentId , setCurrentId] = useState(0);

  return (
    <div className={style.HowSection}>
      <h1 className={style.H1}>Как мы работаем</h1>
      <h3 className={style.H3}>Обычно процесс разработки делится на 4 этапа</h3>
      <div className={style.collector1}>
        {itemInfo.map(item => (
            <ItemWithArrow 
                src={item.url} 
                text={item.header} 
                clicked={currentId === item.index ? 1 : 0}
                onClick={()=>{
                  setCurrentId(item.index); 
                }}
            />
        ))}
      </div>
      <div className={style.collector2}>
        {itemInfo[currentId].description}
      </div>
    </div>
  )
}

export default HowSection

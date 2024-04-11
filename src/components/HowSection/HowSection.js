import React, { useState } from 'react'
import style from './HowSection.module.css'
import ItemWithArrow from './ItemWithArrow/ItemWithArrow';

const HowSection = () => {
    const itemInfo = [
        {
            url: 'https://s3-alpha-sig.figma.com/img/890b/0675/a76171f48e18d5cd3baa019f0647d5ad?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~ZlXDYm9CR4koROCpW3-~zLrZy9t392dDV8EnVEU1ZsJSHjA3otIG5SQgtgBPRLewhY~TUCPvkJZsOUCnNcoWVH78O9TM3GPPTHQ4H2YtWx886hU6afmJd~EgAcYPW5W1SQ7OJLemgO8kcV2EOaznXqVbOVyywNSos9sVhziC~XZcS7ICa~6DMSIVRU-qkAuk3PU98bbfoMo-QJubTX9KwoQhyqsQirDTTsWm-FCby3PUrMuZUTwbCNjuX1fBoLpx5cYFfubrIxYa3YzvnMPWfK7keNwqZ4nh~tNAGEOh4GxwXL1I0FaMqTXQ~Uaet38VFa5p96v~KuQPLPtkzPLw__',
            description: 'После заключения договора с Вами, мы приступаем к разработке прототипов и блок схем, и далее - дизайна. После мы отправляем дизайн Вам на утверждение. Если он вам понравится - двигаемся дальше, если нет - то вносим корректировки или переделываем его по-другому.' , 
            header: 'ПРОТОТИП' ,
            index: 0
        } 
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/e009/8228/3d3f1f4dbcebf8f552dfe5b3d6bd211d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1x5Q-9LJjxEMFASKBz3Y145AjTkcGtcHh9NtpyT46U8fWpmCtMDTnonDFlnhtci9AFOBQ-egVNpEY3TU4~3AXGMPdp~YXh9wSPvUZAhHp9ZcjPU26xBQ0KkiWbLzyzutakz9W~Ozg~3OPa-adNBcoDKiXSy0cUjtxr7JH73pThshr6mJJ6KGFY-~G94Wr03IokkhUZZnyJ9IsV7xy~iXN1tbX1NHJHBic8URwxyJYlHHWKYH1c16aYA54lDJSOcVhhGxS9kCjnluW0eF6aE0IKS~dQosmSdDaaLegDvKL0-swwjF~IFC8M0~1tlPGemdhxlvB72BBEm86DCAXIK4g__' , 
            description: 'После того, как мы утвердим дизайн с Вами, мы приступаем к разработке сайта на основе данного дизайна' , 
            header: 'РАЗРАБОТКА' ,
            index: 1
        } 
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/b524/b994/a310d5baf60f3149fde5bcad9f79a932?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pi2iVj7CUY5TRi3eA6SGnXPpBEtpUqKB~cUahogYRXXSxKSyv5WPt9Zp7LJoiNIWllFh3tuv8Ey0FP74VtPj1zQY8ohJrgI7zbJxJuYQIyUsJKMCT322hy35pEXXNmDp9jvD~5lnPPOniA4fd8w6h4A80ceomFoDPwSncu7i6SKe5iOEegt~UE~QMKYnh83MwY8nHPpCD7D~4-SH61zWftuQlNhlpVbfscwcJ7I619Jly43awGNVVYlhxy68HNjigtCUcO61bAY5B5bIgrW9I6mc6WW2200DwGv5h9o38PpuyuKPw-mkS-O0ucfoePmI86OnJL5~vyBY-QB8CiLDuw__',
            description: 'После завершения процесса разработки, мы тестируем сайт от А до Я на всех устройствах и во всех популярных браузерах.' ,
            header: 'ТЕСТ' ,
            index: 2
        }
        ,
        {
            url: 'https://s3-alpha-sig.figma.com/img/8400/34bb/36d9d045768b4bb1cbba45c8a122ea80?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7xMphRyNCGr0F-ssJfF23vQIMz4sWrgfgpbH7ZorXp51hVTk6kb2jRo7ThxD3AxdWNXJPvSHzdHz7ZVHPr~d7Yyp83qDteaeR~5l~5hDYyN6lwy72-rUFxVSwzSyCrvbTGwhbwtPcQVjuR~b62AcB8-YQHLew2T8hiI4vDwFHd8vCSQw18ZEtwNmQjBv11MN0dEaCHRSEPEJ9QAsFuz-bIliLj-imdjSshnb603bMRsygvMI8UoEn1O4mURgofCJQd303m41u2ORWvS26jJzD-uP3FeO44r7ri8tuMyFBbsUDh95oEaaAMy1wUkG4u2-XSxIDNJmWbCoCoO013TmQ__', 
            description: 'Проект разработан и протестирован! Пора запускаться и громко объявлять о запуске!' ,
            header: 'ЗАПУСК' ,
            index: 3
        }
    ]

    const currentId = useState(0);

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
            />
        ))}
      </div>
    </div>
  )
}

export default HowSection

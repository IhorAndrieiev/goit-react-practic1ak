import React from 'react';
import Button from '../_share/Button/Button';
import css from './MainInfo.module.css';

const MainInfo = ({
    dataMainInfo,
    title,
    btnTitle,
    transType,
    handleOpenTransaction
}) => {

    const cbOnClick = () => handleOpenTransaction(transType);
    
    return (
        <section className={css.container}>
            <h2>
         {title} 
            </h2>
            <p>UAH</p>
            <ul>
                {dataMainInfo.map((el) => (
                    <li key={el.period}>
                        <span>{el.period}</span>
                        <span>{el.total}</span>
                    </li>
                ))}
            </ul>
            <Button title={btnTitle} cbOnClick={cbOnClick} />
        </section>
    )
}

// const MainInfo = ({
//     title,
//     currency = 'UAH',
//     dataInfo,
//     transType,
//     handleOpenTransaction }) => {
//     return (
//         <section className={css.container}>
//             <h2>{ title}</h2>
//             <button onClick={()=>handleOpenTransaction(transType)}>Add</button>
//             <span>{currency}</span>
//             <ul>
//                 {dataInfo &&
//                     dataInfo.map((el) => (
//                      <li key={el.period}>
//                          <span>{el.period}</span>
//                          <span>{el.total}</span>
//                     </li>
//                  ))}
//             </ul>
//         </section>
//     )
// }

export default MainInfo


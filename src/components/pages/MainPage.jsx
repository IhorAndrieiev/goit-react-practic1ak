import MainInfo from '../MainInfo/MainInfo';
import Button from '../_share/Button/Button';
import Section from '../_share/Section/Section';
import mainInfoData from '../../assets/mainInfoData.json';

const {costsMainInfo, incomesMainInfo, balanceMainInfo
} = mainInfoData

const MainPage = ({ handleOpenTransaction }) => {
    return <Section>
        <h1>Журнал расходов-Expense journal</h1>
        <MainInfo 
            btnTitle={"Add"} 
            title="Расходы-Costs" 
            dataMainInfo={costsMainInfo}
            transType="costs"
            handleOpenTransaction={handleOpenTransaction}
        />

        <MainInfo 
            btnTitle={"Add"}
            title="Доходы-Incomes" 
            dataMainInfo={incomesMainInfo}
            transType="incomes"
            handleOpenTransaction={handleOpenTransaction}
        />

        <MainInfo 
            btnTitle={"ShowBalance"} 
            title="Баланс-Balance" 
            dataMainInfo={balanceMainInfo}
        />
        
        <Button title={ "Все расходы"} />
        <Button title={ "Все доходы"}/>
        </Section>
    
};
// const { balanceInfoData, costsInfoData, incomesInfoData } = mainInfoData;

// const MainPage = ({handleOpenTransaction}) => {
//     return (
//         <Section>
//             <h1>Журнал расходов</h1>
//             <MainInfo
//                 transType="costs"
//                 title="Расходы" 
//                 currency="UAH"
//                 dataInfo={costsInfoData}
//                 handleOpenTransaction={handleOpenTransaction}
//             />
//             <MainInfo
//                 transType="incomes"
//                 title="Доходы" 
//                 currency="UAH"
//                 dataInfo={incomesInfoData}
//                 handleOpenTransaction={handleOpenTransaction}
//             />
//             <MainInfo title="Баланс" currency="UAH" dataInfo={balanceInfoData}
//             />
//             <Button title= "Все доходы" />
//             <Button title= "Все расходы" />
//         </Section>
//     )
//  }

export default MainPage;
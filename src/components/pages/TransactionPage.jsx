import React from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionHeader from '../TransactionHeader/TransactionHeader';
import Section from '../_share/Section/Section';

const TransactionPage = ({transType, handleCloseTransaction}) => {
   
    const postTransaction = (transaction) => {
        const dataFormLocStor = localStorage.getItem(transType);
        const data = !dataFormLocStor ? [] : JSON.parse(dataFormLocStor);
        const dataToLocStor = [...data, transaction];
        localStorage.setItem(transType, JSON.stringify(dataToLocStor));
        handleCloseTransaction();
    }

    // const handlePostDataForm = (dataForm) => {
    //     const prevData = localStorage.getItem(transType);
    //     const parsePrevData = JSON.parse(prevData);
    //     const dataToLocStor = parsePrevData ? [...parsePrevData, dataForm] : [dataForm];
    //     localStorage.setItem(transType, JSON.stringify(dataToLocStor));
    //     handleCloseTransaction();
    // };

    return (
        <Section>
            <h1>TransactionPage</h1>
            <TransactionHeader
                // title={transType=== "costs" ? "Расходы" : "Доходы"}
                transTitle={transType === "costs" ? "Расходы" : "Доходы"}
                handleCloseTransaction={handleCloseTransaction}
            />
            <TransactionForm
                postTransaction={postTransaction}
                
            />
            {/* <TransactionForm handlePostDataForm={handlePostDataForm} /> */}
        </Section>
            
        
    );
}; 

export default TransactionPage;
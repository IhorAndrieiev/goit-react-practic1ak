import React, { Component } from 'react'
import Button from '../_share/Button/Button';
import LabelInput from '../_share/LabelInput/LabelInput';


export default class TransactionForm extends Component {

    state = {
        date: "",
        time: "",
        category: "",
        sum: "",
        currency: "",
        comment: "",
    };

    handleDataChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.postTransaction(this.state);
        //  this.props.handlePostDataForm(this.state);
  };
    
    render() {
        //const { date, time, category, sum, currency, comment } = this.state;
        const {date,time,sum,comment } = this.state;
        return (
        <form onSubmit={this.handleFormSubmit} >
            <Button title="Ok" type="submit" />
            <LabelInput
                cbOnChange={this.handleDataChange} 
                type="date" 
                title="День" 
                name="date" 
                value={date}
                />
            <LabelInput 
                cbOnChange={this.handleDataChange} 
                type="time" 
                title="Время" 
                name="time" 
                value={time}
                />
            <LabelInput 
                cbOnChange={this.handleDataChange} 
                type="button" 
                title="Категория" 
                name="category"
                value="Eat"
                />
            <LabelInput 
                cbOnChange={this.handleDataChange} 
                title="Сумма"
                name="sum"
                value={sum} 
                placeholder="Введите сумму" 
                />
            <LabelInput 
                cbOnChange={this.handleDataChange} 
                type="button" 
                title="Валюта" 
                name="currency" 
                value="UAH"
                />
            <LabelInput 
                cbOnChange={this.handleDataChange} 
                title="Комментарий" 
                name="comment" 
                value={comment}
                placeholder="Комментарий" 
                /> 
        </form>
        )
    }
}

// const TransactionForm = () => {
//     return (
//         <form>
//             <LabelInput type="date" title="День" name="date" value="" />
//             <LabelInput type="time" title="Время" name="time" value="" />
//             <LabelInput type="button" title="Категория" name="category" value="" />
//             <LabelInput title="Сумма" name="sum" value="" placeholder="Введите сумму" />
//             <LabelInput type="button" title="Валюта" name="currency" value="" />
//             <LabelInput title="Комментарий" name="comment" value="" placeholder="Комментарий" /> 
//         </form>
//     );
// };

// export default TransactionForm;
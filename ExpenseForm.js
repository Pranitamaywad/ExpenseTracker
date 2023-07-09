import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredtitle,setenteredtitle] = useState('');
    const [enteredamount,setenteredamount] = useState('');
    const [entereddate,setentereddate] = useState('');
    
    const TitleChangeHandler=(event)=>{
        setenteredtitle(event.target.value)
    }
    const AmountChangeHandler=(event)=>{
        setenteredamount(event.target.value)
    }
    const DateChangeHandler=(event)=>{
        setentereddate(event.target.value)
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        
        const expenseData={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date (entereddate)
        };
        props.bringdata( expenseData);
        setenteredamount('');
        setenteredtitle('');
        setentereddate('');
    };

    return(
      <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={TitleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredamount} onChange={AmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" value={entereddate} onChange={DateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    )
}
export default ExpenseForm;
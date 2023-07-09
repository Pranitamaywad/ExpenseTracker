import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const bringexpensedata=(entereddata)=>{
        const expensedata={
            ...entereddata,
            id :Math.random().toString()
        }    
    props && props.onaddexpense(expensedata);
    };
    return(
        <div className="new-expense">
            <ExpenseForm bringdata={bringexpensedata}/>
        </div>
    )
 }
 export default NewExpense;
import './expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses =(props)=>{
    
    return(
        <div className='expenses'>
            {
              
                props.item.map(
                    expense=>(
                        <ExpenseItem 
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}/>
                    )
                )
            }
       </div>
    );
}
export default Expenses;
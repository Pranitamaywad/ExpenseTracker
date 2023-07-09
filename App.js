import { useState,useEffect } from "react";
import Expenses from "./Components/expenses";
import NewExpense from "./Components/NewExpenses";
import axios from "axios";


let expense = [
  { 
    id:'e1',
    title:'School fee',
    amount:1500,
    date:new Date(2022,6,4)
  }
];

const App=()=>{
  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata=()=>{
    axios.get('http://localhost:4000/api/user/').then(
      res=>
        {
          console.log(res);
          //setexpenses(res.data);
        })
      .catch(err=>console.log(err));
  };

  const [expenses, setexpenses]= useState(expense);
  
  const addexpensehandler = (expense)=>{
    const updaatedata = [expense,...expenses];
    setexpenses(updaatedata)
      axios.post('http://localhost:4000/api/user/',{
        title:expense.title,
        amount:expense.amount,
        date:expense.date
      }).then((res)=>{
        console.log(res)
        fetchdata();
      })
      .catch(err=>console.log(err));
    }

  return(
  <div>
       <NewExpense onaddexpense={addexpensehandler}/>
     <Expenses item = {expenses}/>
   
  </div>
  );
}
export default App;
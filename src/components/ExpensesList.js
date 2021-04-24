import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props) {
    return (
        <div className="expenses-list">
            {props.expenses.map(item => 
              <div>
              <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
              </div>                
          )}
        </div>
    );
}

export default ExpensesList;
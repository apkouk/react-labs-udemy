import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    return (
        props.expenses.map(item =>
            <div className="expenses-list">
                <ExpenseItem className="expense-item" key={item.id} value={item} title={item.title} amount={item.amount} date={item.date} />
            </div>
        ));
}

export default ExpensesList;
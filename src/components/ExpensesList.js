import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props) {
    return (
        <div className="expenses-list"> {
            props.expenses.map(item =>
                <ExpenseItem key={item.id} value={item} title={item.title} amount={item.amount} date={item.date} />
            )};
        </div>
    );
}

export default ExpensesList;
import './ExpenseItem.css';
import Card from '../Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
function ExpenseItem(props)
{
    return(
        <Card className="expense-item">
            <ExpenseDate date= {props.date}/>
            <div className="expense-desc">
                <h2 className="expense-title"> {props.title}</h2>
                <div className="expense-amt"> ${props.amount} </div>
            </div>
        </Card>
    );
}
export default ExpenseItem;
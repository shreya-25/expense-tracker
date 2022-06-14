import './ExpenseDate.css';
function ExpenseDate(props)
{
    //const ExpenseDate = new Date(2021, 2 , 28); 
    // 2 signify march month
    return(
            <div className="expense-date"> 
            <div className="month">{props.date.toLocaleString('en-US', {month:'long'})}</div>
            <div className="year">{props.date.getFullYear()}</div>
            <div className="date">{props.date.toLocaleString('en-US', {day:'2-digit'})}</div>
            </div>
    );
}
export default ExpenseDate;
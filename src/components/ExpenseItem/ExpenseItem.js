import './ExpenseItem.css';
function ExpenseItem()
{
    return(
        <div className="expense-item">
            <div className="expense-date"> March 27 2022</div>
            <div className="expense-desc">
                <h2 className="expense-title"> Car Insurance</h2>
                <div className="expense-amt"> $478.87</div>
            </div>
        </div>
    );
}
export default ExpenseItem;
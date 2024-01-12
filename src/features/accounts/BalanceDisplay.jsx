import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className='balance'>{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  // receives state from store
  // return object in which we can define the name of the prop that our component should receive

  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);

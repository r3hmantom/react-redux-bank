const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      else
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
        };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

function deposit(amount, currency) {
  if (currency == "USD") return { type: "account/deposit", payload: amount };
  else
    return async function (dispatch, getState) {
      dispatch({ type: "account/convertingCurrency", payload: true });
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await response.json();
      const converted = data.rates.USD;
      dispatch({ type: "account/deposit", payload: converted });
    };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}

export { deposit, withdraw, requestLoan, payLoan };

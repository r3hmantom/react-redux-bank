import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const depositAsync = createAsyncThunk(
  "account/deposit",
  async (params, { dispatch, getState }) => {
    const { amount, currency } = params;

    if (currency == "USD") return amount;
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const convertedAmount = data.rates.USD;

    return convertedAmount;
  }
);
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(purpose, amount) {
        return {
          payload: { purpose, amount },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },

    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertCurrency(state) {
      state.isLoading = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(depositAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(depositAsync.fulfilled, (state, action) => {
        state.balance += action.payload;
        state.isLoading = false;
        console.log("fulfilled");
      })
      .addCase(depositAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      });
  },
});

export default accountSlice.reducer;
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

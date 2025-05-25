export const useTransactionStore = defineStore("transaction", () => {
  const transactions = ref([]);
  const category = ref("");
  const date = ref(new Date().toISOString().split("T")[0]);
  const amount = ref(0);

  const addTransaction = (newTransaction) => {
    transactions.value.push(newTransaction);
  };

  return { transactions, category, date, amount, addTransaction };
});

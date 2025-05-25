<template>
  <UContainer>
    <UForm :state="storeTransact" @submit="onSubmit">
      <UCard class="mb-4">
        <template #header>
          <p class="text-xl font-bold">Add Transaction</p>
        </template>
        <UFormField label="Category">
          <USelect v-model="storeTransact.category" :items="items" placeholder="Select category" class="w-40" />
        </UFormField>
        <UFormField label="Date">
          <UInput v-model="storeTransact.date" type="date" class="w-40" />
        </UFormField>
        <UFormField label="Amount">
          <UInput v-model="storeTransact.amount" type="number" class="w-40" />
        </UFormField>
        <template #footer>
          <UButton label="Submit" type="submit" />
          <UButton label="Reset" color="neutral" @click="onReset" />
        </template>
      </UCard>
    </UForm>

    <UCard>
      <template #header>
        <p class="text-xl font-bold">Transactions</p>
      </template>
      <div class="overflow-x-auto">
        <table class="w-full ">
          <thead>
            <tr class="bg-neutral">
              <th class="px-4 py-2 text-left">Category</th>
              <th class="px-4 py-2 text-left">Date</th>
              <th class="px-4 py-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in storeTransact.transactions" :key="index" class="border-b">
              <td class="px-4 py-2">{{ transaction.category }}</td>
              <td class="px-4 py-2">{{ transaction.date }}</td>
              <td class="px-4 py-2">RM{{ transaction.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
const storeTransact = useTransactionStore();

const items = ref([
  'Food & Drinks', 'Shop', 'House', 'Transportation', 'Vehicle',
  'Life', 'Phone & PC', 'Finance', 'Savings', 'Income', 'Others'
]);

const onSubmit = () => {
  storeTransact.addTransaction({
    category: storeTransact.category,
    date: storeTransact.date,
    amount: storeTransact.amount
  });
};

const onReset = () => {
  storeTransact.category = "";
  storeTransact.date = undefined;
  storeTransact.amount = 0;
};
</script>
<template>
  <UContainer>
    <UForm :state="state" @submit="onSubmit">
      <UCard class="mb-4">
        <template #header>
          <p class="text-xl font-bold">Add Transaction</p>
        </template>
        <UFormField label="Category">
          <USelect v-model="state.category" :items="items" placeholder="Select category" class="w-40" />
        </UFormField>
        <UFormField label="Date">
          <UInput v-model="state.date" type="date" class="w-40" />
        </UFormField>
        <UFormField label="Amount">
          <UInput v-model="state.amount" type="number" class="w-40" />
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
      <!-- <div class="overflow-x-auto">
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
      </div> -->
    </UCard>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: ['auth']
});

const items = ref([
  'Food & Drinks', 'Shop', 'House', 'Transportation', 'Vehicle',
  'Life', 'Phone & PC', 'Finance', 'Savings', 'Income', 'Others'
]);

const state = reactive({
  category: '',
  date: new Date().toISOString().split('T')[0],
  amount: 0
});

const onSubmit = () => {
  console.log(JSON.stringify(state));
};

const onReset = () => {
  state.category = "";
  state.date = new Date().toISOString().split('T')[0];
  state.amount = 0;
};
</script>
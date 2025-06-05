<template>
  <UContainer>
    <UForm :state="state" @submit="onSubmit">
      <UCard class="mb-4">
        <template #header>
          <p class="text-xl font-bold">Add Transaction</p>
        </template>
        <UFormField label="Category">
          <USelect v-model="state.category_id" :items="items" value-key="id" placeholder="Select category"
            class="w-40" />
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
            <tr v-for="(transact, index) in transactions" :key="index" class="border-b">
              <td class="px-4 py-2">{{ transact.category }}</td>
              <td class="px-4 py-2">{{ transact.date }}</td>
              <td class="px-4 py-2">RM{{ transact.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: ['auth']
});

const items = ref([
  { label: 'Food & Drinks', id: 1 },
  { label: 'Shop', id: 2 }, { label: 'House', id: 3 }, { label: 'Transportation', id: 4 }, { label: 'Vehicle', id: 5 },
  { label: 'Life', id: 6 }, { label: 'Phone & PC', id: 7 }, { label: 'Finance', id: 8 }, { label: 'Savings', id: 9 }, { label: 'Income', id: 10 }, { label: 'Others', id: 11 }
]);

const state = reactive({
  user_id: 26,
  category_id: null,
  date: new Date().toISOString().split('T')[0],
  amount: 0
});

const onSubmit = async () => {
  // POST /api/transactions
  try {
    const res = await $fetch('/api/transactions', {
      method: 'POST',
      body: { ...state }
    });
    console.log(res)
  } catch {

  }
};

const onReset = () => {
  state.category = "";
  state.date = new Date().toISOString().split('T')[0];
  state.amount = 0;
};

// load transactions
// GET /api/transactions
let transactions = []
</script>
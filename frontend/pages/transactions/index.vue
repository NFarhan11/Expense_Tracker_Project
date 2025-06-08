<template>
  <UContainer>
    <UForm :state="state" @submit="onSubmit">
      <UCard class="mb-4">
        <template #header>
          <p class="text-xl font-bold">Add Transaction</p>
          <!-- <pre>[LOG transactions]{{ transactions }}</pre> -->
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
        <p class="text-xl font-semibold text-gray-900 dark:text-gray-100 md:text-2xl">Transactions</p>
      </template>
      <div class="overflow-x-auto">
        <table class="w-full text-sm md:text-base">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <th class="px-4 py-3 text-left">Date</th>
              <th class="px-4 py-3 text-left">Category</th>
              <th class="px-4 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transact, index) in transactions" :key="index"
              class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              @click="router.push(`/transactions/${transact.id}`)">
              <td class="px-4 py-3 text-gray-800 dark:text-gray-100">{{ formatDate(transact.date) }}</td>
              <td class="px-4 py-3 text-gray-800 dark:text-gray-100">{{ categoryMap[transact.category_id] }}</td>
              <td class="px-4 py-3 text-gray-800 dark:text-gray-100">RM{{ transact.amount }}</td>
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

import formatDate from '~/utils/format';
const router = useRouter()

// temp
const items = ref([
  { label: 'Food & Drinks', id: 1 },
  { label: 'Shop', id: 2 }, { label: 'House', id: 3 }, { label: 'Transportation', id: 4 }, { label: 'Vehicle', id: 5 },
  { label: 'Life', id: 6 }, { label: 'Phone & PC', id: 7 }, { label: 'Finance', id: 8 }, { label: 'Savings', id: 9 }, { label: 'Income', id: 10 }, { label: 'Others', id: 11 }
]);
//temp
const categoryMap = computed(() => {
  return Object.fromEntries(items.value.map(i => [i.id, i.label]))
})

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
    console.log(res) // KIV: Toast Success Message
  } catch (err) {
    console.error("Submission failed: ", err) // KIV: Toast Error Message
  }
};

const onReset = () => { // KIV: Reset Error Message
  state.category = "";
  state.date = new Date().toISOString().split('T')[0];
  state.amount = 0;
};

const transactions = ref([]);
const loadTransactions = async () => {
  // GET /api/transactions
  try {
    const res = await $fetch('/api/transactions', {
      method: 'GET',
    })
    transactions.value = res?.data;
  } catch (err) {
    console.error("Fetching failed: ", err) // KIV: Toast Error Message
  }
};

onMounted(() => {
  loadTransactions()
})
</script>
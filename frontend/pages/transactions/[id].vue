<template>
  <UContainer>
    <UCard>
      <template #header>
        <p class="text-xl font-semibold text-gray-900 dark:text-gray-100 md:text-2xl">{{ formatDate(transaction.date) }}
        </p>
      </template>
      <div class="overflow-x-auto">
        <p>Category: {{ transaction.category_id }}</p>
        <p>Amount: RM{{ transaction.amount }}</p>
      </div>
      <template #footer>
        <UButtonGroup>
          <EditTransactionButton :transaction="transaction" />
          <UButton label="Delete" color="error" @click="deleteTransaction" />
        </UButtonGroup>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
import formatDate from '~/utils/format';

definePageMeta({
  layout: "default",
  middleware: ['auth']
});

const route = useRoute()
const router = useRouter()
const transactionId = route.params.id;

const deleteTransaction = async () => {
  // DELETE /api/transactions/:id
  try {
    const res = await $fetch(`/api/transactions/${transactionId}`, {
      method: 'DELETE',
    })
    console.log(res)  // Toast Success Message
    router.push('/transactions')
  } catch (err) {
    console.error("Delete failed: ", err) // KIV: Toast Error Message
  }
}

const transaction = reactive({})
const loadTransaction = async () => {
  // GET /api/transactions/:id
  try {
    const res = await $fetch(`/api/transactions/${transactionId}`, {
      method: 'GET',
    })
    Object.assign(transaction, res.data);
  } catch (err) {
    console.error("Fetching failed: ", err) // KIV: Toast Error Message
  }
};

onMounted(() => {
  loadTransaction()
})
</script>
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
          <UButton label="Edit" color="info" />
          <UButton label="Delete" color="error" />
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
const transactionId = route.params.id;

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
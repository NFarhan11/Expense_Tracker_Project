<template>
  <UModal title="Edit Transaction" v-model:open="isOpen"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <UButton label="Edit" color="info" />

    <template #body>
      <UCard class="mb-4">
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
          <pre>{{ state }}</pre>
          <UButton label="Update" type="submit" @click="updateTransaction" />
          <UButton label="Reset" color="neutral" @click="onReset" />
        </template>
      </UCard>
    </template>
  </UModal>
</template>

<script setup>
const props = defineProps({
  transaction: {
    type: Object,
    required: true
  }
})

const isOpen = ref(false)

// temp
const items = ref([
  { label: 'Food & Drinks', id: 1 },
  { label: 'Shop', id: 2 }, { label: 'House', id: 3 }, { label: 'Transportation', id: 4 }, { label: 'Vehicle', id: 5 },
  { label: 'Life', id: 6 }, { label: 'Phone & PC', id: 7 }, { label: 'Finance', id: 8 }, { label: 'Savings', id: 9 }, { label: 'Income', id: 10 }, { label: 'Others', id: 11 }
]);

const state = reactive({
  ...props.transaction,
  date: props.transaction.date?.split(' ')[0] || ''
})

watch(
  () => props.transaction,
  (newTransaction) => {
    Object.assign(state, {
      ...newTransaction,
      date: newTransaction.date?.split(' ')[0] || ''
    })
  },
  { immediate: true, deep: true }
)

const updateTransaction = async () => {
  // PUT /api/transactions
  try {
    const res = await $fetch(`/api/transactions/${state.id}`, {
      method: 'PUT',
    })
    // KIV: Toast Success Message
    navigateTo(`/transactions/${state.id}`)
  } catch (err) {
    console.error("Fetching failed: ", err) // KIV: Toast Error Message
  }
}

const onReset = () => { // KIV: Reset Error Message
  state.category = "";
  state.date = new Date().toISOString().split('T')[0];
  state.amount = 0;
};
</script>
<template>
  <UContainer>
    <p class="font-bold">Transaction</p>
    <UForm :state="state" @submit="onSubmit">
      <UCard class="w-1/2">
        <template #header>
          <p>Add Transaction</p>
        </template>
        <UFormField label="Category">
          <USelect v-model="state.category" :items="items" placeholder="Select category" class="w-40" />
        </UFormField>
        <UFormField label="Date">
          <UInput v-model="state.date" type="date" />
        </UFormField>
        <UFormField label="Amount">
          <UInput v-model="state.amount" type="number" />
        </UFormField>
        <template #footer>
          <UButton label="Submit" type="submit" />
          <UButton label="Reset" color="neutral" @click="onReset" />
        </template>
      </UCard>
    </UForm>

    <div v-if="result">
      Submitted: {{ state }}
    </div>
  </UContainer>
</template>

<script setup>
const state = reactive({
  category: undefined,
  date: undefined,
  amount: undefined,
});

// dummy dropdown
const items = ref([
  'Food & Drinks',
  'Shop',
  'House',
  'Transportation',
  'Vehicle',
  'Life',
  'Phone & PC',
  'Finance',
  'Savings',
  'Income',
  'Others'
]);

const result = ref(false);
// Dummy function
const onSubmit = () => {
  result.value = true
}
const onReset = () => {
  state.category = undefined
  state.date = undefined
  state.amount = undefined
  result.value = false
}
</script>
<template>
  <UContainer>
    <UForm :state="storeTransact" @submit="onSubmit">
      <UCard class="">
        <template #header>
          <p>Add Transaction</p>
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
  </UContainer>
</template>

<script setup>
const storeTransact = useTransactionStore();

const items = ref([
  'Food & Drinks', 'Shop', 'House', 'Transportation', 'Vehicle',
  'Life', 'Phone & PC', 'Finance', 'Savings', 'Income', 'Others'
]);

const result = ref(false);
const lastSubmitted = ref(null);

const onSubmit = () => {
  storeTransact.addTransaction({
    category: storeTransact.category,
    date: storeTransact.date,
    amount: storeTransact.amount
  });
  lastSubmitted.value = {
    category: storeTransact.category,
    date: storeTransact.date,
    amount: storeTransact.amount
  };
  result.value = true;
};

const onReset = () => {
  storeTransact.category = "";
  storeTransact.date = undefined;
  storeTransact.amount = 0;
  result.value = false;
  lastSubmitted.value = null;
};
</script>
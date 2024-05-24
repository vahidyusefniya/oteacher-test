<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  // Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())
</script>
<template>
  <!-- Header -->
  <Header />
  <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
    <Sidebar class="sticky top-[65px] hidden h-[calc(100vh-65px)] py-5 lg:col-span-3 lg:block"/>
    <main class="py-5 lg:col-span-9">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useDefaultStore } from '~/store/default'

const defaultStore = useDefaultStore()
const { SET_MENU } = defaultStore

const response = await $fetch('https://run.mocky.io/v3/63120735-7fbe-428a-9226-c10ca1ab43b6')
SET_MENU(response)

</script>
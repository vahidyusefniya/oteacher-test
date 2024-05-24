<template>
  <aside>
    <div
      class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="menu" />
    </div>
  </aside>
</template>

<script setup>
import { useDefaultStore } from '~/store/default'
import { storeToRefs } from 'pinia'

const defaultStore = useDefaultStore()
const { menu } = storeToRefs(defaultStore)

</script>

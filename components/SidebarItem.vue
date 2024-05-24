<template>
  <div class="flex flex-col">
    <template v-for="(l, i) in links" :key="i">
      <NuxtLink
        v-if="l.children.length === 0"
        :to="l.slug"
        class="inline-flex items-center gap-4 p-3 px-4 text-left text-[15px]"
      >
        <!-- <img :src="l.icon" class="h-5 w-5"/> -->
        <p class="truncate">
          {{ l.title }}
        </p>
      </NuxtLink>

      <HDisclosure v-slot="{ open }" v-else as="menu">
        <HDisclosureButton
          class="inline-flex items-center justify-between p-3 px-4 text-left text-[15px] w-full cursor-pointer"
          as="menu"
        >
          <div class="flex items-center gap-4">
            <p class="truncate">
              {{ l.title }}
            </p>
          </div>
          <div>
            <Icon
              name="heroicons:chevron-down"
              :class="[open && 'rotate-180']"
              class="h-4 w-4 text-muted-foreground transition"
            />
          </div>
        </HDisclosureButton>
        <TransitionExpand>
          <HDisclosurePanel class="mx-6 flex flex-col border-l px-3">
            <template v-for="(i, j) in l.children" :key="j">
              <NuxtLink class="rounded-md px-3 py-1.5 text-sm hover:bg-muted" :to="i.slug">
                {{ i.title }}
              </NuxtLink>
            </template>
          </HDisclosurePanel>
        </TransitionExpand>
      </HDisclosure>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['links'])
</script>

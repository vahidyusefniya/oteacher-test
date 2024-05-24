<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- Container of flex -->
    <div class="container flex h-16 items-center justify-between">
      <!-- Logo and page title -->
      <div class="flex items-center gap-3">
        <button
          @click="isOpen = true"
          aria-label="Open menu"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background lg:hidden"
        >
          <span class="sr-only">Button used to open menu</span>
          <Icon name="heroicons:bars-2" />
        </button>
        <!-- Logo -->
        <NuxtLink class="flex" to="/">
          <img
            src="https://oteacher.org/logo/icon-284x284.png"
            alt="OTeacher logo"
            class="w-10 object-contain"
          />
          <span class="text-3xl font-bold">OTeacher</span>
        </NuxtLink>
      </div>

      <!-- Right side of header -->
      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
        >
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>
        <div class="relative border-primary rounded-full p-1 border-2">
          <img
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            alt="Logged in user"
            class="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <MobileMenu v-model="isOpen" />
  </header>
</template>

<script setup>

  const mode = useColorMode();
  const toggleTheme = () => {
    mode.value = mode.value === "dark" ? "light" : "dark";
  };
  // Used to open/close menu
  const isOpen = ref(false);
</script>

export const useDefaultStore = defineStore('defaultStore', () => {
  const menu = ref([])

  function SET_MENU(value) {
    menu.value = value
  }
  
  return { SET_MENU, menu }
})
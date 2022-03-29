import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";

export const useCounter = defineStore("counter", () => {
  const count = ref(1);
  const addCounter = () => (count.value += 1);
  const doubleCounter = computed(() => count.value * 2)
  return { count, addCounter , doubleCounter }
});

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}

 
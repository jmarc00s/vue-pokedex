import { ref } from 'vue';

export function useDebounce() {
  const timeout = ref<any>(undefined);

  function debounce(fn: Function, delay: number = 500) {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
      fn();
    }, delay);
  }

  return { debounce };
}

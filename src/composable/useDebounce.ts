import { ref } from 'vue';

export function useDebounce() {
  function createDebounce(fn: Function, delay: number = 500) {
    const timeout = ref<any>(null);

    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
      fn();
    }, delay || 500);
  }

  return { debounce: createDebounce };
}

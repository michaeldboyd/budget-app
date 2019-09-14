<script>
  export let value = '';
  export let label;
  export let placeholder;
</script>

<div class="flex overflow-hidden rounded border">
  {#if label}
  <span class="flex items-center bg-gray-200 px-3 whitespace-no-wrap text-gray-900 text-sm capitalize">{label}</span>
  {/if}
  <input
    class="flex-1 shadow-inner px-4 py-1 text-gray-700 bg-white"
    type="text"
    bind:value
    {placeholder}
  />
</div>
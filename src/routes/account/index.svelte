


{#each [1,2,3] as num}
<div class="bg-indigo-600 rounded shadow-lg mx-2 my-4 text-white py-8 px-6">
  <span class="flex justify-between mb-8">
    <span>
      Account Name {num}
    </span>
    <span>
      Company Name {num}
    </span>
  </span>
  <span class="font-mono flex justify-between items-center">
    <span>**** 4444</span>
    <span>${num},000.00</span>
  </span>
</div>
{/each}
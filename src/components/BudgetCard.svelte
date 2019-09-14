<script>
  export let balance = 0
  export let max = null
  export let name = ''

  $: percent = max ? parseInt((balance / max) * 100) : 100
</script>

<div class="bg-gray-300 rounded-full shadow p-1 overflow-hidden relative">
	<div class="bg-indigo-400 absolute top-0 bottom-0 left-0" style={`width: ${percent}%`}/>
	<div class="bg-gray-100 rounded-full relative z-20 py-1 px-3 whitespace-no-wrap shadow-sm flex justify-between">
		{#if max}
		<span class="font-mono w-8">{max}</span>
		{/if}
		<span class="capitalize flex-1 text-center">{name}</span>
		<span class="font-mono w-8">{balance}</span>
	</div>
</div>

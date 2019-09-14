<script context="module">
	export async function preload() {
		const [budgets, cats] = await Promise.all([
			this.fetch('budget.json').then(res => res.json()),
			this.fetch('categories.json').then(res => res.json())
		])
		// console.log(cats)
		return {
			budgets
		}
	}
</script>

<script>
	import BudgetCard from 'src/components/BudgetCard.svelte'
	import Input from 'src/components/Input.svelte'

	export let budgets = []
</script>

<svelte:head>
	<title>Budget - Budgets</title>
</svelte:head>

{#each budgets as budget, i}
<div class="p-2">
	<BudgetCard
		balance="{budget.amount}"
		name="{budget.name}"
	/>
</div>
{/each}

<div class="bg-white p-2 shadow rounded m-2">
	<form action="">
		<Input
			label="name"
			placeholder="e.g. Fun Money"
		/>
		<Input
			label="type"
			placeholder="e.g. Fun Money"
		/>
		<Input
			label="group"
			placeholder="e.g. Fun Money"
		/>
		<Input
			label="category"
			placeholder="e.g. Fun Money"
		/>
	</form>
</div>

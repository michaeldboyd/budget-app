<script>
	import BudgetCard from '../components/BudgetCard.svelte'
</script>

<svelte:head>
	<title>Budget - Home</title>
</svelte:head>

<h1>Budgets</h1>
{#each [1,2,3,4,5,6,7] as num}
<div class="p-2">
	<BudgetCard balance="{num}" max="{10}" name="{`budget ${num}`}"/>
</div>
{/each}

<h1>Bills</h1>
{#each [1,2,3,4,5,6,7] as num}
<div class="p-2">
	<BudgetCard balance="{num}" max="{10}" name="{`budget ${num}`}"/>
</div>
{/each}

<h1>Goals</h1>
{#each [1,2,3,4,5,6,7] as num}
<div class="p-2">
	<BudgetCard balance="{num}" max="{10}" name="{`budget ${num}`}"/>
</div>
{/each}


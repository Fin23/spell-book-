<script>
	import { spells } from '../../stores/spellstore';
	import SpellCard from '../../components/spellCard.svelte';

	let searchTerm = '';
	let filteredSpells = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredSpells = $spells.filter((spell) =>
				spell.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredSpells = [...$spells];
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">svelte pokedex</h1>

<input
	class=" w-96 rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="search spells"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredSpells as spell}
		<SpellCard spellcard={spell} />
	{/each}
</div>

<style>
</style>

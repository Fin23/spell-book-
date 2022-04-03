<script context="module">
	export async function load({ page }) {
		const id = page.params.id;

		console.log('id = ', page);

		const url = `http://www.dnd5eapi.co/api/spells/${id}`;
		const res = await fetch(url);
		const spell = await res.json();

	
		console.log('spell', spell);
		return {
			props: {
				spell
			}
		};
	}
</script>

<script>


	export let spell;
	let concentration = false;
	let classes = spell.classes;
	let descriptions = spell.desc;

	if ((spell.concentration = true)) {
		concentration = true;
	}

</script>

<div
	class="flex m-20 bg-white rounded-xl  border-double border-4 border-indigo-600  flex-col  w-50"
>
	<h1 class="text-4xl text-center my-8 uppercase">{spell.name}</h1>
	<p>
		<strong> casting time: </strong>
		{spell.casting_time}
	</p>

	<p>
		<strong> Level: </strong>
		{spell.level}
	</p>
	{#if spell.heal_at_slot_level}
		<strong> heal bones per level: </strong>
		{#each Object.values(spell.heal_at_slot_level) as healBonus, i}
			{console.log('heal bonus =', healBonus)}
			{i + 1}.) +{healBonus} at level -
		{/each}
	{/if}
	{#if (concentration = true)}
		<p>
			<strong> concentration: </strong>
			{spell.concentration}
		</p>
	{:else}
		<p>
			<strong> concentration: </strong>
			false
		</p>
	{/if}
	{#if (spell.ritual = true)}
		<p>
			<strong> ritual: </strong>
			{spell.ritual}
		</p>
	{:else}
		<p>
			<strong> ritual: </strong>
			false
		</p>
	{/if}

	<p>
		<strong> duration: </strong>
		{spell.duration}
	</p>
	<p>
		<strong> Materials needed: </strong>
		{spell.material}
	</p>
	<p>
		<strong> Spell Range: </strong>
		{spell.range}
	</p>
	{#if classes}
		<strong> Classes: </strong>
		{#each classes as singleClass}
			{singleClass.index} ,
		{/each}
	{/if}
	{#if descriptions}
		<strong> Descriptions: </strong>
		{#each descriptions as description, i}
			<div>
				{i + 1}.]
				{description}
			</div>
		{/each}
	{/if}

</div>

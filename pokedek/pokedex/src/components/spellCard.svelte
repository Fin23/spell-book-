<script>
	export let spellcard;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-md hover:shadow-lg flex flex-col items-center"
	href={`/spells/${spellcard.index}`}
>
	<h2 class="uppercase text-2xl">{spellcard.id}. {spellcard.name}</h2>
	<p>
		{spellcard.id}
		{spellcard.url}
	</p>
</a>

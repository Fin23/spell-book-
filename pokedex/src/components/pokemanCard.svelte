<script>
	export let pokemancard;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-md hover:shadow-lg flex flex-col items-center"
	href={`/pokemon/${pokemancard.id}`}
>
	<img class="h-40 w-40" src={pokemancard.image} alt={pokemancard.name} />
	<h2 class="uppercase text-2xl">{pokemancard.id}. {pokemancard.name}</h2>
</a>

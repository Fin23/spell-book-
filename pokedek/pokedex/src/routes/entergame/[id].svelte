<script lang='ts'>
	import About from '../howto/about.svelte';
	import { pokemon } from '../../stores/pokestore.js';
	import PokemanCard from '../../components/pokemanCard.svelte';
	import wizard from '../../../static/openSourcerer.jpg';
	import { Motion } from 'svelte-motion';
	let name = '';
	let searchTerm = '';
	let correct_Answer = 'Rosco';
	let correct;
	let filteredPokemon = [];
	let random = randomInteger(1, 898);
	let area;
$:{console.log('the name is Rosco you passed puzzle 1')}
$:if(name === (correct_Answer) ||( 'rosco')){correct = true}
$:if(name === ''){correct = true}


// $:console.log('pokemon', $pokemon)
	function submit_Answer(){
if(name != correct_Answer){
correct = false;
console.log('correct ? ', correct)
}
	}






	function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<div class="background">
	About

	<h1>enter the game</h1>

	<!-- <M.h1>A big motion header</M.h1>

<M.div>A big motion header</M.div>

<M.button>A motion button</M.button> -->





	<div class="content">
	

		<div class="form__group field m-12">
			<input autocomplete="off" bind:value={name} type="input" class="form__field text-black" placeholder="Name" name="name" id="name" required />
			<label for="name" class="form__label"></label>
			<button on:click={submit_Answer}>submit</button>
		</div>
		{name}
		{#if !correct_Answer}
		{name}
		{/if}
		{#if name === correct_Answer}
		<div class="">Good Guess, oh shit! you have encountered a wild beast, what ever will you do?!</div>
		
		<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
			{#each $pokemon as pokeman}
				{#if pokeman.id === random}
				<div>
					<p>time to fight</p>
					<img src={wizard} alt="" width="200" height="200">
					<span class="flex flex-col">

						<button class="bg-slate-500 m-2 h-4 w-24">fight</button>
						<button class="bg-slate-500 m-2 h-4 w-24">examine</button>
						<button class="bg-slate-500 m-2 h-4 w-24">catch</button>
					</span>
				</div>




				<div class="drag-area" bind:this={area}/>
<Motion   drag
dragConstraints={{current:area}}
let:motion>
	<div class="box center unselectable" use:motion  >
		<span class="flex flex-col">

			<img src={pokeman.image} alt="" width="200" height="200"  >
			<p>
				
				drag me
			</p>
		</span>
</div>

<!-- <div class="hover:bg-violet-400 grid">
	<img src={pokeman.image} alt="" width="200" height="200"use:motion >
	
</div> -->

</Motion>
			
			
			
				{/if}
			{/each}
		</div>
		
		{/if}
		{#if correct === false}
		<div>thats not my name</div>
		{/if}
		
	</div>
</div>
<!-- <style lang='postcss'>
.characterBtns{
	@apply bg-slate-500;
}
</style> -->

<style lang="scss">
	h1 {
		color: white;
	}
	.background {
		background-color: black;
		background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
		height: 100vh;
		color: white;
		font: 1.3rem Inconsolata, monospace;
		text-shadow: 0 0 5px #c8c8c8;
	}

	.content {
		min-height: calc(100vh - 120px);
		/* 80px header + 40px footer = 120px  */
	}
	:global(*) {
  box-sizing: border-box;
}
	.background{
		background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		touch-action:none;
	}

	.box {
  background:  radial-gradient(rgba(0, 150, 0, 0.75), black 420%);
  border-radius: 30px;

  position: absolute;
  top: calc(50% - 150px / 2);
  left: calc(50% - 150px / 2);
}
	.drag-area {
  opacity: 0.2;

  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
}
	.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
	.center {
justify-content:center;
		align-items:center;
		display:flex;
	}
</style>

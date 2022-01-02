<script>
	import About from '../howto/about.svelte';
</script>

<div class="background">
	About

	<h1>enter game</h1>
	<div class="content">
		This page has little content

		<div class="form__group field">
			<input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
			<label for="name" class="form__label">Name</label>
		</div>
	</div>
</div>

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
</style>

<!-- routes/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';

	let showIcons = false;

	const handleClick = getContext('handleClick');

	function toggleIcons() {
		showIcons = !showIcons;
	}
</script>

<div class="content">
	<a on:click={() => handleClick} href="{base}/">
		<div class="title">
			<h1>brian zhang ∴</h1>
			<img src="{base}/logo.svg" class="logo" alt="logo" />
		</div>
	</a>
	<p>Software engineer based in New York, NY.</p>

	<p>
		I am an engineer at <a class="link" href="https://www.bloomberg.com/company/">Bloomberg LP</a>.
		I recently graduated from
		<a class="link" href="https://math.rutgers.edu/">Rutgers University</a>, where I studied
		Mathematics and Computer Science.
	</p>

	<p>
		I previously interned at <a
			class="link"
			href="https://www.amazon.jobs/content/en/our-workplace/working-at-amazon">Amazon</a
		> with the financial risk mitigation and remediation of bad orders teams.
	</p>

	<p>
		Take a look at some of my recent <a
			class="superlink"
			on:click={() => handleClick}
			href="{base}/projects/">work</a
		>
		and feel free to <button class="link" on:click={toggleIcons}>get in touch</button>.
	</p>

	{#if showIcons}
		<div class="social-icons" transition:fade={{ duration: 300 }}>
			<a class="link" href="https://www.linkedin.com/in/bzhangg/" target="_blank" rel="noopener">
				<img src="/linkedin.svg" alt="linkedin" width="24" height="24" />
			</a>
			<a class="link" href="https://github.com/bzhanggg" target="_blank" rel="noopener">
				<img src="/github.svg" alt="linkedin" width="24" height="24" />
			</a>
			<a class="link" href="https://www.instagram.com/bzhangg/" target="_blank" rel="noopener">
				<img src="/instagram.svg" alt="linkedin" width="24" height="24" />
			</a>
		</div>
	{/if}
</div>

<style>
	.superlink {
		@apply rounded bg-emerald-50 px-1 text-neutral-800 no-underline transition-colors hover:bg-emerald-200;
	}

	.social-icons {
		margin-top: 2rem;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.social-icons img {
		width: 24px;
		height: 24px;
		fill: currentColor;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.social-icons img:hover {
		opacity: 1;
	}
</style>

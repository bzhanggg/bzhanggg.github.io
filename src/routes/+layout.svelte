<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation'
	import '../app.css';

	let { children } = $props();
	const showContent = writable(false);

	export function handleClick(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
		event.preventDefault();
		goto(event.currentTarget.href, {replaceState: false });
	}

	onMount(() => {
		setTimeout(() => {
			$showContent = true;
		}, 1000);
	});
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		display: flex;
		justify-content: flex-start;
		padding-left: 10%;
		padding-right: 10%;
	}

	@media (min-width: 768px) {
		main {
			padding-left: 20%;
			padding-right: 20%;
		}
	}
</style>

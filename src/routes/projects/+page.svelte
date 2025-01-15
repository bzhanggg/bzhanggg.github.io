<!-- routes/projects/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import '../../app.css';
</script>

<div class="content">
	<div class="title">
		<h1>projects ∴</h1>
		<img src="{base}/logo.svg" class="logo" alt="logo" />
	</div>
	<p class="leading-text">A short list of some of my recent work.</p>

	<a class="project-item" href="https://github.com/bzhanggg/smartnic-rewriter">
		<div class="project-text">
			<h3>SmartNIC Rewriter</h3>
			<p>Compiler optimizations for state-compute replication networking</p>
		</div>
	</a>
	<a class="project-item" href="https://github.com/bzhanggg/jlox">
		<div class="project-text">
			<h3>The Lox Programming Language</h3>
			<p>A simple tree-walk interpreter for the toy Lox language, following Robert Nystrom's Crafting Interpreters</p>
		</div>
	</a>
  <a class="project-item" href="https://github.com/bzhanggg/jlox">
		<div class="project-text">
			<h3>MicroCaml Type Inference</h3>
			<p>A type inferencer for MicroCaml, a subset of the OCaml programming language. Written in OCaml, soon to be rewritten in Rust</p>
		</div>
	</a>
	<a class="project-item" href="https://github.com/bzhanggg">
		<div class="project-text">
			<h3>NotionCLI</h3>
			<p>A simple terminal-based CLI for basic Notion tools (WIP)</p>
		</div>
	</a>
</div>

<style>
	.leading-text {
		padding-bottom: 1.5rem;
	}

	.project-item {
		@apply flex items-center rounded-lg border-none transition-colors;
	}

	.project-text {
		@apply flex flex-auto flex-col justify-center;
		@apply pb-0 pt-4;
		@apply px-4;
		@apply border-b border-neutral-100;
		@apply text-sm text-neutral-700 transition-colors;
	}

	.project-item:hover {
		@apply bg-emerald-50;
	}

	.project-item:hover .project-text {
		@apply border-transparent;
	}
</style>

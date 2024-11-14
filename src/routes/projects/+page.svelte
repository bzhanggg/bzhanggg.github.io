<!-- routes/projects/+page.svelte -->
<script lang="ts">
  import { base } from "$app/paths";
  import "../../app.css"
</script>

<div class="content">
  <div class="title">
    <h1>projects ∴</h1><img src="{base}/logo.svg" class="logo" alt="logo"/>
  </div>
  <p class="leading-text">
    A short list of some of my recent work.
  </p>

  <a class="project-item" href="/">
    <div class="project-text">
      <h3>SmartNIC Rewriter</h3>
      <p>Compiler optimizations for state-compute replication networking</p>
    </div>
  </a>
  <a class="project-item" href="/">
    <div class="project-text">
      <h3>Project 2</h3>
      <p>Description</p>
    </div>
  </a>
</div>

<style>
  .leading-text {
    padding-bottom: 1.5rem;
  }

  .project-item {
    @apply flex gap-4 p-4 -m-4 pt-4 rounded-lg border-none transition-colors;
  }

  .project-text {
    @apply flex flex-col text-sm border-b border-neutral-100 flex-auto pb-4 text-neutral-700 transition-colors;
  }

  .project-item:hover {
    @apply bg-blue-50;
  }

  .project-item:hover .project-text {
    @apply border-transparent;
  }
</style>
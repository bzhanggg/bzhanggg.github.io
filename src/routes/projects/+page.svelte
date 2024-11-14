<!-- routes/projects/+page.svelte -->
<script lang="ts">
  import { base } from "$app/paths";
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
  <div class="project-item">
    <div class="project-text">
      <h3>Project 2</h3>
      <p>Description</p>
    </div>
  </div>
</div>

<style>
  .leading-text {
    padding-bottom: 1.5rem;
  }

  .project-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin: -1rem;
    padding-top: 1rem;
    border-radius: 12px;
    border: none;
    transition: background-color 0.3s
  }

  .project-text {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;  /* text-sm */
    border-bottom: 1px solid #f5f5f5;  /* border-b border-neutral-100 */
    flex: 1 1 auto;  /* flex-auto */
    padding-bottom: 1rem;  /* pb-4 */
    color: #404040;  /* text-neutral-700 */
    transition: border-color 0.3s;  /* for smooth transition on hover */
  }

  .project-item:hover {
    background-color: bg-blue-50;
  }

  .project-item:hover .project-text {
    border-color: transparent;
  }
</style>
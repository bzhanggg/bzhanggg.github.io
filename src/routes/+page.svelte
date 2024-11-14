<!-- routes/+page.svelte -->
<script lang="ts">
  import { base } from "$app/paths";
  import { fade } from "svelte/transition";

  let showIcons = false;

  function toggleIcons() {
    showIcons = !showIcons;
  }
</script>


<div class="content">
  <div class="title">
    <h1>brian zhang  ∴</h1><img src="{base}/logo.svg" class="logo" alt="logo"/>
  </div>
  <p>
    Software engineer based in New York, NY.
  </p>

  <p>
    I am a graduating senior at <a href="https://math.rutgers.edu/">Rutgers University</a> studying Mathematics and Computer Science.
    I will be joining <a href="https://www.bloomberg.com/company/">Bloomberg LP</a> as a software engineer in June 2025.
  </p>

  <p>
    I previously interned at <a href="https://www.amazon.jobs/content/en/our-workplace/working-at-amazon">Amazon</a> with the financial risk mitigation and remediation of bad orders teams.
  </p>

  <p>
    Take a look at some of my recent <a class="superlink" href="{base}/projects/">work</a> and feel free to <button class="get-in-touch" on:click={toggleIcons}>get in touch</button>.
  </p>

  {#if showIcons}
  <div class="social-icons" transition:fade={{ duration: 300 }}>
    <a href="https://www.linkedin.com/in/bzhangg/" target="_blank" rel="noopener">
      <img src="/linkedin.svg" alt="linkedin" width="24" height="24">
    </a>
    <a href="https://github.com/bzhanggg" target="_blank" rel="noopener">
      <img src="/github.svg" alt="linkedin" width="24" height="24">
    </a>
    <a href="https://www.instagram.com/bzhangg/" target="_blank" rel="noopener">
      <img src="/instagram.svg" alt="linkedin" width="24" height="24">
    </a>
  </div>
  {/if}

</div>


<style>
  .superlink {
    @apply text-neutral-800 bg-blue-50 hover:bg-blue-100 
    no-underline transition-colors px-1 rounded;
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
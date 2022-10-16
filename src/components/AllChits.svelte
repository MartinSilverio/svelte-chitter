<script>
    import Chit from './Chit.svelte';
    import { ChitStore } from '../stores/ChitStore';
    import { onMount } from 'svelte';

    let loading = true;

    /* Can use auto-subsription instead of this boilerplate stuff (does unsub for you when destroyed) */
    // let allChits;
    // let chistStoreUnsub = ChitStore.subscribe((data) => {
    //     allChits = data;
    // });

    onMount(async () => {
        console.log('Component Mounted');
        await ChitStore.loadChits();
        loading = false;
    });
    // onDestroy(chistStoreUnsub);
</script>

<div class="all-chits">
    {#if loading}
        <div class="loader">Loading...</div>
    {:else}
        {#each $ChitStore as chit (chit.id)}
            <Chit {...chit} />
        {/each}
    {/if}
</div>

<style>
    .loader {
        font-size: x-small;
        padding-top: 20px;
        opacity: 0.6;
    }
</style>

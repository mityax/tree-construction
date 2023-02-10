<div class="empty-state flex-col flex-cross-center">
    <p><Icon name={icon || "plus-circle"} width="3em" height="3em" strokeWidth="1px" on:click /></p>
    <p>{@html title || "Nothing here yet."}</p>
    {#if message}
        <small>{@html message}</small>
    {/if}
</div>

<script lang="ts">
    import Icon from "./Icon.svelte";

    export let icon: string;
    export let title: string;
    export let message: string;
</script>

<style lang="sass">
  .empty-state
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: #a1a1a1
    text-align: center
</style>

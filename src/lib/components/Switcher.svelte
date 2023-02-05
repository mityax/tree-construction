
<div class="switcher">
    {#if numberOfOptions > 1}
        <div class="switcher-controls">
            <button on:click={previous} disabled={currentIndex === 0}><Icon name="arrow-left" /></button>
            Showing option {currentIndex + 1} of {numberOfOptions}
            <button on:click={next} disabled={currentIndex === numberOfOptions - 1}><Icon name="arrow-right" /></button>
        </div>
    {/if}

    {#if numberOfOptions > 0}
        <slot option={currentIndex} />
    {/if}
</div>

<script lang="ts">
    import Icon from "./Icon.svelte";

    export let numberOfOptions: number;

    export let currentIndex: number = 0;

    function next() {
        currentIndex++;
    }

    function previous() {
        currentIndex--;
    }
</script>

<style lang="sass">
    .switcher
      display: flex
      flex-direction: column
      align-items: center

      .switcher-controls
        display: flex
        align-items: center
        margin-bottom: 25px

        button
          margin: 10px

        .hidden
          visibility: hidden
</style>

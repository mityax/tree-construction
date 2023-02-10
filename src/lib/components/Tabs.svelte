<div class="tabs">
    <div class="tab-bar">
        {#each tabs as tab, i}
            <div class="tab" class:tab-active={currentIndex === i} on:click={() => setCurrentTab(i)}>{tab}</div>
        {/each}
    </div>
    <div class="tab-content">
        <slot currentIndex={currentIndex} />
    </div>
</div>

<script lang="ts">
    export let tabs: string[] = [];
    export let currentIndex: number;

    function setCurrentTab(i: number) {
        currentIndex = i;
    }
</script>

<style lang="sass">
    .tabs
      .tab-bar
        display: flex
        overflow: auto

        .tab
          cursor: pointer
          border-bottom: 1px #cbcbcb solid
          padding: 12px 15px 12px 15px
          transition: border-bottom-color 0.3s

          &-active
            color: teal
            border-bottom: 2px teal solid
            padding-bottom: 11px
</style>

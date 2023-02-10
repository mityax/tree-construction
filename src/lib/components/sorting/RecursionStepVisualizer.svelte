
<div class="recursion-visualizer flex-row">
    <div class="left" class:left-with-right-line={_realObserver.children.length === 0}>
        <div>
            <div class="arrow-label">{JSON.stringify(_realObserver.input)}</div>
            <div class="arrow-container flex-row">
                <div class="arrow-line"></div>
                <div class="arrow-tip-right"></div>
            </div>
        </div>

        <div class="spacer-expand spacer-l"> </div>

        <div class="result">
            <div class="arrow-container flex-row">
                <div class="arrow-tip-left"></div>
                <div class="arrow-line"></div>
            </div>
            <div class="arrow-label">{JSON.stringify(_realObserver.result)}</div>
        </div>
    </div>

    {#if _realObserver.children.length > 0}
        <div class="children-container">
            {#each _realObserver.children as child}
                <svelte:self observer={child} skipRecursionLevels={0} />
            {/each}
        </div>
    {/if}
</div>

<script lang="ts">
    import type {RecursionObserver} from "../../recursion_observer";

    export let observer: RecursionObserver<any, any>;
    export let skipRecursionLevels: number = 1;

    let _realObserver: RecursionObserver<any, any>;

    $: {
        _realObserver = observer;
        for (let i=0; i < skipRecursionLevels && _realObserver.children.length > 0; i++) {
            _realObserver = _realObserver.children[0];
        }
    }
</script>

<style lang="sass">
  .recursion-visualizer
    border-left: 2px black solid
    align-items: stretch
    position: relative

    .left
      min-height: 3em
      position: relative

      .result
        position: absolute
        bottom: 0

      &-with-right-line
        border-right: 2px solid black

    .children-container
      margin: 1.3em 0

    .arrow-label
      padding: 0 15px
      font-family: monospace

    .arrow-container
      width: 100%

      .arrow-line
        flex-grow: 1
        background: black
        height: 2px
        width: 100%

      .arrow-tip-left, .arrow-tip-right
        border-top: 2px black solid
        border-right: 2px black solid
        width: 7px
        height: 7px
        line-height: 0
        transform: rotate(45deg)
        margin-left: -7.5px
        margin-right: 1px

      .arrow-tip-left
        transform: rotate(-135deg)
        margin-right: -7.5px
        margin-left: 1px

  :global(.recursion-visualizer+.recursion-visualizer)
    padding-top: 25px
</style>

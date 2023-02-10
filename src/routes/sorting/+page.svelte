<ContentWithSidebar>
    <div class="sidebar" slot="sidebar">
        <div class="flex-row">
            <label>Items to sort:</label>
            <div class="spacer-expand"> </div>
            <label>Sep.:</label>
            <div class="spacer-m"> </div>
            <input type="text" placeholder="Any whitespace" bind:value={sep} class="secondary" style="width: 7em" />
        </div>
        <div class="spacer-s"> </div>
        <textarea bind:value={_rawItems} bind:this={textAreaEl} placeholder="2 3 4 1 0 2 1 8 11 9"></textarea>
        <div class="spacer-s"> </div>
        <div class="subnote">
            e.g. <ClickToCopy><code>85 70 36 75 53 73 1 4 94 29</code></ClickToCopy>
            or <ClickToCopy><code>L A C D F O B K</code></ClickToCopy>
        </div>
        <div class="spacer-l"> </div>
        <button class="submit-button button-submit" on:click={onSubmit}>SORT</button>
    </div>
    <div class="output flex-col" class:output-center={!items}>
        {#if items}
            <Tabs let:currentIndex={currentIndex} currentIndex={0} tabs={[
                    "SelectionSort", "BubbleSort", "InsertionSort", "ShakerSort",
                    "GnomeSort", "HeapSort", "MergeSort", "QuickSort"
                ]}>
                <div class="tab-inner-container">
                    {#if currentIndex === 0}
                        <SelectionSort items={items} />
                    {:else if currentIndex === 1}
                        <BubbleSort items={items} />
                    {:else if currentIndex === 2}
                        <InsertionSort items={items} />
                    {:else if currentIndex === 3}
                        <ShakerSort items={items} />
                    {:else if currentIndex === 4}
                        <GnomeSort items={items} />
                    {:else if currentIndex === 5}
                        <HeapSort items={items} />
                    {:else if currentIndex === 6}
                        <MergeSort items={items} />
                    {:else}
                        <QuickSort items={items} />
                    {/if}
                </div>
            </Tabs>
        {:else}
            <EmptyState
                on:click={focusInput}
                message="Enter some numbers to sort or use one<br>of the examples to get started." />
        {/if}
    </div>
    <Footer />
</ContentWithSidebar>

<script lang="ts">
    import ContentWithSidebar from "../../lib/components/ContentWithSidebar.svelte";
    import SelectionSort from "../../lib/components/sorting/SelectionSort.svelte";
    import Tabs from "../../lib/components/Tabs.svelte";
    import InsertionSort from "../../lib/components/sorting/InsertionSort.svelte";
    import BubbleSort from "../../lib/components/sorting/BubbleSort.svelte";
    import ShakerSort from "../../lib/components/sorting/ShakerSort.svelte";
    import GnomeSort from "../../lib/components/sorting/GnomeSort.svelte";
    import HeapSort from "../../lib/components/sorting/HeapSort.svelte";
    import MergeSort from "../../lib/components/sorting/MergeSort.svelte";
    import ClickToCopy from "../../lib/components/ClickToCopy.svelte";
    import QuickSort from "../../lib/components/sorting/QuickSort.svelte";
    import EmptyState from "../../lib/components/EmptyState.svelte";
    import Footer from "../../lib/components/Footer.svelte";

    let textAreaEl;

    let _rawItems: string = "";
    let sep: string = "";

    let items;

    function onSubmit() {
        let elements = _rawItems
            .split(sep || /\s+/g).map((i) => i.trim())
            .map((e) => e.trim())
            .filter((e) => e.length > 0);
        if (elements.some((e) => isNaN(Number.parseFloat(e)))) {
            items = elements;
        } else {
            items = elements.map((e) => Number.parseFloat(e));
        }
    }

    function focusInput() {
        textAreaEl.focus();
    }
</script>

<style lang="sass">
    .sidebar
      padding: 25px

      textarea
        width: 100%
        box-sizing: border-box
        height: 150px

    .tab-inner-container
      padding: 25px
      max-width: 100%
      overflow: auto

    .output
      min-height: calc(100% - 40px)

    .output-center
      justify-content: center
</style>

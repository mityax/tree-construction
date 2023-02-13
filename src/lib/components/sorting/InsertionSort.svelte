
<div class="insertion-sort">
    <section>
        <h2>Algorithm steps</h2>
        <SortStepVisualizer steps={steps} />
    </section>
</div>

<script lang="ts">
    import SortStepVisualizer from "./SortStepVisualizer.svelte";
    import {insertionSort} from "../../sorting.js";

    export let items: any[];

    let sorted: any[] = [];
    let steps: {items: any[], changedIndexes: number[], highlightedIndexes: number[], description: string}[];

    $: {
        steps = [];
        sorted = insertionSort(items, (it, changedIndexes, highlightedIndexes, description) => steps.push({
            items: it,
            changedIndexes,
            highlightedIndexes,
            description
        }));
    }
</script>

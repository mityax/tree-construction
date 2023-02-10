
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
    let steps: {items: any[], changedIndexes: number[], description: string}[];

    $: {
        steps = [];
        sorted = insertionSort(items, (it, changedIndexes, description) => steps.push({
            items: it,
            changedIndexes,
            description
        }));
    }
</script>

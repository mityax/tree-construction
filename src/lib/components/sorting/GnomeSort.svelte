
<div class="gnome-sort">
    <section>
        <h2>Algorithm steps</h2>
        <SortStepVisualizer steps={steps} />
    </section>
</div>

<script lang="ts">
    import {gnomeSort} from "../../sorting";
    import SortStepVisualizer from "./SortStepVisualizer.svelte";

    export let items: any[];

    let sorted: any[] = [];
    let steps: {items: any[], changedIndexes: number[], highlightedIndexes: number[], description: string}[];

    $: {
        steps = [];
        sorted = gnomeSort(items, (it, changedIndexes, highlightedIndexes, description) => steps.push({
            items: it,
            changedIndexes,
            highlightedIndexes,
            description
        }));
    }
</script>

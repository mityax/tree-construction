
<div class="shaker-sort">
    <section>
        <h2>Algorithm steps</h2>
        <SortStepVisualizer steps={steps} />
    </section>
</div>

<script lang="ts">
    import {shakerSort} from "../../sorting";
    import SortStepVisualizer from "./SortStepVisualizer.svelte";

    export let items: any[];

    let sorted: any[] = [];
    let steps: {items: any[], changedIndexes: number[], description: string}[];

    $: {
        steps = [];
        sorted = shakerSort(items, (it, changedIndexes, description) => steps.push({
            items: it,
            changedIndexes,
            description
        }));
    }
</script>

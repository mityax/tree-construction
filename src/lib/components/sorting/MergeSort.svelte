
<div class="merge-sort">
    <section>
        <h2>Recursion steps</h2>
        <RecursionStepVisualizer observer={observer} />
    </section>
</div>

<script lang="ts">
    import type {RecursionObserver} from "../../recursion_observer";
    import {RecursionNode} from "../../recursion_observer";
    import {mergeSort} from "../../sorting.js";
    import RecursionStepVisualizer from "./RecursionStepVisualizer.svelte";

    export let items: any[];

    let sorted: any[] = [];
    let observer: RecursionObserver<any[], any[]>;

    $: {
        observer = new RecursionNode<any[], any[]>([], []);
        sorted = mergeSort(items, observer);
    }
</script>

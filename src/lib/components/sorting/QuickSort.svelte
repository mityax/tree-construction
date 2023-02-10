
<div class="quick-sort">
    <section>
        <input type="checkbox" bind:checked={useMedianAsPivot} id="use-median-as-pivot" />
        <label for="use-median-as-pivot">Use the median of <code>[&lt;first&gt;, &lt;middle&gt;, &lt;last&gt;]</code> as pivot element</label>
        <h2>Recursion steps</h2>
        <RecursionStepVisualizer observer={observer} />
    </section>
</div>

<script lang="ts">
    import type {RecursionObserver} from "../../recursion_observer";
    import {RecursionNode} from "../../recursion_observer";
    import {quickSort} from "../../sorting.js";
    import RecursionStepVisualizer from "./RecursionStepVisualizer.svelte";

    export let items: any[];

    let useMedianAsPivot: boolean = false;
    let sorted: any[] = [];
    let observer: RecursionObserver<any[], any[]>;

    $: {
        observer = new RecursionNode<any[], any[]>([], []);
        sorted = quickSort(items, observer, useMedianAsPivot);
    }
</script>

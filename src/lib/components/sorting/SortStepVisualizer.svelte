
<table class="sort-steps">
    {#each steps as step, stepIndex}
        <tr>
            <td class="step-index">({ stepIndex+1 })</td>
            {#each step.items as item, i}
                <td class:step-bold={step.changedIndexes.indexOf(i) !== -1}>{ item }</td>
            {/each}
            <td class:step-empty={step.description === steps[stepIndex - 1]?.description}>
                { step.description === steps[stepIndex - 1]?.description ? '"' : step.description }
            </td>
        </tr>
    {/each}
</table>

<script lang="ts">
    export let steps: {
        items: any[],
        changedIndexes: number[],
        description: string
    }[] = [];
</script>

<style lang="sass">
    .sort-steps
      border-collapse: collapse

      td
        border: 1px #cbcbcb solid
        padding: 2px 10px
        max-width: 450px

      .step-index
        opacity: 0.5

      .step-bold
        font-weight: bold
        color: red

      .step-empty
        text-align: center
        opacity: 0.5
        font-weight: bold
</style>

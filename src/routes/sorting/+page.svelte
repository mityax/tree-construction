<ContentWithSidebar>
    <div class="sidebar" slot="sidebar">
        <label>Items to sort:</label>
        <div class="spacer-m"> </div>
        <textarea bind:value={itemsInput} placeholder="2 3 4 1 0 2 1 8 11 9"></textarea>
        <div class="spacer-l"> </div>
        <button class="submit-button button-submit" on:click={onSubmit}>SORT</button>
    </div>
    <div>

    </div>
</ContentWithSidebar>

<script lang="ts">
    import ContentWithSidebar from "../../lib/components/ContentWithSidebar.svelte";

    let itemsInput: string;

    function onSubmit() {

    }
</script>

<style lang="sass">
    .sidebar
      padding: 25px

      textarea
        width: 300px
        height: 150px
</style>

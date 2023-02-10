
<script lang="ts">
    import {base} from "$app/paths";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    onMount(() => {
        goto(base + "/trees/");
    })
</script>
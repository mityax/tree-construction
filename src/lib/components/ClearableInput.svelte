
<div class="clearable-input">
    <input type="text" bind:value={value} {...inputProps}/>
    <div class="clear-button" class:hidden={value.trim().length === 0} on:click={clear}>
        <Icon name="x"/>
    </div>
</div>

<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import Icon from "./Icon.svelte";

    export let inputProps: Record<string, any>;

    export let value: string;

    const dispatch = createEventDispatcher();

    function clear() {
        value = "";
        dispatch("clear");
    }
</script>

<style lang="sass">
  .clearable-input
    display: flex
    align-items: center
    background: white
    border-radius: 2px

    input
      background: transparent
      border: none
      outline: none
      flex-grow: 1
      padding: 10px 10px

    .clear-button
      color: black
      cursor: pointer
      line-height: 0
      margin: 0 7px
      visibility: visible

      &.hidden
        visibility: hidden
</style>

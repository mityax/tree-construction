
<div class="clearable-input">
    <input bind:this={element} type="text" bind:value={value} on:input placeholder={placeholder} {...inputProps}/>
    <div class="clear-button" class:hidden={value.trim().length === 0} on:click={clear}>
        <Icon name="x"/>
    </div>
</div>

<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import Icon from "./Icon.svelte";

    export let inputProps: Record<string, any>;

    export let value: string;
    export let placeholder: string;

    let element;
    const dispatch = createEventDispatcher();

    export function clear() {
        value = "";
        dispatch("clear");
    }

    export function focus() {
        element.focus();
    }
</script>

<style lang="sass">
  .clearable-input
    display: flex
    align-items: center
    background: white
    border-radius: 3px

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

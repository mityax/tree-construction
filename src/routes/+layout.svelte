<div class="layout">
    <div class="nav">
        <Nav />
    </div>
    <div class="sidebar">
        <slot name="sidebar" />
    </div>
    <div class="main">
        <slot />
    </div>
</div>

<script lang="ts">
    import Nav from "../lib/components/Nav.svelte";
</script>

<style lang="sass">
  @import "../style/constants"

  .layout
    display: flex
    flex-direction: row
    height: 100vh

    @media (max-width: $MOBILE_BREAKPOINT)
      flex-direction: column

    .nav
      flex-grow: 0
      background: $SIDEBAR_BACKGROUND
      padding: 15px
      box-sizing: border-box
      display: flex
      flex-direction: column
      justify-content: center
      border-right: 0.5px #7a7a7a dashed

      @media (max-width: $MOBILE_BREAKPOINT)
        min-height: unset

    .sidebar
      flex-grow: 0
      background: $SIDEBAR_BACKGROUND

    .main
      flex-grow: 1
      height: 100%

      @media(min-width: $MOBILE_BREAKPOINT)
        overflow: auto
</style>

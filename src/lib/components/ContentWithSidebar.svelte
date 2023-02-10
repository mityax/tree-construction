<div class="container">
    <div class="sidebar">
        <slot name="sidebar" />
    </div>

    <div class="main">
        <slot />
    </div>
</div>

<style lang="sass">
  @import "../../style/constants"

  .container
    display: flex
    height: 100%

    .sidebar
      flex-grow: 0
      width: 400px
      background: $SIDEBAR_BACKGROUND
      color: white
      height: 100%

    .main
      flex-grow: 1
      flex-shrink: 1
      overflow: auto

  @media(max-width: $MOBILE_BREAKPOINT)
    .container
      flex-direction: column

      .sidebar
        width: unset

      .main
        overflow: unset
</style>
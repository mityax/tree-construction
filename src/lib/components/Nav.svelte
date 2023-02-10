
<div class="nav">
    <a href="{base}/trees/" class="nav-button">
        <Icon name="share-2" />
        <span class="title">Trees</span>
    </a>
    <div class="spacer-m"> </div>
    <!--<a href="{base}/sorting/" class="nav-button">
        <Icon name="hash" />
        <span class="title">Sorting</span>
    </a>-->
</div>

<script lang="ts">
import Icon from "./Icon.svelte";
import {base} from "$app/paths";


</script>

<style lang="sass">
  @import "../../style/constants"

  .nav
    display: flex
    flex-direction: column
    align-items: center

    @media (max-width: $MOBILE_BREAKPOINT)
      flex-direction: row
      justify-content: center

    &:hover
      .nav-button
        .title
          @media (min-width: $MOBILE_BREAKPOINT)
            max-width: 250px
            padding-left: 15px

    .nav-button
      background: transparentize(white, 0.7)
      border-radius: 15px
      padding: 15px
      text-decoration: none
      color: white
      display: flex
      align-items: center
      box-sizing: border-box
      width: 100%

      @media (max-width: $MOBILE_BREAKPOINT)
        flex-direction: column

      &+&
        margin-bottom: 15px

      .title
        max-width: 0
        transition: max-width 0.25s, max-height 0.25s, padding 0.25s
        overflow: hidden
        display: inline-block
        padding-left: 0
        text-transform: uppercase
        letter-spacing: 1px
        font-size: 80%

        @media (max-width: $MOBILE_BREAKPOINT)
          max-width: unset
          padding-top: 5px
          font-size: 50%
</style>

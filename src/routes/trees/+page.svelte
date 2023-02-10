<ContentWithSidebar>
    <div class="form" slot="sidebar">
        <h1 style="text-align: center">Tree constructor</h1>
        <table class="form-table">
            <tr>
                <td>
                    <label><b>Pre</b>order:</label><br>
                </td>
                <td>
                    <ClearableInput bind:this={preOrderInputElement} bind:value={preOrderInput} on:input={onChanged} placeholder={trees[currentIndex]?.preOrderTraversal()?.join(" ") || ""} />
                    <span class="subnote">e.g. <ClickToCopy>5  3  0  1  7  9  8  9</ClickToCopy> or <ClickToCopy>A B D E C F</ClickToCopy></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label><b>In</b>order:</label><br>
                </td>
                <td>
                    <ClearableInput bind:value={inOrderInput} on:input={onChanged} placeholder={trees[currentIndex]?.inOrderTraversal()?.join(" ") || ""} />
                    <span class="subnote">e.g. <ClickToCopy>0  1  3  5  7  8  9  9</ClickToCopy> or <ClickToCopy>D B E A F C</ClickToCopy></span>
                </td>
            </tr>
            <tr>
                <td><label><b>Post</b>order:</label></td>
                <td>
                    <ClearableInput bind:value={postOrderInput} on:input={onChanged} placeholder={trees[currentIndex]?.postOrderTraversal()?.join(" ") || ""} />
                    <span class="subnote">e.g. <ClickToCopy>1 0 3 8 9 9 7 5</ClickToCopy> or <ClickToCopy>D E B F C A</ClickToCopy></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    {#if warning}
                        <div class="warning">
                            <b>Warning:</b>
                            { warning }
                        </div>
                    {/if}
                    {#if error}
                        <div class="error">
                            <b>Error:</b>
                            { error }
                        </div>
                    {/if}
                </td>
            </tr>
            <tr>
                <td colspan="2"><button on:click={onSubmit} disabled="{!changed}">CONSTRUCT TREE</button></td>
            </tr>
        </table>
    </div>

    <div class="main">
        <div class="output">
            {#if trees.length > 0}
                <Switcher numberOfOptions={trees.length} bind:currentIndex={currentIndex}>
                    {#if pre.length !== 0 && !arraysEqual(trees[currentIndex].preOrderTraversal(), pre)}
                        <div class="warning">
                            <b>Warning:</b> This tree has been generated even though it's preorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!
                        </div>
                    {/if}
                    {#if in_.length !== 0 && !arraysEqual(trees[currentIndex].inOrderTraversal(), in_)}
                        <div class="warning">
                            <b>Warning:</b> This tree has been generated even though it's inorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!
                        </div>
                    {/if}

                    <Tree tree={trees[currentIndex]} />

                    <!--<AVLAnalyzer tree={trees[currentIndex]} />-->
                </Switcher>
            {:else}
                <div class="empty-state">
                    <p><Icon name="plus-circle" width="3em" height="3em" strokeWidth="1px" on:click={focusInput} /></p>
                    <p>Nothing here yet.</p>
                    <small>Input your tree traversals or use the<br> examples to get started.</small>
                </div>
            {/if}
        </div>

        <Footer />
    </div>
</ContentWithSidebar>

<script lang="ts">
    import {buildTreeInPost, buildTreePreIn, TreeConstructionError, TreeNode} from "../../lib/tree";
    import Tree from "../../lib/components/Tree.svelte";
    import ClickToCopy from "../../lib/components/ClickToCopy.svelte";
    import ClearableInput from "../../lib/components/ClearableInput.svelte";
    import Switcher from "../../lib/components/Switcher.svelte";
    import {arraysContainTheSameElements, arraysEqual} from "../../lib/utils";
    import Footer from '../../lib/components/Footer.svelte';
    import Icon from '../../lib/components/Icon.svelte';
    import ContentWithSidebar from "../../lib/components/ContentWithSidebar.svelte";

    let preOrderInputElement;

    let preOrderInput: String = "";
    let inOrderInput: String = "";
    let postOrderInput: String = "";

    let pre: string[];
    let in_: string[];
    let post: string[];

    let changed = false;

    let trees: TreeNode<any>[] = [];
    let currentIndex = 0;

    let warning: string | null;
    let error: string | null;

    function parseInput(input: String): any[] {
        const res: any[] = [];
        for(let el of input.trim().split(/\s+/g)) {
            if (el.length > 0) {
                res.push(el);
            }
        }
        return res;
    }

    function onChanged() {
        changed = true;
    }

    function onSubmit() {
        changed = false;
        warning = null;
        error = null;

        try {
            pre = parseInput(preOrderInput);
            in_ = parseInput(inOrderInput);
            post = parseInput(postOrderInput);

            if (pre.length > 0 && in_.length > 0) {
                if (arraysContainTheSameElements(pre, in_)) {
                    console.log("Building tree from pre- and inorder");
                    trees = buildTreePreIn(pre, in_);
                    console.log(trees);

                    if (post.length > 0) {
                        const t = trees.filter((t) => arraysEqual(t.postOrderTraversal(), post));
                        if (t.length === 0) {
                            warning = "The postorder traversal you entered does not match with the given pre- &" +
                                " inorder traversals.\nThe tree has been constructed using pre- & " +
                                "inorder only.";
                        } else {
                            trees = t;
                        }
                    }
                } else {
                    error = "Pre- and inorder traversals do not contain the same elements.";
                }
            } else if (in_.length > 0 && post.length > 0) {
                if (arraysContainTheSameElements(in_, post)) {
                    console.log("Building tree from in- and postorder");
                    trees = buildTreeInPost(in_, post);
                    console.log(trees);
                } else {
                    error = "In- and postorder traversals do not contain the same elements."
                }
            } else {
                error = "Please supply the inorder traversal and one of pre- and postorder.";
            }
        } catch (e) {
            if (e instanceof TreeConstructionError) {
                error = e.message;
            }
        }

        if (error != null) {
            trees = [];
        }
    }

    function focusInput() {
        console.log(preOrderInputElement)
        preOrderInputElement.focus();
    }
</script>

<style lang="sass">
    @import "../../style/constants"

    .form-table
      border-collapse: collapse

      td
        padding: 1rem

        &:first-child
          text-align: right

      button
        width: 100%
        padding: 15px
        text-transform: uppercase
        letter-spacing: 1px
        font-size: 1em

    .subnote
      font-size: 0.6em
      opacity: 0.7

    .error
      background: transparentize(red, 0.9)
      border: red 1px solid
      padding: 15px
      border-radius: 5px
      text-align: left
      max-width: 320px

    .warning
      background: transparentize(darkorange, 0.9)
      border: darkorange 1px solid
      padding: 15px
      border-radius: 5px
      text-align: left
      max-width: 320px

    .container
      display: flex

      @media(max-width: $MOBILE_BREAKPOINT)
        flex-direction: column

      >*:last-child
        flex-grow: 1

      .sidebar
        box-sizing: border-box
        background: $SIDEBAR_BACKGROUND
        color: white
        padding: 15px
        min-height: 100vh
        height: 100%
        display: flex
        flex-direction: column

        @media(max-width: $MOBILE_BREAKPOINT)
          width: 100%
          height: unset
          min-height: unset

    .main
      height: 100vh
      display: flex
      flex-direction: column

      .empty-state
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: #a1a1a1
        text-align: center

      .output
        flex-grow: 1
        flex-shrink: 1
        max-height: calc(100% - 40px)
        display: flex
        justify-content: center
        padding: 25px
        box-sizing: border-box

        @media(max-width: $MOBILE_BREAKPOINT)
          height: unset
          width: 100%

        :global(svg), :global(>div)
          height: 100%
          width: 100%

          @media(max-width: $MOBILE_BREAKPOINT)
            height: unset
</style>

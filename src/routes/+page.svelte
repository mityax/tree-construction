<div class="container">
    <div class="form sidebar">
        <h1 style="text-align: center">Tree constructor</h1>
        <table class="form-table">
            <tr>
                <td>
                    <label><b>Pre</b>order:</label><br>
                </td>
                <td>
                    <ClearableInput bind:value={preOrderInput} on:input={onChanged} placeholder={trees[currentIndex]?.preOrderTraversal()?.join(" ") || ""} />
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
                    {#if error}
                    <div class="error">
                        { error }
                    </div>
                    {/if}
                </td>
            </tr>
            <tr>
                <td colspan="2"><button on:click={onSubmit} disabled="{!changed}">Start</button></td>
            </tr>
        </table>
    </div>

    <div class="output">
        {#if trees.length > 0}
            <Switcher numberOfOptions={trees.length} bind:currentIndex={currentIndex}>
                <Tree tree={trees[currentIndex]} />
            </Switcher>
        {/if}
    </div>
</div>

<script lang="ts">
    import {buildTreeInPost, buildTreePreIn, TreeNode} from "../lib/tree";
    import Tree from "../lib/components/Tree.svelte";
    import ClickToCopy from "../lib/components/ClickToCopy.svelte";
    import ClearableInput from "../lib/components/ClearableInput.svelte";
    import Switcher from "../lib/components/Switcher.svelte";
    import {arraysContainTheSameElements} from "../lib/utils";

    let preOrderInput: String = "";
    let inOrderInput: String = "";
    let postOrderInput: String = "";

    let changed = false;

    let trees: TreeNode<any>[] = [];
    let currentIndex = 0;

    let error: String;

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
        error = null;

        const pre = parseInput(preOrderInput);
        const in_ = parseInput(inOrderInput);
        const post = parseInput(postOrderInput);

        if (pre.length > 0 && in_.length > 0) {
            if (arraysContainTheSameElements(pre, in_)) {
                console.log("Building tree from pre- and inorder");
                trees = buildTreePreIn(pre, in_);
                console.log(trees);
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

        if (error != null) {
            trees = [];
        }
    }
</script>

<style lang="sass">
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
      max-width: 100%
      text-align: left

    .container
      display: flex

      >*:last-child
        flex-grow: 1

      .sidebar
        box-sizing: border-box
        background: #545454
        color: white
        padding: 25px
        height: 100vh
        width: 420px

      .output
        height: 100vh
        display: flex
        justify-content: center
        padding: 25px

        :global(svg)
          width: 500px
</style>


<div class="avl-analyzer">
    <h4>AVL Analyzer</h4>

    <p>
        This tree is {avlTree.every((node) => node.isBalanced()) ? '' : 'not'} balanced.
    </p>
</div>

<script lang="ts">
    import {TreeNode} from "../tree";
    import {AVLTreeNode} from "../avl_tree";

    export let tree: TreeNode<any>;

    $: avlTree = AVLTreeNode.fromTree(tree);


</script>

<style lang="sass">
    .avl-analyzer
      background: rgba(0, 128, 128, 0.2)
      border: teal solid 1px
      border-radius: 15px
      padding: 25px

</style>

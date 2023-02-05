
<code on:click={selectContent} bind:this={element}>
    <slot />
</code>

<script lang="ts">
    let element;

    function selectContent() {
        selectElementText(element, window);
    }

    function selectElementText(el, win) {
        win = win || window;
        let doc = win.document, sel, range;
        if (win.getSelection && doc.createRange) {
            sel = win.getSelection();
            range = doc.createRange();
            range.selectNodeContents(el);
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (doc.body.createTextRange) {
            range = doc.body.createTextRange();
            range.moveToElementText(el);
            range.select();
        }
    }
</script>

<style lang="sass">
  code
    background: rgba(0, 0, 0, 0.15)
    border-radius: 2px
    padding: 1px 5px
</style>

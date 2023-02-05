
<svg viewBox="0 0 {nodes.width + 40} {nodes.height + 40}">
    <g transform="translate(20, 20)">
        {#each nodes.nodes as node}
            <circle cx={node.x} cy={node.y} r={nodeSize/2} fill="none" stroke="black" />
            <text x={node.x} y={node.y} dominant-baseline="middle" text-anchor="middle">{ node.content }</text>
        {/each}

        {#each nodes.lines as line}
            <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="black" />
        {/each}
    </g>
</svg>

<script lang="ts">
    import {TreeNode} from "../tree";

    export let tree: TreeNode<any>;

    let nodes;

    const nodeSize = 20;
    const vMargin = 20;
    const hMargin = 20;

    type NodeDisplay = {x: number, y: number, content: any};
    type LineDisplay = {x1: number, y1: number, x2: number, y2: number};

    function buildSubtree(x, y, node): {width: number, height: number, nodes: NodeDisplay[], lines: LineDisplay[]} | null {
        if (node === null) {
            return null;
        }

        const lines: LineDisplay[] = [];

        const leftSubTree = buildSubtree(x, y, node.left);
        let leftOffset = leftSubTree ? leftSubTree.width : 0;
        let middleMargin = (leftOffset > 0 ? hMargin : 0);

        const rightSubTree = buildSubtree(x + (leftOffset || nodeSize) + middleMargin, y, node.right);

        const currentNodePos = {
            x: x + leftOffset + middleMargin / 2 + nodeSize / 2,
            y: y + nodeSize / 2,
        }

        // Draw line to left subtree
        if (leftSubTree) {
            lines.push({
                x1: currentNodePos.x,
                y1: y + nodeSize,
                x2: leftSubTree.nodes[0].x,
                y2: y + nodeSize + vMargin,
            });
        }

        // Draw line to right subtree
        if (rightSubTree) {
            lines.push({
                x1: currentNodePos.x,
                y1: y + nodeSize,
                x2: rightSubTree.nodes[0].x,
                y2: y + nodeSize + vMargin,
            })
        }

        // Move down subtree lines
        for (let line: LineDisplay of [...(leftSubTree?.lines || []), ...(rightSubTree?.lines || [])]) {
            line.y1 += nodeSize + vMargin;
            line.y2 += nodeSize + vMargin;
            lines.push(line);
        }

        // Move down subtree nodes
        for (let node: NodeDisplay of [...(leftSubTree?.nodes || []), ...(rightSubTree?.nodes || [])]) {
            node.y += nodeSize + vMargin;
        }

        const currentNode: NodeDisplay = {
            content: node.data,
            x: currentNodePos.x,
            y: currentNodePos.y,
        };

        return {
            width: (((leftSubTree?.width || 0) + (rightSubTree?.width || 0)) || (nodeSize - hMargin)) + hMargin,
            height: nodeSize + vMargin + Math.max(leftSubTree?.height || 0, rightSubTree?.height || 0),
            nodes: [
                currentNode,
                ...(leftSubTree?.nodes || []),
                ...(rightSubTree?.nodes || []),
            ],
            lines: lines,
        }
    }

    $: nodes = buildSubtree(0, 0, tree);
</script>

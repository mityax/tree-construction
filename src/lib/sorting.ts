import type {RecursionObserver} from "./recursion_observer";
import {RecursionNode} from "./recursion_observer";

export type OnStepCallback<T> = (items: T[], changedIndexes: number[], description: string) => void;


export function selectionSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];

    for (let i = 0; i<items.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < items.length; j++) {
            if (items[j] < items[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            swap(items, i, minIndex);
            onChanged?.call(this, [...items], [i, minIndex], "Swapped items to move minimum in unsorted partition to the end of the sorted partition.");
        } else {
            onChanged?.call(this, [...items], [], "Changed nothing because minimum is already at the beginning of the unsorted partition.");
        }
    }

    return items;
}

export function bubbleSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];

    for (let i=items.length; i > 0; i--) {
        let hasSwapped = false;

        for (let j = 0; j < i - 1; j++) {
            if (items[j] > items[j + 1]) {
                swap(items, j, j + 1);
                onChanged?.call(this, [...items], [j, j + 1], "Swapped items")
                hasSwapped = true;
            }
        }

        if (!hasSwapped) break;
    }

    return items;
}

export function insertionSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];

    for (let i = 1; i < items.length; i++) {
        let current = items[i];
        let j = i - 1;
        const changedIndexes = [];

        // This loop moves all items to the left of `i` one position to the right until it reaches an
        // item that's not greater than `current` anymore:
        while (j >= 0 && items[j] > current) {
            items[j + 1] = items[j];  // shift the element at the jth position one position to the right
            changedIndexes.push(j+1);
            j--;
        }

        // Move `current` to the position that has been `freed` by moving the other items to the right:
        items[j + 1] = current;
        if (changedIndexes.length > 0) {
            changedIndexes.push(j + 1)
        }

        onChanged?.call(
            this,
            [...items],
            changedIndexes,
            changedIndexes.length > 0
                ? "Shifted " + (changedIndexes.length - 1) + " items to the right to insert \"" + items[j+1] + "\" before them."
                : "Changed nothing because \"" + current + "\" is already at the right place."
        );
    }
    return items;
}

export function shakerSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];

    let start = 0, end = items.length - 1;
    let hasChanged = true;

    while (start != end && hasChanged) {
        hasChanged = false;

        for (let i = start; i < end; i++) {
            if (items[i] > items[i+1]) {
                swap(items, i, i+1);
                onChanged?.call(this, [...items], [i, i+1], "Swapped items (forward run)");
                hasChanged = true;
            }
        }

        for (let i = end - 1; i >= 0; i--) {
            if (items[i] > items[i+1]) {
                swap(items, i, i+1);
                onChanged?.call(this, [...items], [i, i+1], "Swapped items (backward run)");
                hasChanged = true;
            }
        }

        start++;
        end--;
    }

    return items;
}

export function gnomeSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];

    for (let i = 0; i < items.length - 1; i++) {
        if (items[i] > items[i+1]) {
            swap(items, i, i+1);
            onChanged?.call(this, [...items], [i, i+1], "Swapped items");
            i -= 2;
        }
    }

    return items;
}

export function heapSort<T>(items: T[], onChanged: OnStepCallback<T> | undefined = undefined): T[] {
    items = [...items];
    const n = items.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(items, n, i);
    }

    // Heap sort
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end
        swap(items, 0, i);
        onChanged?.call(this, [...items], [0, i], "Moved current root to the end (swapped items)");

        // call max heapify on the reduced heap
        heapify(items, i, 0);
    }

    return items;

    function heapify(items: T[], n: number, i: number): void {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        // If left child is larger than root
        if (left < n && items[left] > items[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < n && items[right] > items[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            swap(items, i, largest);
            onChanged?.call(this, [...items], [0, i], "Swapped items (within `heapify`)");

            // Recursively heapify the affected subtree
            heapify(items, n, largest);
        }
    }
}

export function mergeSort<T>(items: T[], recursionObserver: RecursionObserver<T[], T[]> | undefined = undefined): T[] {
    // Base case: if the array has 0 or 1 element, it is already sorted
    if (items.length <= 1) {
        const node = new RecursionNode<T[], T[]>(
            [...items],
            [...items]
        );
        recursionObserver?.addChild(node);
        return items;
    }

    // Divide the array into two halves
    const middle = Math.floor(items.length / 2);
    const left = items.slice(0, middle);
    const right = items.slice(middle);

    const node = new RecursionNode<T[], T[]>([...items], []);

    // Recursively sort the two halves and merge them
    const res = merge(
        mergeSort(left, node),
        mergeSort(right, node),
    );

    node.result = [...res];
    recursionObserver?.addChild(node);

    return res;

    function merge(left: T[], right: T[]): T[] {
        let result: T[] = []; // The resulting sorted array
        let li = 0; // Index for the left half
        let ri = 0; // Index for the right half

        // While both halves still have elements to compare
        while (li < left.length && ri < right.length) {
            // Compare the elements at the current indices of the two halves
            if (left[li] < right[ri]) {
                result.push(left[li++]);
            } else {
                result.push(right[ri++]);
            }
        }

        // Add the remaining elements of the left or right half, if any and
        // return the resulting sorted array
        return [...result, ...left.slice(li), ...right.slice(ri)];
    }
}

export function quickSort<T>(items: T[], recursionObserver: RecursionObserver<T[], T[]> | undefined = undefined, useMedianAsPivot: boolean = false): T[] {
    items = [...items];

    if (items.length <= 1) {
        recursionObserver?.addChild(new RecursionNode<T[], T[]>([...items], [...items]));
        return items;
    }

    const node = new RecursionNode<T[], T[]>([...items], []);

    let [pivot, pivotIndex] = useMedianAsPivot ? getMedianElement(items) : [items[0], 0];
    items.splice(pivotIndex, 1);

    const left = items.filter((e) => e <= pivot);
    const right = items.filter((e) => e > pivot);

    const res = [
        ...quickSort(left, node, useMedianAsPivot),
        pivot,
        ...quickSort(right, node, useMedianAsPivot)
    ];

    node.result = [...res];
    recursionObserver?.addChild(node);

    return res;

    function getMedianElement(array: T[]): [T, number] {
        let first = array[0];
        let middle = array[Math.floor(array.length / 2)];
        let last = array[array.length - 1];
        if (first <= middle && middle <= last || last <= middle && middle <= first) {
            return [middle, Math.floor(array.length / 2)];
        } else if (middle <= first && first <= last || last <= first && first <= middle) {
            return [first, 0];
        } else {
            return [last, array.length - 1];
        }
    }
}


// Utils:
function swap<T>(items: T[], i: number, j: number) {
    const tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
}

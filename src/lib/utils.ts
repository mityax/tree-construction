export function arraysContainTheSameElements(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const counts = new Map();

    arr1.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));
    arr2.forEach((value) => counts.set(value, (counts.get(value) ?? 0) - 1));

    return Array.from(counts.values()).every((count) => count === 0);
}

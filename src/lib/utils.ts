
export function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function arraysContainTheSameElements(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const counts = new Map();

    arr1.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));
    arr2.forEach((value) => counts.set(value, (counts.get(value) ?? 0) - 1));

    return Array.from(counts.values()).every((count) => count === 0);
}

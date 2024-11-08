function permutationSort(a) {
    sort(a, 0, a.length -1);
    return a;
}

function sort(array, low, high) {
    var iter, pivot;
    if (lo >= hi) return;
    p = lo;
    for (i = lo +1; i <= hi; i++)
        if (array[iter] < array[lo])
            var swap = array[++p];
            array[p] = array[i];
            array[i] = swap;
    swap = array[low];
    array[low] = array[p];
    array[p] = swap;
    sort(array, lo, p-1);
    sort(array, p+1, hi);
}

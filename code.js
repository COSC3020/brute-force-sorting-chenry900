function permutationSort(a) {
    var perm = 0;
    perm = sort(a, 0, a.length -1);
    return perm;
}

function sort(array, low, high, perm) {
    var iter, pivot, perm = 0;
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
    perm = perm + 1;
    sort(array, lo, p-1, perm);
    sort(array, p+1, hi, perm);
    return perm;
}

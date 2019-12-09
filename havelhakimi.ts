const alhakimi = (sortedGradfolgen: number[]) => {
    const max = sortedGradfolgen[sortedGradfolgen.length - 1];
    const last = sortedGradfolgen.length-1;
    //  0 1 2 3
    // (2,2,2,3) -> (1,1,1)
    while (sortedGradfolgen[last] != 0) {
        for (let i = last-1; i > last - max - 1; i--) {
            const gradfolge = sortedGradfolgen[i];
            sortedGradfolgen[i]--;
            
            if (sortedGradfolgen[i] <= 0) {
                sortedGradfolgen.splice(i, 1);
            }
        }
        sortedGradfolgen.sort();
    }

    return sortedGradfolgen;
};
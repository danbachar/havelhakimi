const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
(() => {
const printArr =(arr: number[], iterator = 0) => {
    let st = "[";
    arr.map(num => st += num + ",");
    st = st.slice(0, st.length-1); //remove last comma
    st += "]"
    console.log(iterator + ": " + st);
    console.log();
}

const havelhakimi = (sortedGradfolgen: number[]) => {
    let lastIndex = sortedGradfolgen.length - 1, max = sortedGradfolgen[lastIndex];
    // [2,2,2,2,2,3,3,4,4] -> (0,0,0)

    console.log("initial gradfolge array:");
    printArr(sortedGradfolgen);

    const copiedSortedGradfolgen = [...sortedGradfolgen];
    
    let iterator=0;
    while (copiedSortedGradfolgen[lastIndex] != 0) {
        copiedSortedGradfolgen.pop();

        for (let i = lastIndex-1; i > lastIndex - max - 1; i--) {
            copiedSortedGradfolgen[i]--;
            
            if (copiedSortedGradfolgen[i] < 0) {
                return false;
            }
        }
        copiedSortedGradfolgen.sort();
        printArr(copiedSortedGradfolgen, ++iterator);
        
        lastIndex = copiedSortedGradfolgen.length - 1, max = copiedSortedGradfolgen[lastIndex];
    }

    return true;
};

rl.question('input aufsteigende Gradfolgen array, natural numbers only: ', (arr: string) => {
    let parsedArr: number[] = [];
    for (let index = 0; index < arr.length; index++) {
        const char = arr[index];

        if (char.match(/\d/)) {
            let num = parseInt(char);
            parsedArr.push(num);
        }
    }

    parsedArr.sort();
    console.log(`parsed array is ${parsedArr.toString()}`);

    const res = havelhakimi(parsedArr);
    // TODO: does portray or _may_ portray?
    console.log(res == false ? parsedArr + " doesn't portray a simple graph." : parsedArr + " does portray a simple graph");
  
    rl.close();
    return;
  });
})();
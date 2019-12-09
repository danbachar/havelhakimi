const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const havelhakimi = (sortedGradfolgen: number[]) => {
    const max = sortedGradfolgen[sortedGradfolgen.length - 1];
    const last = sortedGradfolgen.length-1;
    // (1,2,2,3,3) -> (1,1,1,2)
    while (sortedGradfolgen[last] != 0) {
        console.log(`${last-1}>${last-max-1}: ${last-1 > last-max-1}`);
        for (let i = last-1; i > last - max - 1; i--) {
            console.log(`${i}:${sortedGradfolgen[i]}`);
            sortedGradfolgen[i]--;
            
            if (sortedGradfolgen[i] <= 0) {
                sortedGradfolgen.splice(i, 1);
            }
        }
        sortedGradfolgen.sort();
    }

    return sortedGradfolgen;
};

rl.question('input aufsteigende Gradfolgen array, natural numbers only: ', (arr: string) => {
    // TODO: Log the answer in a database
    console.log(`processing for '${arr}'`);
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
    for (let index = 0; index < parsedArr.length; index++) {
        const element = parsedArr[index];
        console.log(`${index}:${element}`);
        
    }
    console.log(havelhakimi(parsedArr));
  
    rl.close();
  });
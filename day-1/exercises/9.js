// {
//     let blockValue = 1;
//     const blockConstant = 2;
//     var functionValue = 3;
// }

// console.log(blockValue); // error
// console.log(blockConstant); // error
// console.log(functionValue); // 3

function check() {
    {
        let blockValue = 1;
        const blockConstant = 2;
        var functionValue = 3;
    }

    // console.log(blockValue); // error
    // console.log(blockConstant); // error
    console.log(functionValue);
}

check(); // 3

// console.log(functionValue); // error
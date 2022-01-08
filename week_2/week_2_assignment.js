"use strict";

//要求一：函式與流程控制

function calculate(min,max){

    // 請用你的程式補完這個函式的區塊
    let sum = 0
    for( let i = min; i <= max; i++){
        sum += i
    }
    return sum
}
calculate(1, 3); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8); // 你的程式要能夠計算 4+5+6+7+8，最後印出 30

//要求二：Python 字典與列表、JavaScript 物件與陣列

function avg(data){
    
    // 請用你的程式補完這個函式的區塊
    let sumSalaries = 0;
    data.employees.forEach((item)=>{
        sumSalaries += item.salary
    });

    data.count = data.employees.length

    return sumSalaries / data.count
}

avg({
    "count":3,
    "employees":[
    {
        "name":"John",
        "salary":30000
    },
    {   
        "name":"Bob",
        "salary":60000
    },
    {
        "name":"Jenny",
        "salary":50000
    },
    ]
}); // 呼叫 avg 函式

//要求三：演算法

function maxProduct(nums){

    // 請用你的程式補完這個函式的區塊
    let result = []
    for (let i of nums){
        for (let j of nums){
            if (i === j) continue;
            result.push(i * j)
        }
    }
    return Math.max(...result)
}

maxProduct([5, 20, 2, 6]) // 得到 120
maxProduct([10, -20, 0, 3]) // 得到 30
maxProduct([-1, 2]) // 得到 -2
maxProduct([-1, 0, 2]) // 得到 0
maxProduct([-1, -2, 0]) // 得到 2

//要求四 ( 請閱讀英文 )：演算法

function twoSum(nums, target){

    // your code here
    let indices = [];
    for (let i of nums){
        for (let j of nums){
            if (i === j){
                continue;
                } else if ( i + j === target){
                    indices.push(nums.indexOf(i));
                    } 
                
        };
    };
    return indices;

}

let result=twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9

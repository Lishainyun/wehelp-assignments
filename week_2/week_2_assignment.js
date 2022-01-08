"use strict";

//要求一：函式與流程控制

function calculate(min,max){
    
    let sum = 0
    for( let i = min; i <= max; i++){
        sum += i
    }
    return sum
}


//要求二：Python 字典與列表、JavaScript 物件與陣列

function avg(data){
    
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
}); 

//要求三：演算法

function maxProduct(nums){
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
console.log(result);
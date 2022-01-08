#要求一：函式與流程控制

def calculate(min, max):

    # 請用你的程式補完這個函式的區塊
    sum = 0;
    for i in range(min,max+1):
        sum += i;
    print(sum)

calculate(1, 3) # 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8) # 你的程式要能夠計算 4+5+6+7+8，最後印出 30

#要求二：Python 字典與列表、JavaScript 物件與陣列

def avg(data):
    
# 請用你的程式補完這個函式的區塊
    data["count"] = len(data["employees"]);
    sumSalaries = 0;
    for x in range(0,len(data["employees"])):
        sumSalaries += data["employees"][x]["salary"];
    print(sumSalaries / data["count"])


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
}) # 呼叫 avg 函式



#要求三：演算法

def maxProduct(nums):

# 請用你的程式補完這個函式的區塊
    sum = [];
    for i in nums:
        for j in nums:
            if i  == j :
                continue;
            else:
                sum.append(i * j);
    print(max(sum))

maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
maxProduct([-1, 2]) # 得到 -2
maxProduct([-1, 0, 2]) # 得到 0
maxProduct([-1, -2, 0]) # 得到 2


#要求四 ( 請閱讀英文 )：演算法

def twoSum(nums, target):

# your code here
    list1 = []
    for i in nums:
        for j in nums:
            if i == j :
                continue;
            elif (i + j) == target:
                list1.append(nums.index(i));
    return list1;

result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9


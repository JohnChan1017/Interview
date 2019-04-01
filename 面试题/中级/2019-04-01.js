/**
 * 请把两个数组 ['A1','A2','B1','B2','C1','C2','D1','D2'] 和 ['A','B','C','D'] 合并成 
 * ['A1','A2','A','B1','B2','B','C1','C2','C','D1','D2','D']
 */

 var arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
 var arr2 = ["A", "B", "C", "D"];

 var arr3 = arr1.concat(arr2)

//  console.log(arr3.sort())

 for (var i=0,len=arr1.length;i<len;i++){
   console.log(arr1[i])
   if(i%2 != 0){
    console.log(arr1[i])
   }
 }


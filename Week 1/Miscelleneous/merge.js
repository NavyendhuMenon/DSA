
function merge (nums1, m, nums2, n){

    let i = m-1;
    let j = n-1;
    let k = m+n-1;
   
     while (i>=0 && j>=0){
     
      if(nums1[i]>nums2[j]){
      nums1[k] = nums1[i];
      i--;
      
      }else{
      
      nums1[k] = nums2[j];
      j--;
      
      }
      
      k--;
    }
   
    while(j>=0){
    
     nums1[k] = nums2 [j];
     j--;
     k--;
     
    }
   
}
   
// Test case 1
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log("Merged array:", nums1);  // Expected Output: [1, 2, 2, 3, 5, 6]

// Test case 2
nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log("Merged array:", nums1);  // Expected Output: [1]

// Test case 3
nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log("Merged array:", nums1);  // Expected Output: [1]

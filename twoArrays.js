var twoSum = function(nums, target) {
    var indexes =[];
    for (var i=0; i<nums.length;i++){
        for (var k =i+1; k<nums.length;k++){
            if(nums[i]+nums[k]===target){
                indexes.push(i)
                indexes.push(k)
                
            }

        }
    }
    return indexes

};
twoSum([2, 7, 11, 15], 9)

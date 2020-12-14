var topKFrequent = function(nums, k) {
  const freqMap = new vuaMap();
  const bucket = new vuaVector();
  const result = new vuaVector();

  for(let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for(let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for(let i = bucket.length-1; i >= 0; i--) {
    if(bucket[i]) result.push(...bucket[i]);
    if(result.length === k) break;
  }
  return result;
};

topKFrequent([1,1,1,2,2,3], 2);

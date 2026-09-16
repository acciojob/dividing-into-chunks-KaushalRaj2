const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result=[];
	let subArray=[];
	let sum=0;

	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
		if(sum<=n){
			subArray.push(arr[i]);
		}else{
			result.push(subArray);
			subArray=[];
			subArray.push(arr[i]);
			sum=arr[i];
		}
	}
	if(subArray.length>0){
	result.push(subArray);
	}

	return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

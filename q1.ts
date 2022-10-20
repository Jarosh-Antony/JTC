let alternate=function(arr:number[]){
	
	let st:number[]=[...arr];
	const l=arr.length

	for(let i=1;i<=l;i++){
		if(i*2<=l)arr[i*2-1]=st[i-1];
		else arr[(l-i)*2]=st[i-1];
	}
	return arr;
}



let arr:number[]=[1,2,3,4,5,6,7,8,9,10];
arr=alternate(arr);
console.log(arr);
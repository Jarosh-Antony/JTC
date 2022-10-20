class PwA{
	product:string;
	addon:string;
	rate:number;
	qty=0;
	
	constructor(p:string, a:string, r:number){
		this.product=p;
		this.addon=a;
		this.rate=r;
	}
	
	format(){
		return `${this.product} with ${this.addon} #${this.qty} each for ${this.rate}`;
	}
}

let pwas:PwA[]=[];
let total:number=0;

pwas.push(new PwA('Espresso','Milk',60));
pwas.push(new PwA('Espresso','Cream',75));
pwas.push(new PwA('Espresso','Latte',100));

pwas.push(new PwA('Cappuccino','Milk',80));
pwas.push(new PwA('Cappuccino','Cream',90));
pwas.push(new PwA('Cappuccino','Latte',125));

pwas.push(new PwA('Latte','Milk',100));
pwas.push(new PwA('Latte','Cream',125));
pwas.push(new PwA('Latte','Latte',150));

let first=true;

let bill=function(i){
	
	const bill_list=document.getElementById('bill');
	
	if(first){
		
		
		const tr_h=document.createElement("tr");
	
		const th_p=document.createElement("th");
		const th_q=document.createElement("th");
		const th_r=document.createElement("th");
		const th_a=document.createElement("th");
		
		th_p.innerHTML='Product';
		th_q.innerHTML='#Cups';
		th_r.innerHTML='Rate';
		th_a.innerHTML='Amount';
		
		tr_h.appendChild(th_p);
		tr_h.appendChild(th_q);
		tr_h.appendChild(th_r);
		tr_h.appendChild(th_a);
		
		bill_list.appendChild(tr_h);
		first=false;
	}
	
	if(document.getElementById(`${i}`)){
		const tr_pl=document.getElementById(`${i}`);
		
		const td_q=document.createElement("td");
		const td_a=document.createElement("td");
		td_q.innerHTML=`${pwas[i].qty}`;
		td_a.innerHTML=`${pwas[i].rate*pwas[i].qty}`;
		
		const q = tr_pl.children[1];
		tr_pl.replaceChild(td_q, q);
		
		const a = tr_pl.children[3];
		tr_pl.replaceChild(td_a, a);
		
		
	}
	
	else {
		const tr_pl=document.createElement("tr");
		tr_pl.setAttribute("id", `${i}`);
		
				
		const td_p=document.createElement("td");
		const td_q=document.createElement("td");
		const td_r=document.createElement("td");
		const td_a=document.createElement("td");
		
		td_p.innerHTML=`${pwas[i].product} with ${pwas[i].addon}`;
		td_q.innerHTML=`${pwas[i].qty}`;
		td_r.innerHTML=`${pwas[i].rate}`;
		td_a.innerHTML=`${pwas[i].rate*pwas[i].qty}`;
		
		tr_pl.appendChild(td_p);
		tr_pl.appendChild(td_q);
		tr_pl.appendChild(td_r);
		tr_pl.appendChild(td_a);
		
		bill_list.appendChild(tr_pl);
	}
	
	const T=document.getElementById('total');
	T.innerHTML=`Total = ${total}`
	
	const L=document.getElementById('links');
	L.innerHTML=`
		<a href="q2makePayment.html">Make Payment</a><br>
		<a href="q2coffee.html">Reset</a>`
	;
	
}



let placeOrder=function(){
	let p=parseInt((<HTMLInputElement>document.querySelector('input[name="product"]:checked')).value);
	let a=parseInt((<HTMLInputElement>document.querySelector('input[name="addon"]:checked')).value);
	let q=parseInt((<HTMLInputElement>document.getElementById('quantity')).value);
	
	if(q>0){
		let i:number=p*3+a;
		pwas[i].qty+=q;
		
		total+=(q*pwas[i].rate);
		bill(i);
	}
}


let show=function(){
	let p=parseInt((<HTMLInputElement>document.querySelector('input[name="product"]:checked')).value);
	let a=parseInt((<HTMLInputElement>document.querySelector('input[name="addon"]:checked')).value);
	let i:number=p*3+a;
	const r=document.getElementById('rate');
	r.innerHTML=`${pwas[i].rate}`;
}

let display=function(){
	const product_listing=document.getElementById('product-listing');
	const tr_h=document.createElement("tr");
	
	const th_p=document.createElement("th");
	const th_r=document.createElement("th");
	th_p.innerHTML='Product';
	th_r.innerHTML='Rate';
	tr_h.appendChild(th_p);
	tr_h.appendChild(th_r);
	product_listing.appendChild(tr_h);

	for(let i in pwas){
		const tr_pl=document.createElement("tr");
		
		const td_p=document.createElement("td");
		const td_r=document.createElement("td");
		td_p.innerHTML=`${pwas[i].product} with ${pwas[i].addon}`;
		td_r.innerHTML=`${pwas[i].rate}`;
		
		tr_pl.appendChild(td_p);
		tr_pl.appendChild(td_r);
		
		product_listing.appendChild(tr_pl);
		
	}
}

show();
display();
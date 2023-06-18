const form = document.getElementById('payForm');
form.addEventListener("submit", payNow);

function payNow(e) {
 e.preventDefault();
 
    FlutterwaveCheckout({
      public_key: "Add Your Public-Key",
      tx_ref: "Kenechukwu_"+Math.floor((Math.random() * 1000000000) + 1),
      amount: document.getElementById("amount").value,
      currency: "USD",
	  
      payment_options: "card,mobilemoney,ussd",
	  
      customer: {
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        name: document.getElementById("fullName").value,
      },
	  
      callback: (data)=> { // specified callback function
        //console.log(data);
		  const reference = data.tx_ref;
      alert('Payment complete! Reference: ' + reference);
      },
	  
      customizations: {
        title: "Kenechukwu Mall",
        description: "FlutterWave Integration in Javascript."
		
       // logo: "flutterwave/usecover.gif",
      },
    });
  }
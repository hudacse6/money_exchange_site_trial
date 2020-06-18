var $s1 = $( '#s1' ),
		$s2 = $( '#s2' ),
    $options = $s2.find( 'option' );
    
$s1.on( 'change', function() {
	$s2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );

function handleSelect(elm)
{
window.location = elm.value+".php";
}

// $(document).ready(function(){
//   $(":option").dblclick(function(){
//     $(this).hide();
//   });
// });



function calculation() 
{
  var amount = document.getElementById("amount").value;
  var currency1 = document.getElementById("select1").value;
  var currency2 = document.getElementById("select2").value;

  switch (currency1 + " " + currency2) 
  {
    //   Start: This is for bkash & paypal
    case "bKash bKash":
      var y = amount * 1;
      document.getElementById("result").innerHTML =
        " bKash to bKash transaction not possbile";
      break;

    case "bKash Paypal":
      var x = (currency2 = 0.011759);
      var y = amount * x;
      document.getElementById("result").innerHTML =
        "$ " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
      break;

    case "Paypal Paypal":
      var y = amount * 1;
      document.getElementById("result").innerHTML =
        " Paypal to Paypal transaction not possbile";
      break;

    case "Paypal bKash":
      var x = (currency2 = 0.011759);
      var y = amount / x;
      document.getElementById("result").innerHTML =
        "bKash; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
      break;
    //   End: This is for bkash & paypal

    //   Start: This is for bkash & Skrill
    case "bKash bKash":
      var y = amount * 1;
      document.getElementById("result").innerHTML =
        "bKash; " +
        parseFloat(Math.round(y * 100) / 100).toFixed(2) +
        " ??" +
        " You do not select any currency / amount";
      break;

    case "bKash Skrill":
      var x = (currency2 = 0.01031);
      var y = amount * x;
      document.getElementById("result").innerHTML =
        "$ " + parseFloat(Math.round(y * 100) / 100).toFixed(2) + " Skrill";
      break;

    case "Skrill Skrill":
      var y = amount * 1;
      document.getElementById("result").innerHTML =
        "$ " +
        parseFloat(Math.round(y * 100) / 100).toFixed(2) +
        " ??" +
        " You do not select any currency / amount";
      break;

    case "Skrill bKash":
      var x = (currency2 = 0.01031);
      var y = amount / x;
      document.getElementById("result").innerHTML =
        "bKash: " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
    //   End: This is for bkash & Skrill
  }
}


$(document).ready(function(){
  $("button").click(function(){
    $(".lookWrap").wrap("<div></div>");
  });
});

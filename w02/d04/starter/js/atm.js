$(function() {

var total = 0;

	$(function cdeposit() {
	
		$('#depositChecking').on('click', function() {
			
			var newCheckBalance = parseInt($('#amountChecking').val());

			total = newCheckBalance + total;

			$('#checkingBalance').text('$' + total);

		});

		$('#depositChecking').on('click', function() {

			$('#amountChecking').val("");
		
		});

	});

	$(function cwithdrawal() {
			
		$('#withdrawChecking').on('click', function() {

			if (parseInt($('#amountChecking').val()) > ($('#checkingBalance').val())){

			return false;
			}

			else { 
		
				var updatedCheckBalance = parseInt($('#amountChecking').val()); 
		
				total = total - updatedCheckBalance;
			
				$('#checkingBalance').text('$' + total);
			}

		});

	});

	$(function sdeposit() {
	
		$('#depositSavings').on('click', function() {
			
			var newSaveBalance = parseInt($('#amountSavings').val());

			total = newSaveBalance + total;

			$('#savingsBalance').text('$' + total);

		});

		$('#depositSavings').on('click', function() {

			$('#amountSavings').val("");
		});

	});

	$(function swithdrawal() {
				
		$('#withdrawSavings').on('click', function() {

			if (parseInt($('#amountSavings').val()) > ($('#savingsBalance').val())){

				return false;
			}

			else { 
			
				var updatedSaveBalance = parseInt($('#amountSavings').val()); 
			
				total = total - updatedSaveBalance;
				
				$('#savingsBalance').text('$' + total);
			}

		});

/*		change color: 

			if ($('#savingsBalance').val(0))(function () {

				$('.account').css('background-color: #F52F4F, color: #FFFFFF');

			});
*/
	}); 

});

//Begin with the document ready function

	//Begin work on the Checking Account

		//Checking account deposit function

			//Get value from the amountChecking input field

			//On click of the depositChecking button

				//Take that value and add it to the existing value in the checkingBalance div

		//Checking account withdrawl funtion 

			//Get value from the amountChecking input field
			
			//On click of the withdrawChecking button

				// If that value is greater than the value in the account ignore that action
				// In other words if this would put the account into a negative balance do not allow it

				//Else subtract that value from the current amount in the checking account



	//Begin work on the Savings account

		//Savings account deposit function

		 		//Get value from the amountSavings input field

		 		//On click of the depositSavings button

		 			//Take that value and add it to the existing value in the savingsBalance div


		//Savings account withdraw funtion 

		 		//Get value from the amountSavings input field
				
		 		//On click of the withdrawl button

		 			//If that value is greater than the value in the account ignore that action
		 			//In other words if this would put the account into a negative balance do not allow it

		 			//Else subtract that value from the current amount in the savings account



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts


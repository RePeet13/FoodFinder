console.log("RUNNING FF JAVASCRIPT");
console.log($("#list_events_page"));
console.log($("#add_event_page"));
console.log($("#event_detail_page"));
console.log($("#edit_event_page"));

console.log($("#list_badges_page"));
console.log($("#badge_detail_page"));

$(function() {
 // Handler for .ready() called.
	console.log("ready");

/* -- FOOD FUNCTIONS -- */

/* Pages */

	//Bind to the create so the food list page gets updated with the listing
//	$(document).on("pagebeforeshow", "#food_list_page", function(event, ui) {
	$("#food_list_page").bind("pagebeforeshow", function(event, ui) {
		console.log("pagebeforeshow");
	
		//Remove the old rows
		$( ".food_list_row" ).remove();
		
		var url = "api/food/"
		
		if ( $( "#radio-all" )[0].value === "off" ) {
			url = "api/current_food/"
		}
		
		//JQuery Fetch The New Ones
		$.ajax({
			url: url,
			dataType: "json",
	        async: false,
	        success: function(data, textStatus, jqXHR) {
				console.log(data);
	        	//Create The New Rows From Template
	        	$( "#food_list_row_template" ).tmpl( data ).appendTo( "#food_list" );
	        },
	        error: ajaxError
		});
		
		$("#food_list").listview("refresh");
	});
	
	//Bind the food detail page init text
	$("#food_detail_page").bind("pagebeforeshow", function(event, ui) {
//	$(document).on("pagebeforeshow", "#food_detail_page", function(event, ui) {
		console.log("Food Detail Page");
		var food_id = $.url().fparam("food_id");
		
		//Instead of passing around in JS I am doing AJAX so direct links work
		//JQuery Fetch The Event
		$.ajax({
			url: "api/food/"+food_id,
			dataType: "json",
	        async: false,
	        success: function(data, textStatus, jqXHR) {
				console.log(data);
				$( "#detail_page_edit_button" )[0].setAttribute("href", "#food_edit_page&food_id=" + data.food_id);
				
	       		$( "#food_detail_head_title" )[0].innerHTML = data.title;
	       		$( "#detail_title" )[0].innerHTML = data.title;
	       		$( "#detail_date" )[0].innerHTML = data.date;
	       		$( "#detail_location" )[0].innerHTML = data.location;
	       		$( "#detail_description" )[0].innerHTML = data.description;
	       		$( "#detail_lat_long" )[0].innerHTML = data.lat_long;
	       		$( "#detail_pic_url" )[0].setAttribute("src", data.pic_url);
	       		$( "#detail_date_modified" )[0].innerHTML = "Modified " + data.date_modified;
	       		$( "#detail_upvotes" )[0].innerHTML = data.upvotes;
	        },
	        error: ajaxError
		});
	});
	
	//Bind the edit page init text
//	$(document).on("pagebeforeshow", "#food_edit_page", function(event, ui) {
	$("#food_edit_page").bind("pagebeforeshow", function(event, ui) {
		console.log("Edit Food Page");
		var food_id = $.url().fparam("food_id");
		//Instead of passing around in JS I am doing AJAX so direct links work
		//JQuery Fetch The Event
		if (food_id) {
			//$( "#food_remove_button" )[0].setAttribute("href", "food_list_page&food_id="+food_id);
			$.ajax({
				url: "api/food/"+food_id,
				dataType: "json",
			    async: false,
			    success: function(data, textStatus, jqXHR) {
					console.log(data);
			   		$( "#food_edit_title" )[0].setAttribute("value", data.title);
			   		$( "#food_edit_title" )[0].setAttribute("placeholder", "");
			   		$( "#food_edit_date" )[0].setAttribute("value", data.date);
			   		$( "#food_edit_date" )[0].setAttribute("placeholder", "");
			   		$( "#food_edit_location" )[0].setAttribute("value", data.location);
			   		$( "#food_edit_location" )[0].setAttribute("placeholder", "");
			   		$( "#food_edit_description" )[0].setAttribute("value", data.description);
			   		$( "#food_edit_description" )[0].setAttribute("placeholder", "");
//			   		$( "#food_edit_lat_long" )[0].setAttribute("value", data.lat_long);
//			   		$( "#food_edit_lat_long" )[0].setAttribute("placeholder", "");
			   		$( "#food_edit_pic_url" )[0].setAttribute("value", data.pic_url);
			   		$( "#food_edit_pic_url" )[0].setAttribute("placeholder", "");
			    },
			    error: ajaxError
			});
		} else {
			//$( "#food_remove_button" )[0].setAttribute("href", "food_list_page");
			$( "#food_edit_title" )[0].setAttribute("value", "");
			$( "#food_edit_title" )[0].setAttribute("placeholder", "Short but descriptive title");
	   		$( "#food_edit_date" )[0].setAttribute("value", "");
	   		$( "#food_edit_date" )[0].setAttribute("placeholder", "YYYY-MM-DDTHH:MM");
	   		$( "#food_edit_location" )[0].setAttribute("value", "");
	   		$( "#food_edit_location" )[0].setAttribute("placeholder", "Short but descriptive location");
	   		$( "#food_edit_description" )[0].setAttribute("value", "");
	   		$( "#food_edit_description" )[0].setAttribute("placeholder", "Description of place and food");
//	   		$( "#food_edit_lat_long" )[0].setAttribute("value", "");
//	   		$( "#food_edit_lat_long" )[0].setAttribute("placeholder", "xx.xxxxx,xx.xxxxx");
	   		$( "#food_edit_pic_url" )[0].setAttribute("value", "");
	   		$( "#food_edit_pic_url" )[0].setAttribute("placeholder", "http://www.picurl.com/coolPic");
		}
	});
	
	//Bind the food add page clear text // TODO probably where all that stuff above should go..
//	$(document).on("pagebeforeshow", "#food_add_page", function(event, ui) {
	$("#food_add_page").bind("pagebeforeshow", function(event, ui) {
		console.log("Add Food Page");
		$("#food_add_title")[0].value = "";
	});
		
/* Buttons */
/*
	//Bind the add food page button
	$("#food_add_page_button").bind("click", function() {
//	$(document).on("pagebeforeshow", "#food_add_page_button", function(event, ui) {
		console.log("Add Button");
		$.ajax({
			url: "api/food",
			dataType: "json",
	        async: false,
			data: {"foodTitle": $("#food_add_title")[0].value},
			type: "POST",
	        error: ajaxError
		});
	});
*/

	//Bind the edit page save button
	$("#save_button").bind("click", function() {
//	$(document).on("pagebeforeshow", "#save_button", function(event, ui) {
		console.log("Save Button");
		var food_id = $.url().fparam("food_id");
		console.log("Food_Id " + food_id);
		
		console.log("foodTitle: " + $("#food_edit_title")[0].value);
		console.log("foodDate: " + $("#food_edit_date")[0].value+"T"+$("#food_edit_time")[0].value);
		console.log("foodLocation: " + $("#food_edit_location")[0].value);
		console.log("foodDescription: " + $("#food_edit_description")[0].value);
//		console.log("foodLatLong: " $("#food_edit_lat_long")[0].value);
		console.log("foodPicUrl: " + $("#food_edit_pic_url")[0].value);
		
		if (food_id) {
			console.log("cond was true..");
			$.ajax({
				url: "api/food/" + food_id,
				dataType: "json",
				async: false,
				data: {
					"foodTitle": $("#food_edit_title")[0].value,
					"foodDate": $("#food_edit_date")[0].value+"T"+$("#food_edit_time")[0].value,
					"foodLocation": $("#food_edit_location")[0].value,
					"foodDescription": $("#food_edit_description")[0].value,
	//				"foodLatLong": $("#food_edit_lat_long")[0].value,
					"foodPicUrl": $("#food_edit_pic_url")[0].value
				},
				headers: {"X-HTTP-Method-Override": "PUT"},
				type: "POST",
				error: ajaxError
			});
		} else {
			$.ajax({
				url: "api/food/",
				dataType: "json",
				async: false,
				data: {
					"foodTitle": $("#food_edit_title")[0].value,
					"foodDate": $("#food_edit_date")[0].value+"T"+$("#food_edit_time")[0].value,
					"foodLocation": $("#food_edit_location")[0].value,
					"foodDescription": $("#food_edit_description")[0].value,
					"foodPicUrl": $("#food_edit_pic_url")[0].value
				},
				type: "POST",
				error: ajaxError
			});
		}
		
	});
	
	//Bind the edit page remove button
	$("#food_remove_button").bind("click", function() {
		console.log("Remove Button");
		var food_id = $.url().fparam("food_id");
		console.log("removing " + food_id);
		
		$.ajax({
			url: "api/food/"+food_id,
			dataType: "json",
	        async: false,
			type: "DELETE",
	        error: ajaxError
		});
	});
	
	//Bind the upvote food page button
	$("#food_upvote_button").bind("click", function() {
		console.log("Upvote Button");
		var food_id = $.url().fparam("food_id");
		$.ajax({
			url: "api/upvote/" + food_id,
			dataType: "json",
	        async: false,
			type: "POST",
	        error: ajaxError
		});
		
		$( "#detail_upvotes" )[0].innerHTML = parseInt($( "#detail_upvotes" )[0].innerHTML) + 1;
	});
	
	//Bind the radio buttons on list food page
	$("#radio-all").bind("click", function() {
		console.log("All Radio Button Pressed");
		//Remove the old rows
		$( ".food_list_row" ).remove();
		
		//JQuery Fetch The New Ones
		$.ajax({
			url: "api/food/",
			dataType: "json",
	        async: false,
	        success: function(data, textStatus, jqXHR) {
				console.log(data);
	        	//Create The New Rows From Template
	        	$( "#food_list_row_template" ).tmpl( data ).appendTo( "#food_list" );
	        },
	        error: ajaxError
		});
		
		$("#food_list").listview("refresh");
	});
	
	//Bind the radio buttons on list food page
	$("#radio-active").bind("click", function() {
		console.log("Active Radio Button Pressed");
		//Remove the old rows
		$( ".food_list_row" ).remove();
		
		//JQuery Fetch The New Ones
		$.ajax({
			url: "api/current_food/",
			dataType: "json",
	        async: false,
	        success: function(data, textStatus, jqXHR) {
				console.log(data);
	        	//Create The New Rows From Template
	        	$( "#food_list_row_template" ).tmpl( data ).appendTo( "#food_list" );
	        },
	        error: ajaxError
		});
		
		$("#food_list").listview("refresh");
	});
	
	//Cleanup of URL so we can have better client URL support
	$("#food_edit_page").bind("pagehide", function() {
		$(this).attr("data-url",$(this).attr("id"));
		delete $(this).data()["url"];
	});

});

/******************************************************************************/

function ajaxError(jqXHR, textStatus, errorThrown){
	console.log("ajaxError "+textStatus+" "+errorThrown);
	$("#error_message").remove();
	$("#error_message_template").tmpl( {errorName: textStatus, errorDescription: errorThrown} ).appendTo( "#error_dialog_content" );
	$.mobile.changePage($("#error_dialog"), {
		transition: "pop",
		reverse: false,
		changeHash: false
	});
}

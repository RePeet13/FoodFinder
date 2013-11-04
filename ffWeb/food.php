<?php
	include 'db_helper.php';
	
	// TODO sort by date, then upvotes
	function listfood() {
		$dbQuery = sprintf("SELECT `food_id`, `date`, `gtid`, `title`, `location`, `description`, `pic_url`, `upvotes`, `lat_long`, `date_modified` FROM `food`");
		
		$result = getDBResultsArray($dbQuery);
		
		header("Content-type: application/json");
		echo json_encode($result);
	}
  
	function getFood($id) {
		$dbQuery = sprintf("SELECT `food_id`, `date`, `gtid`, `title`, `location`, `description`, `pic_url`, `upvotes`, `lat_long`, `date_modified` FROM `food` WHERE `food_id` =  '%s'", mysql_real_escape_string($id));
		//echo $dbQuery;
		$result = getDBResultRecord($dbQuery);
		
		header("Content-type: application/json");
		echo json_encode($result);
	}
	
	function addFood($foodDate, $foodTitle, $foodLocation, $foodDescription, $foodPicUrl, $foodLatLong) {
		// TODO only allow if uid is not empty
		$dbQuery = sprintf("INSERT INTO food (`date`, `gtid`, `title`, `location`, `description`, `pic_url`, `lat_long`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')", mysql_real_escape_string($foodDate), $_USER['uid'], mysql_real_escape_string($foodTitle), mysql_real_escape_string($foodLocation), mysql_real_escape_string($foodDescription), mysql_real_escape_string($foodPicUrl), mysql_real_escape_string($foodLatLong));
		echo "Query " . $dbQuery . "</br>";
		$result = getDBResultInserted($dbQuery,'food_id');
		
		header("Content-type: application/json");
		echo json_encode($result);
	}
	
	function deleteFood($id) {
		$dbQuery = sprintf("DELETE FROM food WHERE food_id = '%s'", mysql_real_escape_string($id));
		$result = getDBResultAffected($dbQuery);
		
		header("Content-type: application/json");
		echo json_encode($result);
	}
?>

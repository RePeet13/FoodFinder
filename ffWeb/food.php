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
	
	function currentFood() {
		$dbQuery = sprintf("SELECT `food_id`, `date`, `gtid`, `title`, `location`, `description`, `pic_url`, `upvotes`, `lat_long`, `date_modified` FROM `food` WHERE `date` >  CURRENT_TIMESTAMP()");
		//echo $dbQuery;
		$result = getDBResultsArray($dbQuery);
		
		header("Content-type: application/json");
		echo json_encode($result);
	}
	
	function upvoteFood($id) {
		$dbQuery = sprintf("UPDATE `food` SET `upvotes` = `upvotes`+1 WHERE `food_id` = '%s'", 
			mysql_real_escape_string($id));
		//echo $dbQuery;
		$result = getDBResultAffected($dbQuery);
		header("Content-type: application/json");
		echo json_encode($result);
	}
	
	function addFood($foodDate, $foodTitle, $foodLocation, $foodDescription, $foodPicUrl){//, $foodLatLong) {
		// TODO only allow if uid is not empty
		$dbQuery = sprintf("INSERT INTO food (`date`, `gtid`, `title`, `location`, `description`, `pic_url`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s')",
			mysql_real_escape_string($foodDate), 
			$_USER['uid'], 
			mysql_real_escape_string($foodTitle), 
			mysql_real_escape_string($foodLocation), 
			mysql_real_escape_string($foodDescription), 
			mysql_real_escape_string($foodPicUrl)
		);
		echo "Query " . $dbQuery;
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

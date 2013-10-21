
--
-- Database: `CONTRIB_honeybadgers`
--

-- --------------------------------------------------------

--
-- Table Structure
--


CREATE TABLE IF NOT EXISTS `food` (
  `food_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `gtid` varchar(25) NOT NULL,
  `title` varchar(75) NOT NULL,
  `location` varchar(75) NOT NULL,
  `description` text,
  `pic_url` varchar(160) DEFAULT NULL,
  `upvotes` int(11) DEFAULT 1,
  `lat_long` varchar(75),
  `date_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`food_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_bin AUTO_INCREMENT=1 ;


---------
-- Dumping test data into tables
---------

INSERT IGNORE INTO `food` (`food_id`, `date`, `gtid`, `title`, `location`, `description`, `pic_url`, `upvotes`, `lat_long`) VALUES
(1, '2013-10-31', 'gburdell3', 'Microsoft Day in the Lobby', 'CoC Lobby', 'Krispy Kreme doughnuts before noon and Papa John\'s after!', 'http://www.licensing.gatech.edu/sites/devlicensing.gatech.edu/files/images/trademarks-big.gif', '2', '33.777417,-84.397522') ;


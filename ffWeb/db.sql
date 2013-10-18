
--
-- Database: `CONTRIB_honeybadgers`
--

-- --------------------------------------------------------

--
-- Table Structure
--

CREATE TABLE IF NOT EXISTS `EVENTS` (
  `EVENT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DATE` date NOT NULL,
  `ORG_ID` int(11) NOT NULL,
  `TITLE` varchar(75) NOT NULL,
  `FOURSQUARE` varchar(50) DEFAULT NULL,
  `ADDRESS` varchar(160) DEFAULT NULL,
  `START_TIME` datetime DEFAULT NULL,
  `END_TIME` datetime DEFAULT NULL,
  `APPROVED` tinyint(1) DEFAULT NULL,
  `APPROVED_BY` int(11) DEFAULT NULL,
  `APPROVED_DATE` timestamp NULL DEFAULT NULL,
  `SUMMARY` text,
  `TYPE` varchar(30) DEFAULT NULL,
  `SPECIAL_NOTES` varchar(160) DEFAULT NULL,
  `ALCOHOL` tinyint(1) DEFAULT NULL,
  `CREATED_DATE` timestamp NULL DEFAULT NULL,
  `CREATED_BY` int(11) DEFAULT NULL,
  `DELETED` tinyint(1) DEFAULT NULL,
  `DELETED_DATE` timestamp NULL DEFAULT NULL,
  `DELETED_BY` int(11) DEFAULT NULL,
  `DATE_CHANGED` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`EVENT_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_bin AUTO_INCREMENT=1 ;


---------
-- Dumping test data into tables
---------

INSERT IGNORE INTO `EVENTS` (`EVENT_ID`, `DATE`, `ORG_ID`, `TITLE`, `FOURSQUARE`, `ADDRESS`, `START_TIME`, `END_TIME`, `APPROVED_DATE` ,`SUMMARY`, `TYPE`, `SPECIAL_NOTES`, `ALCOHOL`) VALUES
(1, '2013-10-31', 1, 'Al-Be\'s Halloween Bash', '522f836711d26c041fd70a09', 'Event Space, Theme Park, and Park in Bay Lake|Bay Lake, FL', '2013-10-31T21:00:00', '2013-11-01T03:30:00', '2013-10-28T10:39:23', 'Come out to the Al-Be Hallow\'s Eve celebration! There will be drinks for those of age, and fun for all around. Bring your best costume and hang out with the gents from Al-Be!', 'Party', 'Halloween Costume Party', 1),
(3, '2013-11-02', '2', '4-Be\'s Halloween Carousal', '522f836711d26c041fd70a09', 'Event Space, Theme Park, and Park in Bay Lake|Bay Lake, FL', '2013-11-02T22:00:00', '2013-11-03T04:00:00', '2013-10-30T16:32:11', 'Come party it up with 4-Be\'s annual Halloween Costume Party. Enter the judging for a chance to show off your costume and win prizes!', 'Party', 'Halloween Costume Party', 0) ;


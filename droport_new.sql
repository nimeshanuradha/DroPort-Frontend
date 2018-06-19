-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2018 at 10:41 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `droport_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adm_id` int(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `nic` varchar(15) NOT NULL,
  `age` int(10) NOT NULL,
  `phone_mobile` int(20) NOT NULL,
  `phone_fix` int(20) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fb_profile_link` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cus_id` int(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `nic` varchar(15) NOT NULL,
  `age` int(10) NOT NULL,
  `phone_mobile` int(20) NOT NULL,
  `phone_fix` int(20) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fb_profile_link` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cus_id`, `f_name`, `l_name`, `dob`, `nic`, `age`, `phone_mobile`, `phone_fix`, `gender`, `email`, `fb_profile_link`, `username`, `password`) VALUES
(1000, 'Ravindu', 'Perera', '1995-12-29', '953640465v', 22, 724788122, 112578629, 'male', 'ravinduperera1229@gmail.com', 'https://www.facebook.com/', 'Ravindu', '123'),
(1001, 'Nimesh', 'Anuradha', '1993-03-03', '930911227v', 25, 713462038, 112467461, 'male', 'nimedhanurada1500@gmail.com', '', 'Nimesh', '321'),
(1002, 'Kaushalya', 'Prasadini', '1994-04-30', '941227984v', 24, 766598222, 113556814, 'female', 'kaushalyaprasadini94@gmail.com', '', 'Kaushalya', '456'),
(1003, 'Bhashika', 'Perera', '1994-05-14', '941379195v', 24, 776605869, 0, 'female', 'bhashika94@gmail.com', '', 'Bhashika', '654'),
(1004, 'Prabath', 'Iroshan', '1994-10-10', '943000788v', 23, 716541233, 112222555, 'male', 'prabathirosh@gmail.com', '', 'Prabath', '789'),
(1005, 'Ravindu', 'Lakshitha', '1995-03-24', '950810465v', 23, 765768294, 112578668, 'male', 'ravindulakshithaperera29@gmail.com', 'https://www.facebook.com/', 'Lakshitha', '987'),
(1006, 'Imesha', 'Nimantha', '1994-03-24', '940840355v', 24, 766596565, 112578578, 'male', 'imeshanimantha94@gmail.com', '', 'Imesh', '369');

-- --------------------------------------------------------

--
-- Table structure for table `drone`
--

CREATE TABLE `drone` (
  `dro_id` int(11) NOT NULL DEFAULT '1000',
  `own_id` int(11) NOT NULL,
  `make` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `max_speed` int(11) DEFAULT NULL,
  `max_flight_time` int(11) DEFAULT NULL,
  `gps_positioning` binary(1) DEFAULT NULL,
  `altitude_range` varchar(45) DEFAULT NULL,
  `obstacle_sensing_range` varchar(45) DEFAULT NULL,
  `storage_type` varchar(45) DEFAULT NULL,
  `max_storage_capacity` varchar(45) DEFAULT NULL,
  `max_power` varchar(45) DEFAULT NULL,
  `supported_os` varchar(45) DEFAULT NULL,
  `max_transmission` varchar(45) DEFAULT NULL,
  `battery_capacity` varchar(45) DEFAULT NULL,
  `fly_time_category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_cam`
--

CREATE TABLE `drone_cam` (
  `dro_id` int(11) NOT NULL,
  `sensor` varchar(45) DEFAULT NULL,
  `lens` varchar(45) DEFAULT NULL,
  `cam_category` varchar(45) DEFAULT NULL,
  `forward_vision` binary(1) DEFAULT NULL,
  `backward _vision` binary(1) DEFAULT NULL,
  `downward_vision` binary(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_cam_image`
--

CREATE TABLE `drone_cam_image` (
  `dro_id` int(11) NOT NULL,
  `image_size` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_cam_video`
--

CREATE TABLE `drone_cam_video` (
  `dro_id` int(11) NOT NULL,
  `video_range` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_owner`
--

CREATE TABLE `drone_owner` (
  `own_id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `nic` varchar(12) DEFAULT NULL,
  `mobile_no` int(11) DEFAULT NULL,
  `fixed_no` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fb_link` varchar(45) DEFAULT NULL,
  `drn_id` int(11) NOT NULL,
  `no_of_drones` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_pilot`
--

CREATE TABLE `drone_pilot` (
  `pil_id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `f_name` varchar(45) DEFAULT NULL,
  `l_name` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `mobile_no` int(11) DEFAULT NULL,
  `fixed_no` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fb_link` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `req_id` int(11) NOT NULL,
  `req_type` varchar(255) NOT NULL,
  `district` varchar(45) DEFAULT NULL,
  `town` varchar(45) DEFAULT NULL,
  `area` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `cus_id` int(11) DEFAULT NULL,
  `map_area` varchar(45) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `total_fly_time` int(11) DEFAULT NULL,
  `quality_category` varchar(45) DEFAULT NULL,
  `max_flight_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`req_id`, `req_type`, `district`, `town`, `area`, `date`, `time_from`, `time_to`, `cus_id`, `map_area`, `start_time`, `end_time`, `total_fly_time`, `quality_category`, `max_flight_time`) VALUES
(1, 'Wedding', 'Ampara', 'Piliyandala', 'madapatha', '2018-06-14', '00:00:00', '00:00:00', 45, NULL, NULL, NULL, NULL, NULL, 30),
(2, 'Arial Photo', 'Galle', 'galle', 'unawatuna', '2018-06-14', '00:00:00', '00:00:00', 45, NULL, NULL, NULL, NULL, NULL, 60),
(3, 'Other', 'Anuradhapura', 'Kelaniya', 'kotagedara', '2018-06-22', NULL, '05:05:00', 45, NULL, NULL, NULL, NULL, NULL, 10),
(4, 'Arial Photo', 'Nuwaraeliya', 'akkareipaththu', 'kotagedara', '2018-06-22', NULL, '05:05:00', 45, NULL, NULL, NULL, NULL, NULL, 30),
(6, 'Research', 'Badulla', 'mahawa', 'batakettara', '2018-06-23', NULL, '08:05:00', 45, NULL, NULL, NULL, NULL, NULL, 60),
(7, 'Media', 'Polonnaruwa', 'horowpatahna', 'batana', '2018-06-30', NULL, '08:05:00', 45, NULL, NULL, NULL, NULL, NULL, 60);

-- --------------------------------------------------------

--
-- Table structure for table `req_assigned`
--

CREATE TABLE `req_assigned` (
  `req_id` int(11) NOT NULL,
  `cus_id` int(11) NOT NULL,
  `own_id` int(11) DEFAULT NULL,
  `pil_id` int(11) DEFAULT NULL,
  `dro_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `req_assigned`
--

INSERT INTO `req_assigned` (`req_id`, `cus_id`, `own_id`, `pil_id`, `dro_id`) VALUES
(1, 45, NULL, NULL, NULL),
(2, 45, NULL, NULL, NULL),
(4, 45, NULL, NULL, NULL),
(6, 45, NULL, NULL, NULL),
(7, 45, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `req_status`
--

CREATE TABLE `req_status` (
  `req_id` int(11) NOT NULL,
  `drone_recieved` text NOT NULL,
  `media_recieved` text NOT NULL,
  `media_confirmed` text NOT NULL,
  `completed` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `req_status`
--

INSERT INTO `req_status` (`req_id`, `drone_recieved`, `media_recieved`, `media_confirmed`, `completed`) VALUES
(1, 'pending', 'pending', 'pending', 'pending'),
(2, 'pending', 'pending', 'pending', 'pending'),
(4, 'pending', 'pending', 'pending', 'pending'),
(6, 'pending', 'pending', 'pending', 'pending'),
(7, 'pending', 'pending', 'pending', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `user_id` int(11) NOT NULL,
  `no` varchar(255) NOT NULL,
  `line_1` varchar(255) NOT NULL,
  `line_2` varchar(255) NOT NULL,
  `line_3` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adm_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `drone`
--
ALTER TABLE `drone`
  ADD PRIMARY KEY (`dro_id`);

--
-- Indexes for table `drone_cam`
--
ALTER TABLE `drone_cam`
  ADD PRIMARY KEY (`dro_id`);

--
-- Indexes for table `drone_cam_image`
--
ALTER TABLE `drone_cam_image`
  ADD PRIMARY KEY (`dro_id`,`image_size`);

--
-- Indexes for table `drone_cam_video`
--
ALTER TABLE `drone_cam_video`
  ADD PRIMARY KEY (`dro_id`,`video_range`);

--
-- Indexes for table `drone_owner`
--
ALTER TABLE `drone_owner`
  ADD PRIMARY KEY (`own_id`,`drn_id`),
  ADD KEY `FK_Drn_ID` (`drn_id`);

--
-- Indexes for table `drone_pilot`
--
ALTER TABLE `drone_pilot`
  ADD PRIMARY KEY (`pil_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`req_id`),
  ADD KEY `FK_Cus_ID` (`cus_id`);

--
-- Indexes for table `req_assigned`
--
ALTER TABLE `req_assigned`
  ADD PRIMARY KEY (`req_id`,`cus_id`),
  ADD KEY `FK_Drone_ID` (`dro_id`),
  ADD KEY `FK_Pil_ID` (`pil_id`),
  ADD KEY `FK_Cust_ID` (`cus_id`);

--
-- Indexes for table `req_status`
--
ALTER TABLE `req_status`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drone_owner`
--
ALTER TABLE `drone_owner`
  MODIFY `own_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `req_assigned`
--
ALTER TABLE `req_assigned`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `req_status`
--
ALTER TABLE `req_status`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `drone_cam`
--
ALTER TABLE `drone_cam`
  ADD CONSTRAINT `FK_droneID` FOREIGN KEY (`dro_id`) REFERENCES `drone` (`dro_id`) ON UPDATE CASCADE;

--
-- Constraints for table `drone_cam_image`
--
ALTER TABLE `drone_cam_image`
  ADD CONSTRAINT `FK_Dro_ID` FOREIGN KEY (`dro_id`) REFERENCES `drone` (`dro_id`) ON UPDATE CASCADE;

--
-- Constraints for table `drone_cam_video`
--
ALTER TABLE `drone_cam_video`
  ADD CONSTRAINT `FK_Dr_ID` FOREIGN KEY (`dro_id`) REFERENCES `drone` (`dro_id`) ON UPDATE CASCADE;

--
-- Constraints for table `drone_owner`
--
ALTER TABLE `drone_owner`
  ADD CONSTRAINT `FK_Drn_ID` FOREIGN KEY (`drn_id`) REFERENCES `drone` (`dro_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

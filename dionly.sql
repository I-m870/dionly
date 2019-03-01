-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2019 年 03 月 01 日 10:03
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `dionly`
--

-- --------------------------------------------------------

--
-- 表的结构 `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(40) NOT NULL,
  `itemimg` varchar(200) NOT NULL,
  `pricemarket` int(20) NOT NULL,
  `pricemember` int(20) NOT NULL,
  `img1` varchar(200) NOT NULL,
  `img2` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=gbk AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `item`
--

INSERT INTO `item` (`id`, `itemname`, `itemimg`, `pricemarket`, `pricemember`, `img1`, `img2`) VALUES
(1, '遇见缘（DRW124505D)', 'http://www.dionly.com/upload/image/20151023/small20151023270528.jpg', 2997, 1578, 'http://www.dionly.com/upload/image/20151023/small20151023270537.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023270540.jpg'),
(2, '爱情手镯（DBW134533D）', 'http://www.dionly.com/upload/image/20160310/small20160310040516.png', 19841, 10443, 'http://www.dionly.com/upload/image/20160310/small20160310040551.png', ''),
(3, '爱之光（DRW124517D）', 'http://www.dionly.com/upload/image/20151023/small20151023080541.jpg', 5746, 3024, 'http://www.dionly.com/upload/image/20151023/small20151023090516.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023080541.jpg'),
(4, '圆梦（DRW124516D）', 'http://www.dionly.com/upload/image/20151023/small20151023120508.jpg', 6133, 3228, 'http://www.dionly.com/upload/image/20151023/small20151023120523.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023120503.jpg'),
(5, '公主梦（DRW124515D）', 'http://www.dionly.com/upload/image/20151023/small20151023100503.jpg', 7653, 4028, 'http://www.dionly.com/upload/image/20151023/small20151023100503.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023100551.jpg'),
(6, '相伴一生（DRW124514D）', 'http://www.dionly.com/upload/image/20151023/small20151023120554.jpg', 7653, 4028, 'http://www.dionly.com/upload/image/20151023/small20151023120554.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023130511.jpg'),
(7, '执爱（DRW124513D）', 'http://www.dionly.com/upload/image/20151023/small20151023140547.jpg', 8398, 4420, 'http://www.dionly.com/upload/image/20151023/small20151023140547.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023150503.jpg'),
(8, '汇爱（DRW124512D）', 'http://www.dionly.com/upload/image/20151023/small20151023170540.jpg', 8631, 4542, 'http://www.dionly.com/upload/image/20151023/small20151023170545.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023170551.jpg'),
(9, 'My love（DRW124511D）', 'http://www.dionly.com/upload/image/20151023/small20151023190537.jpg', 4226, 2224, 'http://www.dionly.com/upload/image/20151023/small20151023190542.jpg', 'http://www.dionly.com/upload/image/20151023/small20151023190549.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `phonenum` int(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  PRIMARY KEY (`phonenum`),
  UNIQUE KEY `phonenum` (`phonenum`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`phonenum`, `pwd`) VALUES
(2147483647, '1'),
(123456, '1'),
(123, '456'),
(1234, '456'),
(1234555, '456'),
(12222, '222'),
(1, '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*
 Navicat MySQL Data Transfer

 Source Server         : 本地mysql连接
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : blog

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 03/23/2018 11:30:49 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `articles`
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `art_id` int(11) NOT NULL AUTO_INCREMENT,
  `art_title` varchar(255) NOT NULL,
  `art_create_time` datetime DEFAULT NULL,
  `art_update_time` datetime DEFAULT NULL,
  `art_content` varchar(500) DEFAULT NULL,
  `art_des` varchar(255) DEFAULT NULL,
  `art_category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`art_id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `articles`
-- ----------------------------
BEGIN;
INSERT INTO `articles` VALUES ('1', 'GraphQL是应用层查询语言', '2018-03-07 22:58:00', '2018-03-07 22:58:06', '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', 'grapqlshishenm', '1'), ('2', '前端javascript实现文件的断点续传', '2018-03-07 23:00:44', '2018-03-07 23:00:47', '这是一份GraphQL规范的征求意见稿草案，其中GraphQL是Facebook于2012年创造的一种用于描述CS应用中数据模型的能力和要求的语言。本标准的开发起始于2015年，GraphQL是一种在还在演进的未完成的新语言，其重大功能增强也会在本规范的未来版本中体现。', '前端职业开发', '2'), ('3', '第三篇文章', '2018-03-13 21:40:27', '2018-03-13 21:40:29', '这是第123123', null, '3'), ('4', 'asdf ', '2018-03-14 10:59:22', '2018-03-14 10:59:24', 'asdf ', '345345', '4'), ('5', 'biaoq', '2018-02-04 00:00:00', null, '内容', '描述', '1'), ('6', 'biaoq', '2018-02-04 00:00:00', null, '内容', '描述', '2'), ('7', '222222', '2018-03-16 20:04:09', null, '33', 'sdf', '3'), ('8', '222222', '2018-03-16 20:04:29', null, '33', 'sdf', null), ('9', '222222', '2018-03-16 20:05:00', null, '33', 'sdf', null), ('10', '222222', '2018-03-16 20:05:03', null, '33', 'sdf', null), ('11', '222222', '2018-03-16 20:05:04', null, '33', 'sdf', null), ('34', 'GraphQL是应用层查询语言,', '2018-03-16 22:44:57', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。,', '', '1'), ('35', 'sdf', '2018-03-16 22:52:29', null, 'asdf', 'asdf', '1'), ('36', 'sdf', '2018-03-16 22:52:46', null, 'asdf', 'asdf', '1'), ('37', 'sdf', '2018-03-16 22:54:07', null, 'asdf', 'asdf', '1'), ('38', 'GraphQL是应用层查询语言', '2018-03-16 23:31:04', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', '', '1'), ('39', 'GraphQL是应用层查询语言', '2018-03-16 23:32:02', null, '1', '', '1'), ('40', 'GraphQL是应用层查询语言', '2018-03-16 23:32:37', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '', '1'), ('41', 'GraphQL是应用层查询语言', '2018-03-16 23:36:26', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '', '1'), ('42', 'GraphQL是应用层查询语言', '2018-03-16 23:38:01', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '', '1'), ('43', 'GraphQL是应用层查询语言', '2018-03-16 23:38:05', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '', '1'), ('44', 'GraphQL是应用层查询语言', '2018-03-16 23:38:42', null, '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '', '1'), ('45', 'GraphQL是应用层查询语言', '2018-03-16 23:39:08', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', '', '1'), ('46', 'GraphQL是应用层查询语言', '2018-03-16 23:41:02', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'sdfasdfasdf', '1'), ('47', 'sdfsdf', '2018-03-16 23:42:24', null, '', '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '1'), ('48', 'sdfsdf', '2018-03-16 23:51:46', null, '', '源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。', '1'), ('49', '48asdfasdf', '2018-03-16 23:51:56', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'art_category_id', '1'), ('50', '48asdfasdf', '2018-03-16 23:53:36', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'art_category_id', '1'), ('51', '48asdfasdf', '2018-03-17 18:47:39', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'art_category_id', '1'), ('52', '48asdfasdf', '2018-03-17 18:47:43', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'art_category_id', '1'), ('53', '48asdfasdf', '2018-03-17 18:47:44', null, '<p>源代码的再发布必须遵守上述版权通知、本条件列表以及以下免责声明。\\n以二进制形式再发布软件时必须复制上述版权通知、本条件列表以及文档下文中的免责声明和/或发布代码时提供的其他信息。(译者案：所以下面保留英文原版)\\n未经事先书面批准的情况下，不得将名称Facebook或贡献者名字用于支持或推广该软件的衍生产品。</p>', 'art_category_id', '1'), ('54', 'asdf', '2018-03-17 18:48:36', null, '<p>sdfsdf</p>', 'asdf', '1');
COMMIT;

-- ----------------------------
--  Table structure for `articles_category_relationship`
-- ----------------------------
DROP TABLE IF EXISTS `articles_category_relationship`;
CREATE TABLE `articles_category_relationship` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL DEFAULT '0',
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `articles_category_relationship`
-- ----------------------------
BEGIN;
INSERT INTO `articles_category_relationship` VALUES ('1', '1', '1'), ('2', '2', '2'), ('3', '3', '3'), ('4', '4', '4'), ('5', '18', '1'), ('6', '19', '1'), ('7', '20', '1'), ('8', '21', '1'), ('9', '22', '1'), ('10', '23', '1'), ('11', '24', '1'), ('12', '25', '1'), ('13', '26', '1'), ('14', '27', '1'), ('15', '28', '1'), ('16', '29', '1'), ('17', '30', '1'), ('18', '31', '1');
COMMIT;

-- ----------------------------
--  Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_des` varchar(500) DEFAULT NULL,
  `category_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `category`
-- ----------------------------
BEGIN;
INSERT INTO `category` VALUES ('1', 'webpack', 'webpack相关配置等', '/webpack'), ('2', 'vue', 'vue框架', '/vue'), ('3', 'node', 'node相关技术', '/node'), ('4', 'GraphQL', 'GraphQL查询语句', '/graphql');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_nicename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

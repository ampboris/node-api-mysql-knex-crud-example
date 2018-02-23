# node-api-mysql-knex-crud-example
Knex, MySql, NodeJs, Express, CRUD, REST API

A simple nodejs api example to demostrate CRUD to MySql db via Knex

Using:
Nodejs, Express, MySql, Knex

## Pre-steps

### Install nodemon global
$npm i nodemon -g

### Install MySql database and create schema/table

`````
CREATE TABLE `session` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE,
  KEY `skey` (`skey`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='session';

`````

## setup project
$npm i

## Start project
$npm start

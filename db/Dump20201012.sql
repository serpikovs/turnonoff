CREATE DATABASE  IF NOT EXISTS `lamponoff` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lamponoff`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: lamponoff
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lampModels`
--

DROP TABLE IF EXISTS `lampModels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lampModels` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lampModels`
--

LOCK TABLES `lampModels` WRITE;
/*!40000 ALTER TABLE `lampModels` DISABLE KEYS */;
INSERT INTO `lampModels` VALUES (1,'Модель 1'),(2,'Модель 2'),(3,'Модель 3');
/*!40000 ALTER TABLE `lampModels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lamps`
--

DROP TABLE IF EXISTS `lamps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lamps` (
  `model` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `adress` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `owner` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` tinyint NOT NULL,
  PRIMARY KEY (`adress`),
  UNIQUE KEY `adress_UNIQUE` (`adress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lamps`
--

LOCK TABLES `lamps` WRITE;
/*!40000 ALTER TABLE `lamps` DISABLE KEYS */;
INSERT INTO `lamps` VALUES ('Модель 1','Калуга','Пользователь 1',1),('Модель 2','Козельск','Пользователь 1',1),('Модель 1','Обнинск','Пользователь 1',1);
/*!40000 ALTER TABLE `lamps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Пользователь 1','$2b$10$GUPmDaYFiEEyBAMXsyV/6.tx3SVzVL0M3oalhmrfFFRoYY5GICBLm','user'),(2,'Пользователь 2','$2b$10$slUuHagcZiiLd6aWPYd.POFMUUXgzw5g4bPXiBEINVwTqcGEJjCzW','user'),(3,'Пользователь 3','$2b$10$4ZPIL1CG0XLP4WSLpZe66eO1cLvkWGRHV5KXW9hJ1b7A8/QliDBw.','user'),(4,'admin','$2b$10$T9qUpzKpskb4d1BLfNqsh.baEpjsKsPMCVAUPjsLk3rvXnuygZE/i','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-12  3:30:21

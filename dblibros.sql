CREATE SCHEMA `dblibros` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `dblibros`.`libros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `autor` VARCHAR(140) NOT NULL,
  `titulo` VARCHAR(140) NOT NULL,
  `genero` VARCHAR(50) NOT NULL,
  `editorial` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `dblibros`.`libros` (`autor`, `titulo`, `genero`, `editorial`) VALUES ('Brian Weiss', 'Muchas vidas, muchos maestros', 'autoayuda', 'zeta');

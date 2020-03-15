DROP DATABASE IF EXISTS burgers_db;
CREATE burgers_db;
USE burgers_db;

CREATE TABLE BURGERS
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    burger_name STRING(60) NOT NULL,
    devoured BOOLEAN DEFAULT false
)
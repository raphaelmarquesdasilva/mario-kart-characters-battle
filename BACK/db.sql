CREATE DATABASE mario_kart;

USE mario_kart;


CREATE TABLE characters (

    id               INT                 PRIMARY KEY AUTO_INCREMENT,
    name             VARCHAR(50)         NOT NULL UNIQUE,
    speed            INT                 NOT NULL,
    maneuverability  INT                 NOT NULL,
    strength         INT                 NOT NULL,
    image_url        VARCHAR(255)        NOT NULL

);

CREATE TABLE blocks (

    id              INT             PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(50)     NOT NULL

);

INSERT INTO characters (name, speed, maneuverability, strength, image_url) VALUES 
    ("MARIO", 4, 3, 3, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/mario.gif?raw=true"),
    ("PEACH", 3, 4, 2, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/peach.gif?raw=true"),
    ("YOSHI", 2, 4 ,3, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/yoshi.gif?raw=true"),
    ("BOWSER", 5, 2, 5, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/bowser.gif?raw=true"),
    ("LUIGI", 3, 4, 4, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/luigi.gif?raw=true"),
    ("DONKEY KONG", 2, 2, 5, "https://github.com/digitalinnovationone/formacao-nodejs/blob/main/03-projeto-mario-kart/docs/dk.gif?raw=true");


INSERT INTO blocks (name) VALUES 
    ("STRAIGHT"),
    ("CURVE"),
    ("BATTLE");

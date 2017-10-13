DROP TABLE IF EXISTS STUDENT;
DROP TABLE IF EXISTS TEAM;
DROP TABLE IF EXISTS CLIENT;
DROP TABLE IF EXISTS ADVISOR;
DROP TABLE IF EXISTS ADMIN;

CREATE TABLE ADVISOR(
  ID INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  EMAIL TEXT NOT NULL
);

CREATE TABLE CLIENT(
  ID INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  EMAIL TEXT NOT NULL,
  STATUS TEXT NOT NULL
);

CREATE TABLE TEAM(
  ID INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  COURSE TEXT,
  TB_GENERATED INT NOT NULL,
  ADVISOR_ID INT,
  CLIENT_ID INT,
  FOREIGN KEY (ADVISOR_ID) REFERENCES ADVISOR (ID),
  FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT (ID)
);

CREATE TABLE STUDENT(
  STUDENT_ID INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  EMAIL TEXT,
  TEAM_ID INT,
  FOREIGN KEY (TEAM_ID) REFERENCES TEAM (ID)
);

CREATE TABLE ADMIN(
  ID INT PRIMARY KEY NOT NULL,
  USERNAME TEXT NOT NULL,
  HASH TEXT NOT NULL,
  SALT TEXT NOT NULL
);

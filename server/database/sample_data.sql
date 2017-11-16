INSERT INTO ADVISOR(NAME, EMAIL)
VALUES ("Ying Jin", "advisor@email.com");

INSERT INTO ADVISOR(NAME, EMAIL)
VALUES ("Mr advisor", "advisor2@email.com");

INSERT INTO CLIENT(NAME, EMAIL, STATUS)
VALUES ("Mr. Client", "client@email.com", "Active");

INSERT INTO CLIENT(NAME, EMAIL, STATUS)
VALUES ("Clientface", "client2@email.com", "Active");

INSERT INTO CLIENT(NAME, EMAIL, STATUS)
VALUES ("I.M. Client", "client3@email.com", "Active");

INSERT INTO CLIENT(NAME, EMAIL, STATUS)
VALUES ("Clint The Client", "client4@email.com", "Active");

INSERT INTO CLIENT(NAME, EMAIL, STATUS)
VALUES ("The Client", "client56@email.com", "In-Active");

INSERT INTO TEAM(NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES ("C Hex", "191", 0, 1, 1);

INSERT INTO TEAM(NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES ("Team 2", "190", 0, 1, 2);

INSERT INTO TEAM(NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES ("Team 3", "191", 0, 2, 3);

INSERT INTO TEAM(NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES ("Team 4", "190", 0, 2, 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("DJ Hayes", "daniel.hayesjr@gmail.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Ali Iqbal", "igbal.ali.7@gmail.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Austin Kerbow", "amkerbow@gamil.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Jammy Loeur", "jammyloeur09@gmail.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Vi Le", "cpxweijai@gmail.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Derek Nguyen", "dereknguyen1994@gmail.com", 1);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Biana Noel Aquirre", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Aviv Alon", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Tanveer Bariana", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Nicole Marie Becker", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Nico Christopher Brondial", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Coleton Joseph Buehler", "student@email.com", 2);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Marco Campos", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Pavel Aleksandrovich Chipak", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Bryce Lowell Collins", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Christopher Raudel Diaz", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Nikola Tesla", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Frank Sinatra", "student@email.com", 3);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Justin Doucette", "student@email.com", 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Breeana Arkisi George", "student@email.com", 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Oscar Gutierrez", "student@email.com", 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Mike Jones", "student@email.com", 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Tupac Shakur", "student@email.com", 4);

INSERT INTO STUDENT(NAME, EMAIL, TEAM_ID)
VALUES ("Kendrick Lamar", "student@email.com", 4);

/* password is "1234" */
INSERT INTO ADMIN(USERNAME, HASH, SALT)
VALUES ("admin", "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f", "5678");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "190", "Course Materials");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "190", "Forms");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "190", "Templates");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "191", "Course Materials");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "191", "Forms");

INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE)
VALUES ("", "191", "Templates");

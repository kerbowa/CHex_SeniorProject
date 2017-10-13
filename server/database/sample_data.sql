INSERT INTO ADVISOR(ID, NAME, EMAIL)
VALUES (1, "Ying Jin", "advisor@email.com");

INSERT INTO ADVISOR(ID, NAME, EMAIL)
VALUES (2, "Mr advisor", "advisor2@email.com");

INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS)
VALUES (1, "Mr. Client", "client@email.com", "Active");

INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS)
VALUES (2, "Clientface", "client2@email.com", "Active");

INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS)
VALUES (3, "I.M. Client", "client3@email.com", "Active");

INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS)
VALUES (4, "Clint The Client", "client4@email.com", "Active");

INSERT INTO TEAM(ID, NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES (1, "C Hex", "191", 0, 1, 1);

INSERT INTO TEAM(ID, NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES (2, "Team 2", "190", 0, 1, 2);

INSERT INTO TEAM(ID, NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES (3, "Team 3", "191", 0, 2, 3);

INSERT INTO TEAM(ID, NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID)
VALUES (4, "Team 4", "190", 0, 2, 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (1, "DJ Hayes", "daniel.hayesjr@gmail.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (2, "Ali Iqbal", "igbal.ali.7@gmail.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (3, "Austin Kerbow", "amkerbow@gamil.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (4, "Jammy Loeur", "jammyloeur09@gmail.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (5, "Vi Le", "cpxweijai@gmail.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (6, "Derek Nguyen", "dereknguyen1994@gmail.com", 1);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (215281184, "Biana Noel Aquirre", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (204898945, "Aviv Alon", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (215160284, "Tanveer Bariana", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (214490147, "Nicole Marie Becker", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (215360354, "Nico Christopher Brondial", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (215585215, "Coleton Joseph Buehler", "student@email.com", 2);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (204776849, "Marco Campos", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (217983949, "Pavel Aleksandrovich Chipak", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (218686456, "Bryce Lowell Collins", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (216718581, "Christopher Raudel Diaz", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (204718849, "Nikola Tesla", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (244776841, "Frank Sinatra", "student@email.com", 3);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (213306099, "Justin Doucette", "student@email.com", 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (214561036, "Breeana Arkisi George", "student@email.com", 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (215596629, "Oscar Gutierrez", "student@email.com", 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (214917407, "Mike Jones", "student@email.com", 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (212117407, "Tupac Shakur", "student@email.com", 4);

INSERT INTO STUDENT(STUDENT_ID, NAME, EMAIL, TEAM_ID)
VALUES (212912407, "Kendrick Lamar", "student@email.com", 4);

/* password is "1234" */
INSERT INTO ADMIN(ID, USERNAME, HASH, SALT)
VALUES (1, "admin", "ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f", "5678");
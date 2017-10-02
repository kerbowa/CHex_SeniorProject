INSERT INTO ADVISOR(ID, NAME, EMAIL)
VALUES (1, "Ying Jin", "advisor@email.com");

INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS)
VALUES (1, "Mr. Client", "client@email.com", "Active");

INSERT INTO TEAM(ID, NAME, COURSE, ADVISOR_ID, CLIENT_ID)
VALUES (1, "C Hex", "191", 1, 1);

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
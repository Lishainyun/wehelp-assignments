要求三：

1. 

INSERT INTO member (name, username, password)
VALUES ('test', 'test', 'test'),
       ('1', '1', '1'),
       ('2', '2', '2'),
       ('3', '3', '3'),
       ('4', '4', '4');
![alt text](要求3.1.jpg)
<br/>
2. 

SELECT * FROM member;
![alt text](要求3.2.jpg)
<br/>
3. 

SELECT * FROM member
ORDER BY time DESC;
![alt text](要求3.3.jpg)
<br/>
4.

SELECT * FROM member
ORDER BY time DESC
LIMIT 3 OFFSET 1;
![alt text](要求3.4.jpg)
<br/>
5.

SELECT * FROM member 
WHERE username = 'test';
![alt text](要求3.5.jpg)
<br/>
6.

SELECT * FROM member
WHERE username = 'test' 
AND password = 'test';
![alt text](要求3.6.jpg)
<br/>
7. 
UPDATE member
SET name = 'test2'
WHERE name = 'test';
![alt text](要求3.7.jpg)
<br/>
要求四：

1. 

SELECT COUNT(*) FROM member;
![alt text](要求4.1.jpg)
<br/>
2. 

SELECT SUM(follower_count) FROM member;
![alt text](要求4.2.jpg)
<br/>
3. 

SELECT AVG(follower_count) FROM member;
![alt text](要求4.3.jpg)
<br/>
要求五：

1. 

SELECT message.content, member.name
FROM message
RIGHT JOIN member ON message.member_id = member.id;
![alt text](要求5.1.jpg)
<br/>
2. 

SELECT message.content, member.name 
FROM message
RIGHT JOIN member ON message.member_id = member.id
WHERE username = 'test';
![alt text](要求5.2.jpg)
<br/>

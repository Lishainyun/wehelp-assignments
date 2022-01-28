要求三：

1. 

INSERT INTO member (name, username, password)
VALUES ('test', 'test', 'test'),
       ('1', '1', '1'),
       ('2', '2', '2'),
       ('3', '3', '3'),
       ('4', '4', '4');
<br/>
![alt text](要求3.1.jpg)
<br/>
2. 

SELECT * FROM member;
<br/>
![alt text](要求3.2.jpg)
<br/>
3. 

SELECT * FROM member
ORDER BY time DESC;
<br/>
![alt text](要求3.3.jpg)
<br/>
4.

SELECT * FROM member
ORDER BY time DESC
LIMIT 3 OFFSET 1;
<br/>
![alt text](要求3.4.jpg)
<br/>
5.

SELECT * FROM member 
WHERE username = 'test';
<br/>
![alt text](要求3.5.jpg)
<br/>
6.

SELECT * FROM member
WHERE username = 'test' 
AND password = 'test';
<br/>
![alt text](要求3.6.jpg)
<br/>
7. 
UPDATE member
SET name = 'test2'
WHERE name = 'test';
<br/>
![alt text](要求3.7.jpg)
<br/>
要求四：

1. 

SELECT COUNT(*) FROM member;
<br/>
![alt text](要求4.1.jpg)
<br/>
2. 

SELECT SUM(follower_count) FROM member;
<br/>
![alt text](要求4.2.jpg)
<br/>
3. 

SELECT AVG(follower_count) FROM member;
<br/>
![alt text](要求4.3.jpg)
<br/>
要求五：

1. 

SELECT message.content, member.name
FROM message
RIGHT JOIN member ON message.member_id = member.id;
<br/>
![alt text](要求5.1.jpg)
<br/>
2. 

SELECT message.content, member.name 
FROM message
RIGHT JOIN member ON message.member_id = member.id
WHERE username = 'test';
<br/>
![alt text](要求5.2.jpg)
<br/>

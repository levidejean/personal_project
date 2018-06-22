UPDATE userinfo SET first_name = $1, last_name = $2, email = $3, city 
WHERE authid = $4;
SELECT * FROM userinfo WHERE authid = $4;
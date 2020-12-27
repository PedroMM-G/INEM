const mysql = require('mysql');
const connection = mysql.createConnection({
  host:'webitcloud.net',
  user: 'webitclo_d42',
  password: '+#m=o)H0G^fX',
  database: 'webitclo_d42'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
}); 

module.exports=connection;

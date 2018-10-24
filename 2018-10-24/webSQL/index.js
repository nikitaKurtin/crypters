const size = 1024 * 1024 * 4;//4MB
const db = openDatabase("nikitaDB", "1.0", "crypto test", size,()=>{
	//When first created
	console.log("DB created");
});
//Create
db.transaction((tx)=>{
	//can use back ticks (`) to emphasis names
	//tx.executeSql("CREATE TABLE IF NOT EXISTS `cars` (`name`, `year`, `owner`)");
	//tx.executeSql("CREATE TABLE IF NOT EXISTS `users` (`name`, `year`)");
	//but you can omit it
	//tx.executeSql("INSERT INTO cars (name, year, owner) VALUES ('Mazda 3', 2016, 1), ('Mazda 6', 2017, 2), ('Honda civic', 2018, 1), ('Toyota Corolla', 2014, 3)");
	//tx.executeSql("INSERT INTO users (name, year) VALUES ('Bubu', 1990), ('Groot', 1980), ('Drax', 1975), ('Rocket', 2000)");
});

//Read
db.transaction((tx)=>{
	//Example 1
	tx.executeSql("SELECT name FROM users", [], (tx, results)=>{
		console.log(results.rows);//all results rows
		for(let i=0; i<results.rows.length; i++){
			console.log(results.rows.item(i));
		}
	});
	//Example 2
	tx.executeSql("SELECT `c`.`name` AS `carName`, `u`.`name` AS `userName` FROM `cars` AS `c` JOIN `users` AS `u` ON `c`.`owner` = `u`.`rowid`", [], (tx, results)=>{
		for(let i=0; i<results.rows.length; i++){
			console.log(results.rows.item(i));
		}
	});
});

//Update
db.transaction((tx)=>{
	//tx.executeSql("UPDATE cars SET owner = (SELECT rowid FROM users WHERE name = 'Rocket') WHERE rowid = 2");
});

//Delete
db.transaction((tx)=>{
	//tx.executeSql("DELETE FROM cars WHERE rowid > 4");
	//tx.executeSql("DROP TABLE IF EXISTS cars");
});

function get() {
	var name = document.getElementById('name')
	var password = document.getElementById('password')
	var blob = new Blob(["pasword username:" + " " + name.value + " " + password], {type: "text/plain;charset=utf-8"});
	var fs = require("fs");
	window.alert("Username " + name.value + " Password: " + password.value);
	fs.writeFile("./password.txt", name.value + " " + password.value, (err) => {
		if (err) {
			console.log("err")
			return;
		}
		console.log("Password and username has been collected")
	}
	saveAs(blob, "testfile1.txt");
}


function get() {
	var name = document.getElementById('name')
	var password = document.getElementById('password')
	var blob = new Blob(["pasword username:" + " " + name.value + " " + password], {type: "text/plain;charset=utf-8"});
	console.log(blob);
	window.alert(name.value + " " + password.value)
	saveAs(blob, "testfile1.txt");
}
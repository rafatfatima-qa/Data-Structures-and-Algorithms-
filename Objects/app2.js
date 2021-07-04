/*
2. Now, using the same object, change the userName to your name,
fatherName to your father’s name, and className to your class.
*/

let userObject = {
	userName: "Philip",
	fatherName: "Norman",
	className: "four"
};

//updating the object

  userObject.userName = "Rafat Fatima";
  userObject.fatherName = "Wazir Hasan";
  userObject.className = "TechKaro 2021";
  
//printing the updated object

  console.log("\nUpdated Object:");
  for (let x in userObject) {
    console.log(x, userObject[x]);
}

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  arr.push({
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  });

  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newArr = [
    { id: 5, name: "alex", age: "22", profession: "designer" },
    { id: 6, name: "mike", age: "24", profession: "tester" },
    { id: 7, name: "emma", age: "21", profession: "manager" }
  ];

  const combinedArray = arr.concat(newArr);
  console.log(combinedArray);
}

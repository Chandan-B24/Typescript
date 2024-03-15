//these are very similar to interfaces but major differnce is types not only shape the object but also supports the primitive data typing
//classs can implememnt the interface but not the type

//types lets aggregate data togehter

type User2 = {
    firstName : string,
    lastName : string,
    age : number
}

//apart from this it also allows to do other things

//unions
//let's say u need to print the user id it may be the userId or string 
type userId = string | number;  // we can use unions to support both the type

function printUserId(id : userId){
    console.log(` ID : ${id}`);
}
printUserId(201);
printUserId("201");

//intersections
//What if you want to create a type that has every property of multiple types/ interfaces
type Employee1 = {
    name: string;
    startDate: Date;
  };
  
  interface Manager {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee1 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  
  console.log(teamLead)
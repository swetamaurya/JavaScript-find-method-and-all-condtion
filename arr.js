const people = [
    {
      id: 1,
      name: "Alice",
      age: 28,
      email: "alice@example.com",
      description: "Software engineer with a passion for AI.",
      address: "123 Maple St, Springfield, IL",
      hobby: "Reading",
      education: "M.S. in Computer Science"
    },
    {
      id: 2,
      name: "Bob",
      age: 35,
      email: "bob@example.com",
      description: "Marketing specialist who loves hiking.",
      address: "456 Oak St, Portland, OR",
      hobby: "Hiking",
      education: "B.A. in Marketing"
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      email: "charlie@example.com",
      description: "Recent graduate and aspiring data scientist.",
      address: "789 Pine St, Austin, TX",
      hobby: "Gaming",
      education: "B.S. in Data Science"
    },
    {
      id: 4,
      name: "David",
      age: 45,
      email: "david@example.com",
      description: "Experienced project manager and amateur chef.",
      address: "101 Birch St, Seattle, WA",
      hobby: "Cooking",
      education: "M.B.A."
    },
    {
      id: 5,
      name: "Eva",
      age: 31,
      email: "eva@example.com",
      description: "Graphic designer with a knack for illustration.",
      address: "202 Cedar St, Denver, CO",
      hobby: "Drawing",
      education: "B.F.A. in Graphic Design"
    },
    {
      id: 6,
      name: "Frank",
      age: 29,
      email: "frank@example.com",
      description: "Sales representative who enjoys cycling.",
      address: "303 Willow St, Boston, MA",
      hobby: "Cycling",
      education: "B.A. in Business Administration"
    },
    {
      id: 7,
      name: "Grace",
      age: 24,
      email: "grace@example.com",
      description: "Web developer and avid reader.",
      address: "404 Ash St, San Francisco, CA",
      hobby: "Reading",
      education: "B.S. in Computer Science"
    },
    {
      id: 8,
      name: "Hannah",
      age: 33,
      email: "hannah@example.com",
      description: "HR manager with a love for traveling.",
      address: "505 Elm St, Chicago, IL",
      hobby: "Traveling",
      education: "M.S. in Human Resource Management"
    },
    {
      id: 9,
      name: "Isaac",
      age: 40,
      email: "isaac@example.com",
      description: "IT consultant and tech enthusiast.",
      address: "606 Fir St, Miami, FL",
      hobby: "Tech Blogging",
      education: "B.S. in Information Technology"
    },
    {
      id: 10,
      name: "Jack",
      age: 27,
      email: "jack@example.com",
      description: "Freelance writer and podcast host.",
      address: "707 Spruce St, New York, NY",
      hobby: "Podcasting",
      education: "B.A. in English"
    },
    {
      id: 11,
      name: "Kara",
      age: 30,
      email: "kara@example.com",
      description: "Product manager and yoga practitioner.",
      address: "808 Walnut St, Los Angeles, CA",
      hobby: "Yoga",
      education: "M.B.A."
    },
    {
      id: 12,
      name: "Leo",
      age: 26,
      email: "leo@example.com",
      description: "Software developer and music producer.",
      address: "909 Chestnut St, Dallas, TX",
      hobby: "Music Production",
      education: "B.S. in Software Engineering"
    },
    {
      id: 13,
      name: "Mia",
      age: 34,
      email: "mia@example.com",
      description: "Digital marketer with a passion for photography.",
      address: "1010 Redwood St, Atlanta, GA",
      hobby: "Photography",
      education: "B.A. in Communications"
    },
    {
      id: 14,
      name: "Nina",
      age: 23,
      email: "nina@example.com",
      description: "Content creator and social media influencer.",
      address: "1111 Magnolia St, Phoenix, AZ",
      hobby: "Blogging",
      education: "B.A. in Journalism"
    },
    {
      id: 15,
      name: "Oscar",
      age: 37,
      email: "oscar@example.com",
      description: "Entrepreneur and public speaker.",
      address: "1212 Cypress St, Houston, TX",
      hobby: "Public Speaking",
      education: "B.S. in Business Management"
    }
  ];

console.log("----------------------------------------------------------------------------------------")

  // find greter then age of 18
  let arr= []
  for(let i =0 ; i<people.length ;i++){
    if(people[i].age <= 18) {
        arr.push(people[i])
        console.log(people[i].age)
  }
  }
  if(arr.length == 0){
    console.log(`Not in 18`);
  }
 
console.log("----------------------------------------------------------------------------------------")

 // find name with age 18 +
let foundUser = []
for(let i = 0; i <people.length ; i++){
  if(people[i].age >= 18){
    foundUser.push(people[i].name)
    console.log(`${people[i].name} is ${people[i].age} years old.`)
  }
}
if (foundUser.length == 0){
  console.log(`Not in 18`);
}

console.log("----------------------------------------------------------------------------------------")

  // find name with hobby
  let hobby = []
  for(let i =0;i<people.length;i++){
    if(people[i].hobby == "Reading"){
        hobby.push(people[i].name)
        console.log(`${people[i].name} hobby is ${people[i].hobby}.`)
    }
  }
  
console.log("----------------------------------------------------------------------------------------")

  // name se data nikalna
  let data = []
  for(i = 0 ; i<people.length; i++){
    if(people[i].name == "Alice"){
        data.push(people[i])
        console.log(data)
    }
  }

  console.log("----------------------------------------------------------------------------------------")

  // Name Alice ho age 32 hoga with OR
  let foundAge_name = null;
  for(let i = 0; i<people.length;i++){
    if(people[i].name === "Alice" || people[i].age == 32 ){
      foundAge_name = people[i].name
    }
    }
  if(foundAge_name){
    console.log( foundAge_name)
  }else{
    console.log("User not found")
  }

  console.log("----------------------------------------------------------------------------------------")

  // Name Alice ho age 32 hoga with AND
  let found = null
  for(let i = 0; i< people.length ; i++){
    if(people[i].name == "Alice" && people[i].age == 32){
        found = people[i].name
    }
  }
if(found){
    console.log(found)
}else{
    console.log("Person is not an array.")
}


console.log("----------------------------------------------------------------------------------------")

  // name chahiye array me ak
  let name_array = []
  for(let i = 0 ; i<people.length ; i++){
    name_array.push(people[i].name)
  }   console.log(name_array)
function biodata(name,age){
const address = "Depok"
const hobbies = ['Streaming','eat','playing game']
const is_marriage = false
const list_school = [{"name" : "Gunadarma"},{"year_in" : 2015},{"year_out":2019},{"major" :"S1"}]
const skills = [{"skill_name" : "Code"},{"level":"advanced"}]
const interest_in_coding = true
let a = {
  		"name" : name,
  		"age" : age,
  		"Address" : address,
         "Hobbies" : hobbies,
         "is_marriage" : is_marriage,
         "list_school" : list_school,
         "skills" : skills,
         "interest_in_coding": interest_in_coding
         
        }
return a
}

var object = JSON.stringify(biodata("Didah",22))

console.log(object)
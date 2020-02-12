;(async function() {
  let request = await fetch("sampleData.json");
  let data = await request.json()

  console.log(data)
  let header = document.querySelector("h1")
  header.innerText = data.name + "'s Classes"

  let table = document.getElementById("classes")


  function createClassRow(classInfo) {
      //Creates a row for the table.
      let tableRow = document.createElement("tr")
      tableRow.className = "classRow"

      function addTh(text) {
          let th = document.createElement("th")
          th.innerText = text
          tableRow.appendChild(th)
      }

      addTh(classInfo.name)
      addTh(classInfo.notes)
      if (typeof classInfo.students === "string") {
          //For creating the header
          addTh(classInfo.students)
      }
      else {
          addTh(classInfo.students.length)
      }
      return tableRow
  }


  table.appendChild(createClassRow({
      name: "Class Name",
      notes: "Notes",
      students: "Number of Students"
  }))

  let classes = data.classes
  classes.forEach((classInfo) => {
      //Add a row for the class.
      let row =  createClassRow(classInfo)
      table.appendChild(row)

      let expanded = false
      row.addEventListener("click", function() {
          if (expanded) {
              row.nextElementSibling.remove()
          }
          else {
              let classView = createClassView(classInfo)
              row.parentNode.insertBefore(classView, row.nextElementSibling)
          }
          expanded = !expanded
      })
  })

  function createClassView(classInfo) {
      let row = document.createElement("tr")
      let cell = document.createElement("th")
      row.appendChild(cell)
      cell.colSpan = 3

      let div = document.createElement("div")

      div.className = "classInfo"

      let name = document.createElement("h2")
      name.innerHTML = classInfo.name
      div.appendChild(name)
      cell.appendChild(div)

    
    
let signins = []

function GetInput(type) {
  var input = document.createElement("input")
  input.placeholder = type
  input.style.width = "75%"
  div.appendChild(input)
  return input
}


var Name = GetInput("name")
button = document.createElement("button")
button.innerHTML = "Sign In"
div.appendChild(button)
function SignIn() {
  var first = Name.value
  var time = new Date();

  signins.push({
    Name: first,
    time
  })
  let paragraph = document.createElement("p")
  paragraph.innerHTML = first + " " + time
  div.appendChild(paragraph)
  signins.push([name, time])
  console.log(signins);
  let remove = document.createElement("button")
  remove.innerHTML = "Remove"
  paragraph.appendChild(remove)
  remove.onclick = () => {
    div.removeChild(paragraph)
  }
  return(Name)
}
button.onclick = SignIn



    
    
    
    
      return row
  }




}())

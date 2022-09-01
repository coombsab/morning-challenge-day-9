const directions = [
  {
    name: "N",
    pos: 0,
    x: 0,
    y: 1
  },
  {
    name: "E",
    pos: 1,
    x: 1,
    y: 0
  },
  {
    name: "S",
    pos: 2,
    x: 0,
    y: -1
  },
  {
    name: "W",
    pos: 3,
    x: -1,
    y: 0
  }
]
const start = {
  x: 0,
  y: 0
}

const currentPos = {
  x: 0,
  y: 0
}

const delta = ["R4", "R3", "L3", "L2", "L1", "R1", "L1", "R2", "R3", "L5", "L5", "R4", "L4", "R2", "R4", "L3", "R3", "L3", "R3", "R4", "R2", "L1", "R2", "L3", "L2"]
const shortRoute = ["R4", "R3", "R1", "R4"]
let path = []

const startingOrientation = directions[3]
let currentOrientation = startingOrientation

function moveAll(changes) {
  changes.forEach(change => move(change))
}

function move(change) {
  let newOrientation = nextOrientation(change, currentOrientation)
  let num = change[1]

  console.log("change: ", change)
  console.log("current pos before: ", currentPos)
  // console.log("num: ", num)
  console.log("New Orientation ", newOrientation)
  if (newOrientation === directions[0] || newOrientation === directions[2]) {
    let newNum = newOrientation.y * num
    // console.log("newNum: ", newNum)
    currentPos.y += newNum
  } else {
    let newNum = newOrientation.x * num
    // console.log("newNum: ", newNum)
    currentPos.x += newNum
  }

  console.log("current pos after: ", currentPos)
  console.log("")
  currentOrientation = newOrientation
}

function nextOrientation(change, current) {
  let rotation = change[0]
  let newPos = 0

  switch (rotation) {
    case "R":
      newPos = current.pos + 1
      if (newPos >= directions.length) {
        newPos -= (directions.length)
      }
      break
    case "L":
      newPos = current.pos - 1
      if (newPos < 0) {
        newPos += directions.length
      }
      break
  }

  return directions[newPos]
}

moveAll(delta)

function display() {
  console.log("Started at: (" + start.x + ", " + start.y + ")")
  console.log("Ended at: (" + currentPos.x + ", " + currentPos.y + ")")


}

display()
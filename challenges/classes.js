// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height) {
//     this.length = length
//     this.width = width
//     this.height = height
//   }
  
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height
//   }
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   }

class CuboidMaker2 {
    constructor(cuboidMakerAttributes) {
        this.length = cuboidMakerAttributes.length
        this.width = cuboidMakerAttributes.width
        this.height = cuboidMakerAttributes.height
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
})
console.log("classes version")
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(cubeMakerAttributes) {
        super(cubeMakerAttributes)
        
    }
    volume() {
        return Math.pow(this.length, 3)
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2)
    }
}

const cube2 = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
})

console.log("cube")
console.log(cube2.volume()) // 64
console.log(cube2.surfaceArea()) // 96

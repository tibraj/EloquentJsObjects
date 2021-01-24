//Vector Type
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
    get length() {
        return Math.sqrt((this.x * this.x ) + (this.y * this.y));
    }
}

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);

//Group Type
class Group {
    constructor() {
        this.members = [];
    }
    add(value) {
        if(!this.has(value)) {
            this.members.push(value);
        }
    }
    delete(value) {
        this.members = this.members.filter(v => v!== value);
    }
    has(value) {
        return this.members.includes(value);
    }
    static from(collection) {
        let group = new Group;
        for(let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10,20]);
console.log(group,has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
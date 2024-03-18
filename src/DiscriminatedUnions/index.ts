interface Circle {
    kind : 'circle',
    radius : number
}

interface Square {
    kind : 'square',
    length : number
}

type Shape = Circle | Square;

const shapes : Shape[] = [
    {
        kind : 'circle',
        radius : 5
    },
    {
        kind : 'square',
        length : 10
    },
]

shapes.forEach(shape => {
    switch(shape.kind){
        case 'circle' : console.log(`Area of circle ${Math.PI * shape.radius ** 2}`)
                        break;
        case 'square' : console.log(`Area of square ${shape.length * shape.length}`)
                        break;
        default : console.log('Error in shape object')
    }
});
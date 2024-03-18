interface Point {
    length : number,
    name : string
}

type PointUpdate = {
    [P in keyof Point]? : Point[P]
}


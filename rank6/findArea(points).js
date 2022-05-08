function findArea(points) {
    let area = 0
    for (let i = 1; i < points.length; i++) {
        let deltaY = points[i].Y - points[i - 1].Y
        let deltaX = points[i].X - points[i - 1].X
        if (deltaY < 0) deltaY *= (-1)
        if (deltaX < 0) deltaX *= (-1)


        area += deltaX * deltaY / 2 + deltaX * Math.min(points[i].Y, points[i - 1].Y)
    }




    return area;
}
var Point = function(x, y) {
    this.X = x;
    this.Y = y;
}
console.log(findArea([new Point(-3, 2), new Point(-1, 0), new Point(3, 2)]))
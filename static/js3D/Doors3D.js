class Doors3D {

    constructor() {
        var container = new THREE.Object3D() // kontener na obiekty 3D
        var geometry1 = new THREE.BoxGeometry((Settings.radius * 2 / 3 * Math.sqrt(3)) / 3, 150, 5)
        var wall = new THREE.Mesh(geometry1, Settings.material1);
        for (var i = 0; i < 3; i++) {
            if (i % 2 == 1) {
            } else {
                var side = wall.clone()
                side.position.x = ((Settings.radius * 2 / 3 * Math.sqrt(3)) / 3) * i - ((Settings.radius * 2 / 3 * Math.sqrt(3)) / 3)
                container.add(side)
            }

        }
        return container

    }


}

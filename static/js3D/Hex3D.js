
class Hex3D {

    constructor(doors1, doors2) {
        // zmienna wielkość hexagona, a tym samym całego labiryntu
        var container = new THREE.Object3D() // kontener na obiekty 3D
        var geometry1 = new THREE.BoxGeometry(Settings.radius * 2 / 3 * Math.sqrt(3), 150, 5)
        var wall = new THREE.Mesh(geometry1, Settings.material1);
        var door = new Doors3D();
        for (var i = 0; i < 6; i++) {
            if ((i == doors1) || (i == doors2)) {
                var side = door.clone()
                side.position.x = (Settings.radius * Math.cos((Math.PI / 3) * i))
                side.position.z = (Settings.radius * Math.sin((Math.PI / 3) * i))
            } else {
                var side = wall.clone()
                side.position.x = (Settings.radius * Math.cos((Math.PI / 3) * i))
                side.position.z = (Settings.radius * Math.sin((Math.PI / 3) * i))

            }

            side.lookAt(container.position) // nakierowanie ścian na środek kontenera 3D  
            side.position.y = 75

            container.add(side)
        }
        var floorG = new THREE.CylinderGeometry(Settings.radius * 2 / 3 * Math.sqrt(3), Settings.radius, 1, 6)
        var floor = new THREE.Mesh(floorG, Settings.material1)
        floor.name = "floor"
        container.add(floor)
        container.position.y += 10
        return container

    }


}




class Item {
    constructor() {
        var geometry = new THREE.BoxGeometry(Settings.radius / 3, Settings.radius / 3, 20)
        var box = new THREE.Mesh(geometry, Settings.material1)
        box.position.y = 10
        return box
    }
}
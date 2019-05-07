
class Player {

    constructor() {

        this.container = new THREE.Object3D()

        this.player = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50, 3, 3, 3), new THREE.MeshBasicMaterial({
            color: 0x8888ff,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.7
        })); // player sześcian
        this.player.position.y = 30
        this.container.add(this.player) // kontener w którym jest player

        this.axes = new THREE.AxesHelper(200) // osie konieczne do kontroli kierunku ruchu
        this.axes.position.y = 25
        this.container.add(this.axes)
    }



    //funkcja zwracająca kontener

    getPlayerCont() {
        return this.container
    }

    //funkcja zwracająca playera

    getPlayerMesh() {
        return this.player
    }
    getPlayerAxes() {
        return this.axes
    }

}


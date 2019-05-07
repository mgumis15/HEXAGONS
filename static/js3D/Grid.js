class Grid {

    constructor() {


        //this.container = new THREE.Object3D();

        //wywołanie funkcji init()
        this.init()
    }

    init() {
        // utworzenie i spozycjonowanie światła
        this.geometry = new THREE.PlaneGeometry(2000, 2000, 50, 50);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x8888ff,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.7
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.plane.rotation.x = 3.14 / 2
        this.plane.rotation.z = 3.14 / 2
        // // dodanie światła do kontenera
        //this.container.add(this.plane);

        // nakierowanie na środek sceny
        //...

    }


    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getPlane() {
        return this.plane;
    }

    // inne funkcje, np zmiana koloru bryły, zmiana koloru światła


}
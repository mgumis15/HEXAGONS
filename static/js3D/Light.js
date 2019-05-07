class Light extends THREE.PointLight {
    constructor() {
        super(0xffffff, 2, 200, Math.PI / 6)
        var container = new THREE.Object3D()
        var geometry = new THREE.SphereGeometry(5, 4, 2);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        var sphere = new THREE.Mesh(geometry, material);

        this.position.y = 20;
        sphere.position.y = 20;
        container.add(this)
        this.lookAt(container)
        container.add(sphere)

        return container
    }
    set lightPosition(a) {
        this.position.y = a
    }
}
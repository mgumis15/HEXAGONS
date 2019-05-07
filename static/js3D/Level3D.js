class Level3D {

    constructor(scene, camera, player) {
        this.getData(scene);
        this.scene = scene
        this.player = player
        this.camera = camera
    }
    getData(scene) {
        var that = this
        $.ajax({
            url: "/read", // uwaga - post na serwerze
            data: "site",
            type: "POST",
            success: function (data) {
                that.makeLevel(data, scene)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    makeLevel(object, scene) {
        var container = new THREE.Object3D()
        for (let i = 0; i < object.level.length; i++) {
            if (i == 0) {
                var hex = new Hex3D(object.level[i].dirOut, object.level[i].dirOut)

            } else {
                var hex = new Hex3D(object.level[i].dirOut, object.level[i - 1].dirIn)
            }
            if (object.level[i].x % 2 == 0) {
                hex.position.z = Settings.radius * object.level[i].x * Math.sqrt(3)
                hex.position.x = Settings.radius * object.level[i].y * -2
            } else {
                hex.position.z = Settings.radius * object.level[i].x * Math.sqrt(3)
                hex.position.x = Settings.radius * object.level[i].y * -2 - Settings.radius
            }
            if (i == 0) {
                this.player.getPlayerCont().position.x = hex.position.x
                this.player.getPlayerCont().position.z = hex.position.z
            }
            hex.name = "hex"
            if (object.level[i].type == "light") {
                var light = new Light()
                light.name = "lights"
                hex.add(light)
            } else if (object.level[i].type == "treasure") {
                var treasure = new Item()
                treasure.name = "treasure"
                hex.add(treasure)
            }
            container.add(hex)

        }
        container.position.x = object.level.length * Settings.radius
        container.position.z = -object.level.length * Settings.radius
        this.player.getPlayerCont().position.x += object.level.length * Settings.radius
        this.player.getPlayerCont().position.z += -object.level.length * Settings.radius
        this.camera.position.x = this.player.getPlayerCont().position.x
        this.camera.position.z = this.player.getPlayerCont().position.z + 400
        this.camera.position.y = this.player.getPlayerCont().position.y + 400
        this.camera.lookAt(this.player.getPlayerCont().position)
        container.name = "hexs"
        scene.add(container)

    }



}
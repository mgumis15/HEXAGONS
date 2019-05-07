class Model {

    constructor() {

        this.container = new THREE.Object3D()
        this.mixer = null
        this.axes = new THREE.AxesHelper(200) // osie konieczne do kontroli kierunku ruchu
        this.clock = new THREE.Clock();
        this.meshmodel
        this.light = new THREE.PointLight(0xffffff, 2, 200, Math.PI / 6)

        var that = this
        this.loadModel = function (url, callback) {

            var loader = new THREE.JSONLoader();

            loader.load(url, function (geometry) {
                var modelMaterial = new THREE.MeshBasicMaterial(
                    {
                        map: new THREE.TextureLoader().load("dragon_armour.png"),
                        morphTargets: true // ta własność odpowiada za animację materiału modelu
                    });
                that.meshModel = new THREE.Mesh(geometry, modelMaterial)
                that.meshModel.name = "dragon";
                that.meshModel.rotation.y = Math.PI / 2; // ustaw obrót modelu
                that.meshModel.scale.set(1, 1, 1); // ustaw skalę modelu
                that.meshModel.position.set(0, 25, 0)
                // ładowanie modelu jak poprzednio

                //utworzenie mixera jak poprzednio
                that.mixer = new THREE.AnimationMixer(that.meshModel)

                //dodanie modelu do kontenera

                that.container.add(that.meshModel)

                // zwrócenie kontenera

                callback(that.container);

            });
        }
        this.axes.position.y = 25
        this.container.add(this.axes)
        this.container.add(this.light)
    }
    // update mixera

    updateModel() {
        var delta = this.clock.getDelta();
        if (this.mixer) this.mixer.update(delta)
    }

    //animowanie postaci

    setAnimation() {
        this.mixer.clipAction("run").play();
    }
    stopAnimation() {
        this.mixer.clipAction("run").stop();
    }
    getPlayerCont() {
        return this.container
    }
    getPlayerMesh() {
        return this.meshModel
    }
    getPlayerAxes() {
        return this.axes
    }
}


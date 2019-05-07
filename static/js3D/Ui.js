class Ui {
    constructor(scene) {
        this.setLight(scene)
    }
    setLight(scene) {
        document.getElementById("intensityLight").addEventListener("change", function () {
            var val = parseFloat(document.getElementById("intensityLight").value)

            var a = scene.children[2].children

            for (let i = 0; i < a.length; i++) {
                var b = a[i].children
                for (let n = 0; n < b.length; n++) {
                    if (b[n].name == "lights") {
                        b[n].children[0].intensity = val
                    }
                }
            }
        })
        document.getElementById("positionLight").addEventListener("change", function () {
            var a = scene.children[2].children
            var val = document.getElementById("positionLight").value
            for (let i = 0; i < a.length; i++) {
                var b = a[i].children
                for (let n = 0; n < b.length; n++) {
                    if (b[n].name == "lights") {
                        b[n].position.y = parseInt(val)
                    }
                }
            }
        })
    }
}
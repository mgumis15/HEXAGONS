$(document).ready(function () {

    var door1;
    var door2
    $.ajax({
        url: "/read", // uwaga - post na serwerze
        data: "read",
        type: "POST",
        success: function (data) {
            // object = data

            var scene = new THREE.Scene()
            var camera = new THREE.PerspectiveCamera(
                45,    // kąt patrzenia kamery (FOV - field of view)
                $(window).width() / $(window).height(),    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
                0.1,    // minimalna renderowana odległość
                10000    // maxymalna renderowana odległość od kamery 
            );

            var renderer = new THREE.WebGLRenderer();
            // var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            // orbitControl.addEventListener('change', function () {
            //     renderer.render(scene, camera)
            // });
            var axes = new THREE.AxesHelper(1000)
            scene.add(axes);

            renderer.setClearColor(0xffffff);
            renderer.setSize($(window).width(), $(window).height());
            $("#root").append(renderer.domElement);
            var plane = new Grid();
            scene.add(plane.getPlane())
            //if (data.level) {
            var player = new Model()
            player.loadModel("dragon/tris.js", function (modeldata) {
                scene.add(modeldata) // data to obiekt kontenera zwrócony z Model.js
            })

            var level = new Level3D(scene, camera, player);
            var ui = new Ui(scene)
            // } else {


            // }
            var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
            var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D
            var walk
            var bezpiecznik = false
            $(document).mousedown(function (event) {
                if (bezpiecznik) {
                    player.stopAnimation()
                    clearInterval(walk)
                }
                scene.children.forEach(element => {
                    if (element.name == "sfera") scene.remove(element)
                });
                mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
                mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
                raycaster.setFromCamera(mouseVector, camera);
                var hexs
                var floors = []
                scene.children.forEach(element => {
                    if (element.name == "hexs") hexs = element
                });
                hexs.children.forEach(element => {
                    element.children.forEach(elementChild => {
                        if (elementChild.name == "floor") floors.push(elementChild)
                    });
                });
                console.log(floors)
                var intersects = raycaster.intersectObjects(floors);
                var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający PUNKT kliknięcia
                var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający KIERUNEK ruchu playera
                if (intersects.length > 0) {
                    player.setAnimation()
                    clickedVect = intersects[0].point
                    directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()
                    var angle = Math.atan2(
                        player.getPlayerCont().position.clone().x - clickedVect.x,
                        player.getPlayerCont().position.clone().z - clickedVect.z
                    )
                    player.getPlayerMesh().rotation.y = angle - Math.PI / 2
                    player.getPlayerAxes().rotation.y = angle - Math.PI
                    var dist = player.getPlayerCont().position.clone().distanceTo(clickedVect)
                    var geometry = new THREE.SphereGeometry(20, 4, 2);
                    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                    var sphere = new THREE.Mesh(geometry, material);
                    sphere.name = "sfera"
                    scene.add(sphere)
                    sphere.position.x = clickedVect.x
                    sphere.position.z = clickedVect.z
                    sphere.position.y = clickedVect.y
                    walk = setInterval(function () {
                        bezpiecznik = true
                        player.getPlayerCont().translateOnAxis(directionVect, 1)
                        dist = player.getPlayerCont().position.clone().distanceTo(clickedVect)
                        camera.position.x = player.getPlayerCont().position.x
                        camera.position.z = player.getPlayerCont().position.z + 400
                        camera.position.y = player.getPlayerCont().position.y + 400
                        camera.lookAt(player.getPlayerCont().position)
                        var dis = parseInt(dist)
                        if (dis == 0) {
                            player.stopAnimation()
                            clearInterval(walk)
                        }
                    }, 10)
                }
            })

            var clock = new THREE.Clock();
            function render() {
                $(window).on("resize", function () {
                    renderer.setSize($(window).width(), $(window).height());
                })
                player.updateModel()
                renderer.render(scene, camera);
                requestAnimationFrame(render);
            }
            render();
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });

})
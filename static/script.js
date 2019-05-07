var tabAll = []
var data = { size: 3, level: [] }
var kliki = 0
var typeH = "Walls"
window.addEventListener("load", function () {
    var create = new Hex()
    document.getElementById("select").addEventListener("change", function () {
        data.size = document.getElementById("select").value
        tabAll = []
        data.level = []
        create.createHex(data.size)
    })
    document.getElementById("write").addEventListener("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: "/write", // uwaga - post na serwerze
            data: data,
            type: "POST",
            success: function (data) {
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });


    })
    document.getElementById("read").addEventListener("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: "/read", // uwaga - post na serwerze
            data: "read",
            type: "POST",
            success: function (data) {
                object = data
                create.read(object)

            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });


    })

    document.getElementById("walls").addEventListener("click", function () {
        typeH = "walls"

    })
    document.getElementById("enemy").addEventListener("click", function () {
        typeH = "enemy"
    })

    document.getElementById("treasure").addEventListener("click", function () {
        typeH = "treasure"
    })
    document.getElementById("light").addEventListener("click", function () {
        typeH = "light"
    })
})

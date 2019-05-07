class Hex {
    constructor() {
        this.createHex(3)
    }
    createHex(size) {
        document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
        document.getElementById("right").innerHTML = ""
        for (let i = 0; i < size; i++) {
            for (let m = 0; m < size; m++) {
                if (i % 2 == 0) {
                    var img = document.createElement("div")
                    img.className = "img"
                    img.style.top = (m * 131) + "px"
                    img.style.left = i * 115 + "px"
                    img.style.textAlign = "center"
                    img.style.fontSize = "30px"
                    let tabOne = {
                        id: kliki,
                        x: i,
                        y: m,
                        klik: true,
                        direct: -1,
                        obj: img.addEventListener("click", function () {
                            let bezpiecznik = true
                            if (tabOne.klik) {
                                tabOne.id = kliki
                                kliki++
                                tabOne.klik = false
                                tabOne.direct++
                                var ps = document.createElement("p")
                                ps.className = "ps"
                                ps.innerHTML = tabOne.direct
                                this.appendChild(ps)
                                var arrow = document.createElement("div")
                                arrow.className = "arrows"
                                this.appendChild(arrow)
                            } else {
                                tabOne.direct += 1
                                if (tabOne.direct > 5) tabOne.direct = 0
                                this.firstChild.innerHTML = tabOne.direct
                                this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"
                            }
                            for (let s = 0; s < data.level.length; s++) {
                                if (tabOne.id == data.level[s].id) {
                                    bezpiecznik = false
                                }
                            }
                            if (bezpiecznik) {
                                let k = tabOne.direct
                                for (let z = 0; z < 3; z++) {
                                    k++
                                    if (k > 5) k = 0
                                }
                                let tabTwo = {
                                    id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                }

                                data.level.push(tabTwo)
                                document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                            } else {
                                let k = tabOne.direct
                                for (let z = 0; z < 3; z++) {
                                    k++
                                    if (k > 5) k = 0
                                }
                                data.level[tabOne.id].dirOut = tabOne.direct
                                data.level[tabOne.id].dirIn = k
                                data.level[tabOne.id].type = typeH
                                document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                            }
                        }),
                    }
                    tabAll.push(tabOne)
                    document.getElementById("right").appendChild(img)
                } else {
                    var img = document.createElement("div")
                    img.className = "img"
                    img.style.top = ((m * 131) + 65) + "px"
                    img.style.left = i * 115 + "px"
                    img.style.textAlign = "center"
                    img.style.fontSize = "30px"
                    let tabOne = {
                        id: kliki,
                        x: i,
                        y: m,
                        klik: true,
                        direct: -1,
                        obj: img.addEventListener("click", function () {
                            let bezpiecznik = true
                            if (tabOne.klik) {
                                tabOne.id = kliki
                                kliki++
                                tabOne.klik = false
                                tabOne.direct++
                                var ps = document.createElement("p")
                                ps.className = "ps"
                                ps.innerHTML = tabOne.direct
                                this.appendChild(ps)
                                var arrow = document.createElement("div")
                                arrow.className = "arrows"
                                this.appendChild(arrow)
                            } else {
                                tabOne.direct += 1
                                if (tabOne.direct > 5) tabOne.direct = 0
                                this.firstChild.innerHTML = tabOne.direct
                                this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"
                            }
                            for (let s = 0; s < data.level.length; s++) {
                                if (tabOne.id == data.level[s].id) {
                                    bezpiecznik = false
                                }
                            }
                            if (bezpiecznik) {
                                let k = tabOne.direct
                                for (let z = 0; z < 3; z++) {
                                    k++
                                    if (k > 5) k = 0
                                }
                                let tabTwo = {
                                    id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                }
                                data.level.push(tabTwo)
                                document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                            } else {
                                let k = tabOne.direct
                                for (let z = 0; z < 3; z++) {
                                    k++
                                    if (k > 5) k = 0
                                }
                                data.level[tabOne.id].dirOut = tabOne.direct
                                data.level[tabOne.id].dirIn = k
                                data.level[tabOne.id].type = typeH
                                document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                            }

                        })
                    }
                    tabAll.push(tabOne)
                    document.getElementById("right").appendChild(img)
                }
            }
            var img = document.createElement("br")
            document.getElementById("right").appendChild(img)

        }
    }
    read(object) {

        document.getElementById("right").innerHTML = ""
        document.getElementById("select").value = object.size
        let bezpiecznik1 = true
        kliki = object.level.length
        data = object
        document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
        if (kliki == 0) {
            this.createHex(object.size)
        } else {
            for (let i = 0; i < object.size; i++) {
                for (let m = 0; m < object.size; m++) {
                    bezpiecznik1 = true
                    for (let s = 0; s < object.level.length; s++) {
                        if ((object.level[s].x == i) && (object.level[s].y == m)) {
                            if (i % 2 == 0) {
                                var img = document.createElement("div")
                                img.className = "img"
                                img.style.top = (m * 131) + "px"
                                img.style.left = i * 115 + "px"
                                img.style.textAlign = "center"
                                img.style.fontSize = "30px"
                                var ps = document.createElement("p")
                                ps.className = "ps"
                                ps.innerHTML = object.level[s].dirOut
                                img.appendChild(ps)
                                var arrow = document.createElement("div")
                                arrow.className = "arrows"
                                img.appendChild(arrow)
                                img.firstChild.innerHTML = object.level[s].dirOut
                                img.style.transform = "rotate(" + object.level[s].dirOut * 60 + "deg)"
                                let tabOne = {
                                    id: object.level[s].id,
                                    x: i,
                                    y: m,
                                    klik: false,
                                    direct: object.level[s].dirOut,
                                    obj: img.addEventListener("click", function () {
                                        let bezpiecznik = true
                                        tabOne.direct += 1
                                        if (tabOne.direct > 5) tabOne.direct = 0
                                        this.firstChild.innerHTML = tabOne.direct
                                        this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"
                                        for (let s = 0; s < data.level.length; s++) {
                                            if (tabOne.id == data.level[s].id) {
                                                bezpiecznik = false
                                            }
                                        }
                                        if (bezpiecznik) {
                                            let k = tabOne.direct
                                            for (let z = 0; z < 3; z++) {
                                                k++
                                                if (k > 5) k = 0
                                            }
                                            let tabTwo = {
                                                id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                            }

                                            data.level.push(tabTwo)
                                            document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                                        } else {
                                            let k = tabOne.direct
                                            for (let z = 0; z < 3; z++) {
                                                k++
                                                if (k > 5) k = 0
                                            }
                                            data.level[tabOne.id].dirOut = tabOne.direct
                                            data.level[tabOne.id].dirIn = k
                                            data.level[tabOne.id].type = typeH
                                            document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                                        }
                                    }),
                                }
                                tabAll.push(tabOne)
                                document.getElementById("right").appendChild(img)
                            } else {
                                var img = document.createElement("div")
                                img.className = "img"
                                img.style.top = ((m * 131) + 65) + "px"
                                img.style.left = i * 115 + "px"
                                img.style.textAlign = "center"
                                img.style.fontSize = "30px"
                                var ps = document.createElement("p")
                                ps.className = "ps"
                                ps.innerHTML = object.level[s].dirOut
                                img.appendChild(ps)
                                var arrow = document.createElement("div")
                                arrow.className = "arrows"
                                img.appendChild(arrow)
                                img.firstChild.innerHTML = object.level[s].dirOut
                                img.style.transform = "rotate(" + object.level[s].dirOut * 60 + "deg)"
                                let tabOne = {
                                    id: object.level[s].id,
                                    x: i,
                                    y: m,
                                    klik: false,
                                    direct: object.level[s].dirOut,
                                    obj: img.addEventListener("click", function () {
                                        let bezpiecznik = true
                                        tabOne.direct += 1
                                        if (tabOne.direct > 5) tabOne.direct = 0
                                        this.firstChild.innerHTML = tabOne.direct
                                        this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"

                                        for (let s = 0; s < data.level.length; s++) {
                                            if (tabOne.id == data.level[s].id) {
                                                bezpiecznik = false
                                            }
                                        }
                                        if (bezpiecznik) {
                                            let k = tabOne.direct
                                            for (let z = 0; z < 3; z++) {
                                                k++
                                                if (k > 5) k = 0
                                            }
                                            let tabTwo = {
                                                id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                            }

                                            data.level.push(tabTwo)
                                            document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                                        } else {
                                            let k = tabOne.direct
                                            for (let z = 0; z < 3; z++) {
                                                k++
                                                if (k > 5) k = 0
                                            }
                                            data.level[tabOne.id].dirOut = tabOne.direct
                                            data.level[tabOne.id].dirIn = k
                                            data.level[tabOne.id].type = typeH
                                            document.getElementById("json").innerHTML = JSON.stringify(data, null, 5)
                                        }

                                    })
                                }
                                tabAll.push(tabOne)
                                document.getElementById("right").appendChild(img)
                            }
                            bezpiecznik1 = false
                        }

                    }
                    if (bezpiecznik1) {
                        if (i % 2 == 0) {
                            var img = document.createElement("div")
                            img.className = "img"
                            img.style.top = (m * 131) + "px"
                            img.style.left = i * 115 + "px"
                            img.style.textAlign = "center"
                            img.style.fontSize = "30px"
                            let tabOne = {
                                id: kliki,
                                x: i,
                                y: m,
                                klik: true,
                                direct: -1,
                                obj: img.addEventListener("click", function () {
                                    let bezpiecznik = true
                                    if (tabOne.klik) {
                                        tabOne.id = kliki
                                        kliki++
                                        tabOne.klik = false
                                        tabOne.direct++
                                        var ps = document.createElement("p")
                                        ps.className = "ps"
                                        ps.innerHTML = tabOne.direct
                                        this.appendChild(ps)
                                        var arrow = document.createElement("div")
                                        arrow.className = "arrows"
                                        this.appendChild(arrow)
                                    } else {
                                        tabOne.direct += 1
                                        if (tabOne.direct > 5) tabOne.direct = 0
                                        this.firstChild.innerHTML = tabOne.direct
                                        this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"
                                    }
                                    for (let s = 0; s < data.level.length; s++) {
                                        if (tabOne.id == data.level[s].id) {
                                            bezpiecznik = false
                                        }
                                    }
                                    if (bezpiecznik) {
                                        let k = tabOne.direct
                                        for (let z = 0; z < 3; z++) {
                                            k++
                                            if (k > 5) k = 0
                                        }
                                        let tabTwo = {
                                            id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                        }
                                        data.level.push(tabTwo)
                                    } else {
                                        let k = tabOne.direct
                                        for (let z = 0; z < 3; z++) {
                                            k++
                                            if (k > 5) k = 0
                                        }
                                        data.level[tabOne.id].dirOut = tabOne.direct
                                        data.level[tabOne.id].dirIn = k
                                        data.level[tabOne.id].type = typeH
                                    }
                                }),
                            }
                            tabAll.push(tabOne)
                            document.getElementById("right").appendChild(img)
                        } else {
                            var img = document.createElement("div")
                            img.className = "img"
                            img.style.top = ((m * 131) + 65) + "px"
                            img.style.left = i * 115 + "px"
                            img.style.textAlign = "center"
                            img.style.fontSize = "30px"
                            let tabOne = {
                                id: kliki,
                                x: i,
                                y: m,
                                klik: true,
                                direct: -1,
                                obj: img.addEventListener("click", function () {
                                    let bezpiecznik = true
                                    if (tabOne.klik) {
                                        tabOne.id = kliki
                                        kliki++
                                        tabOne.klik = false
                                        tabOne.direct++
                                        var ps = document.createElement("p")
                                        ps.className = "ps"
                                        ps.innerHTML = tabOne.direct
                                        this.appendChild(ps)
                                        var arrow = document.createElement("div")
                                        arrow.className = "arrows"
                                        this.appendChild(arrow)
                                    } else {
                                        tabOne.direct += 1
                                        if (tabOne.direct > 5) tabOne.direct = 0
                                        this.firstChild.innerHTML = tabOne.direct
                                        this.style.transform = "rotate(" + tabOne.direct * 60 + "deg)"
                                    }
                                    for (let s = 0; s < data.level.length; s++) {
                                        if (tabOne.id == data.level[s].id) {
                                            bezpiecznik = false
                                        }
                                    }
                                    if (bezpiecznik) {
                                        let k = tabOne.direct
                                        for (let z = 0; z < 3; z++) {
                                            k++
                                            if (k > 5) k = 0
                                        }
                                        let tabTwo = {
                                            id: tabOne.id, x: tabOne.x, y: tabOne.y, dirOut: tabOne.direct, dirIn: k, type: typeH
                                        }
                                        data.level.push(tabTwo)
                                    } else {
                                        let k = tabOne.direct
                                        for (let z = 0; z < 3; z++) {
                                            k++
                                            if (k > 5) k = 0
                                        }
                                        data.level[tabOne.id].dirOut = tabOne.direct
                                        data.level[tabOne.id].dirIn = k
                                        data.level[tabOne.id].type = typeH
                                    }
                                })
                            }
                            tabAll.push(tabOne)
                            document.getElementById("right").appendChild(img)
                        }
                    }
                }
                var img = document.createElement("br")
                document.getElementById("right").appendChild(img)
            }
        }
    }
}
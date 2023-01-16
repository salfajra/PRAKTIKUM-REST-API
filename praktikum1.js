const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

//pemaggilan fungsi pada pustaka express,body0parser,dan cors.
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//end-point pertama method GET dg url "/test"
// endpoint "/test" dengan method GET
app.get("/tugas", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "tugas praktikum REST API gais",
        method: req.method,
        code: res.statusCode
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//fungsi jalankan server
// menjalankan server pada port 1000
app.listen(1000, () => {
    console.log("Server run on port 1000");
})

//------------------TUGAS PERTAMA!!!!!!!----------------------------

// end-point pertama "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) //mengamil nilai sisi dari body
 
    let luas_permukaan = sisi * sisi
    let volume = sisi * sisi * sisi
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi : sisi,
        luas_permukaan: luas_permukaan,
        volume : volume 
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point ke-2 "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
 
    let luas_permukaan = panjang * lebar
    let volume = panjang * lebar * tinggi
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        luas_permukaan: luas_permukaan,
        volume : volume 
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point ke-3 "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = Number(req.body.phi) // mengambil nilai phi dari body
    let jari_jari = Number(req.body.jari_jari) // mengamil nilai jari_jari dari body
 
    let luas_permukaan = 4 * phi * jari_jari * jari_jari
    let volume = 4/3 * phi * jari_jari * jari_jari * jari_jari
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        phi : phi,
        jari_jari : jari_jari,
        luas_permukaan: luas_permukaan,
        volume : volume 
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point ke-4 "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = Number(req.body.phi) // mengambil nilai phi dari body
    let jari_jari = Number(req.body.jari_jari) // mengamil nilai jari_jari dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
 
    let luas_permukaan = 2 * phi * jari_jari * (jari_jari + tinggi)
    let volume = phi * jari_jari * jari_jari * tinggi
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        phi : phi,
        jari_jari : jari_jari,
        tinggi : tinggi,
        luas_permukaan: luas_permukaan,
        volume : volume 
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//-----------------TUGAS KEDUAAA!!!!!!!-----------------------

//menambah end-point untuk suhu celcius
// endpoint "/convert/nama_suhu/tinggi_suhu" dengan method GET
app.get("/convert/celcius/:tinggi_suhu", (req,res) => {
    // :nama_suhu dan :tinggi_suhu 🡪 diberikan titik dua didepan menunjukkan "nama_suhu" dan "tinggi_suhu" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let tinggi_suhu = Number (req.params.tinggi_suhu) // mengambil nilai pada parameter tinggi_suhu

    let reamur = 4/5 * tinggi_suhu
    let fahrenheit = 9/5 * tinggi_suhu + 32 
    let kelvin = 273 + tinggi_suhu
  
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        celcius : tinggi_suhu,
        result : {
            reamur : reamur,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }   
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
 
})

//menambah end-point untuk suhu reamur
// endpoint "/convert/nama_suhu/tinggi_suhu" dengan method GET
app.get("/convert/reamur/:tinggi_suhu", (req,res) => {
    // :nama_suhu dan :tinggi_suhu 🡪 diberikan titik dua didepan menunjukkan "nama_suhu" dan "tinggi_suhu" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let tinggi_suhu = Number (req.params.tinggi_suhu) // mengambil nilai pada parameter tinggi_suhu

    let celcius = 5/4 * tinggi_suhu
    let fahrenheit = (9/4 * tinggi_suhu) + 32 
    let kelvin = (5/4 * tinggi_suhu) + 273
  
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        reamur : tinggi_suhu,
        result : {
            celcius : celcius,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }   
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
 
})

//menambah end-point untuk suhu fahrenheit
// endpoint "/convert/nama_suhu/tinggi_suhu" dengan method GET
app.get("/convert/fahrenheit/:tinggi_suhu", (req,res) => {
    // :nama_suhu dan :tinggi_suhu 🡪 diberikan titik dua didepan menunjukkan "nama_suhu" dan "tinggi_suhu" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let tinggi_suhu = Number (req.params.tinggi_suhu) // mengambil nilai pada parameter tinggi_suhu

    let celcius = 5/9 * (tinggi_suhu - 32)
    let reamur = 4/9 * (tinggi_suhu - 32)
    let kelvin = 5/9 * (tinggi_suhu - 32) + 273
  
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        fahrenheit : tinggi_suhu,
        result : {
            celcius : celcius,
            reamur : reamur,
            kelvin : kelvin
        }   
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
 
})

//menambah end-point untuk suhu kelvin
// endpoint "/convert/nama_suhu/tinggi_suhu" dengan method GET
app.get("/convert/kelvin/:tinggi_suhu", (req,res) => {
    // :nama_suhu dan :tinggi_suhu 🡪 diberikan titik dua didepan menunjukkan "nama_suhu" dan "tinggi_suhu" 
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
 
    // menampung data yang dikirimkan
    let tinggi_suhu = Number (req.params.tinggi_suhu) // mengambil nilai pada parameter tinggi_suhu

    let celcius = tinggi_suhu - 273
    let reamur = 4/5 * (tinggi_suhu - 273)
    let fahrenheit = 9/5 * (tinggi_suhu - 273) + 32
  
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        kelvin : tinggi_suhu,
        result : {
            celcius : celcius,
            reamur : reamur,
            fahrenheit : fahrenheit
        }   
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
 
})

//-----------------TUGAS KETIGA !!!!!!!!!!!!!!--------------------

// end-point pertama "/decimal" dengan method POST
app.post("/decimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let bilangan = Number(req.body.bilangan) //mengamil nilai sisi dari body
 
    let biner = bilangan.toString(2)
    let octal = bilangan.toString(8)
    let hexadecimal = bilangan.toString(16)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal : bilangan,
        result : {
            biner : biner,
            octal: octal,
            hexadecimal : hexadecimal 
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point kedua "/biner" dengan method POST
app.post("/biner", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let bilangan = req.body.bilangan //mengamil nilai sisi dari body
 
    let decimal = parseInt(2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner : bilangan,
        result : {
            decimal : decimal,
            octal: octal,
            hexadecimal : hexadecimal 
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point ketiga "/octal" dengan method POST
app.post("/octal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let bilangan = Number(req.body.bilangan) //mengamil nilai sisi dari body
 
    let decimal = parseInt(bilangan, 8)
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        octal : bilangan,
        result : {
            decimal : decimal,
            biner: biner,
            hexadecimal : hexadecimal 
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point keempat "/hexadecimal" dengan method POST
app.post("/hexadecimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let bilangan = Number(req.body.bilangan) //mengamil nilai sisi dari body
 
    let decimal = parseInt(bilangan, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexadecimal : bilangan,
        result : {
            decimal : decimal,
            biner: biner,
            octal : octal
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//---------------------TUGAS KEEMPAT!!!!!!!!!!--------------------
// end-point pertama "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) //mengamil nilai sisi dari body
    let tinggi = Number(req.body.tinggi) //mengamil nilai sisi dari body
    let bmi  = berat / (tinggi * tinggi)
    let status 
 
    if (bmi < 18.5){
        status = "Kekurangan berat badan"
    }else if (bmi >= 18.5 && bmi <= 24.9){
        status = "Normal (IDEAL)"
    }else if (bmi >= 25.0 && bmi <= 29.9){
        status = "Kelebihan berat badan"
    }else {
        status = " Kegemukan (OBESITAS)"
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi: bmi,
        status : status 
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
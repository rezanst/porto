function updateData(){
    let nama = document.getElementById("input-nama").value
    document.getElementById("output-nama").innerHTML = nama
    document.getElementById("input-nama").value = ""

    let role = document.getElementById("input-role").value
    document.getElementById("output-role").innerHTML = role
    document.getElementById("input-role").value = ""

    let availability = document.getElementById("input-availability").value
    document.getElementById("output-availability").innerHTML = availability
    document.getElementById("input-availability").value = ""

    let usia = document.getElementById("input-usia").value
    document.getElementById("output-usia").innerHTML = usia
    document.getElementById("input-usia").value = ""

    let lokasi = document.getElementById("input-lokasi").value
    document.getElementById("output-lokasi").innerHTML = lokasi
    document.getElementById("input-lokasi").value = ""

    let pengalaman = document.getElementById("input-pengalaman").value
    document.getElementById("output-pengalaman").innerHTML = pengalaman
    document.getElementById("input-pengalaman").value = ""

    let email = document.getElementById("input-email").value
    document.getElementById("output-email").innerHTML = email
    document.getElementById("input-email").value = ""

    // untuk latihan, tambahkan id2 untuk input dan output di html
    // dan ubah value output kalau form di submit

}

function hideShowForm(){
    let disp = document.getElementById("konten-form").style.display

    console.log(disp)
    if (disp == "") {
        document.getElementById("konten-form").style.display = "block"
    } else {
        document.getElementById("konten-form").style.display = ""
    }    
}
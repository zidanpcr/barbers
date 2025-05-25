export default function ArtikelDetail(){
    return (
        <div>
            <h1>Bros Barbershop</h1>
            <Judul/>
            <Gambar/>
            <Deskripsi/>
            <KembaliLanjut/>
        </div>
    )
}

function Judul(){
    return (
        <div>
           <h1>Tren Potong Rambut Pria Remaja Tahun Ini!!</h1>
        </div>
    )
}

function Gambar(){
    return (
        <div>
            <img src="img/PictureBros.png" alt="logo" 
            style={{width: "300px", display: "block", margin: "0 auto"}}/>
            <small className="Gambar">logo bros barbershop</small> 
        </div>
    )
}

function Deskripsi(){
    return (
        <div>
           <p>Tahun ini, gaya rambut pria remaja yang modern dan stylish jadi favorit.
                Skin Fade dengan Textured Top memberi gradasi halus dan tampilan rapi. 
                Taper Cut tetap klasik dengan sentuhan modern.
                Untuk tampilan lebih berani, Mullet Modern dengan rambut belakang panjang jadi pilihan rata-rata pada pria remaja.
                French Crop hadir dengan potongan pendek dan poni ke depan, memberi kesan kasual tapi tetap trendi.
                Pilih gaya terbaik dan konsultasikan dengan bro barbershop!</p>
        </div>
    )
}

function KembaliLanjut(){
    return (
        <small className="KembaliLanjut">Kembali | Lanjut</small> 
      
    )
}




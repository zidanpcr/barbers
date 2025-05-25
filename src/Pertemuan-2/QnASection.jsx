export default function QnASection(){
    return (
        <div>
            <SubJudul/>
            <QnA
                tanya="Apa gaya rambut pria remaja yang sedang tren tahun ini?"
                jawab="Gaya rambut modern dan stylish seperti Skin Fade dengan Textured Top, Taper Cut, Mullet Modern, dan French Crop menjadi favorit."/>
            <QnA2
                tanya="Bagaimana cara memilih gaya rambut yang tepat?"
                jawab="Pilih gaya yang sesuai dengan bentuk wajah dan gaya hidup, serta konsultasikan dengan Bro Barbershop untuk hasil terbaik!"/>
            <QnA3
                tanya="Mengapa Taper Cut tetap populer?"
                jawab="Karena tetap mempertahankan tampilan klasik dengan sentuhan modern yang cocok untuk berbagai kesempatan."/>
            <QnA4
                tanya="Siapa yang cocok dengan gaya Mullet?"
                jawab="Mullet cocok untuk pria remaja yang ingin tampil lebih berani dengan rambut belakang yang lebih panjang."/>
            <QnA5
                tanya="Apa keunikan dari French Crop?"
                jawab="Potongan pendek dengan poni ke depan memberikan kesan kasual namun tetap trendi."/>
            <QnAInfo/>
            
        </div>
    )
}

 function SubJudul(){
    return <h2> QnA Section</h2>;
 }   

 function QnA(props){
    return (
        <div>
            <h4>Q: {props.tanya}</h4>
            <p> A: {props.jawab}</p>
        </div>
    )
 }
   
 function QnA2(props){
    return (
        <div>
            <h4>Q: {props.tanya}</h4>
            <p> A: {props.jawab}</p>
        </div>
    )
 }
   
 function QnA3(props){
    return (
        <div>
            <h4>Q: {props.tanya}</h4>
            <p> A: {props.jawab}</p>
        </div>
    )
 }
   
 function QnA4(props){
    return (
        <div>
            <h4>Q: {props.tanya}</h4>
            <p> A: {props.jawab}</p>
        </div>
    )
 }
   
 function QnA5(props){
    return (
        <div>
            <h4>Q: {props.tanya}</h4>
            <p> A: {props.jawab}</p>
        </div>
    )
 }
   
 function QnAInfo(){
    return <p>Hubungi jika ada pertanyaan lebih lanjut</p>
 }
export default function ListProduct(){
    return (
        <div>
            <h1>List Product</h1>
            <div class="product-list">
            <SkinFade/>
            <TaperCut/>
            <Mullet/>
            <FrenchCrop/>
            </div>
        </div>
    )
}

function SkinFade(){
    return (
        <div class="card-product">
           <img src="img/SkinFade.png" alt="logo" width="200px" height="200px"/>
            <div>
                <h3>SkinFade</h3>
                <p>Rp 50.000</p>
            </div>
        </div>
        
    )
}

function TaperCut(){
    return (
        <div class="card-product">
            <img src="img/TaperCut.png" alt="logo" width="200px" height="200px"/>
            <div>
                <h3>TaperCut</h3>
                <p>Rp 60.000</p>
            </div>
        </div>
    )
}

function Mullet(){
    return (
        <div class="card-product">
           <img src="img/Mullet.png" alt="logo" width="200px" height="200px"/>
            <div>
                <h3>Mullet</h3>
                <p>Rp 70.000</p>
            </div>
        </div>
    )
}

function FrenchCrop(){
    return (
        <div class="card-product">
            <img src="img/FrenchCrop.png" alt="logo" width="200px" height="200px"/>
            <div>
                <h3>FrenchCrop</h3>
                <p>Rp 75.000</p>
            </div>
        </div>
    )
}




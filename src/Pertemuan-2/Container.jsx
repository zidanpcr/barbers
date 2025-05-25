export default function Container({children}){
    return(
        <div className="card">
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - kelompok3</p>
            </footer>
        </div>
    )
}
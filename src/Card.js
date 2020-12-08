import { formatter } from './number';

const Card = ({ confirm, recovered, death, value }) => {
    return (
        <center>
        <div className='row card-columns'>
            <div className="card text-white text-center bg-warning w-20">
                <div className="card-header"><h3 className='card-title'>Positif</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(confirm)}</h3>
                <h5>Jumlah orang yang positif sampai saat ini</h5>
                </div>
            </div>
           
            <div className="card text-white text-center bg-success w-20">
                <div className="card-header"><h3 className='card-title'>Sembuh</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(recovered)}</h3>
                <h5>Jumlah orang yang sembuh</h5>
                </div>
            </div>
            
            <div className="card text-white text-center bg-danger w-20">
                <div className="card-header"><h3 className='card-title'>Meninggal</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(death)}</h3>
                <h5>Jumlah orang yang meninggal karena Covid-19</h5>
                </div>
            </div>
        </div> 
        </center>
        
    )
};

export default Card;
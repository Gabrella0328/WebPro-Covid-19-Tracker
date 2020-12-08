import { formatter } from './number';
import CountUp from 'react-countup';


const Card = ({ confirm, recovered, death, value }) => {
    return (
        <center>
        <div className='row card-columns'>
            <div className="card text-white text-center bg-warning w-25">
                <div className="card-header"><h3 className='card-title'>Positif</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(confirm)}</h3>
                </div>
            </div>
           
            <div className="card text-white text-center bg-success w-25">
                <div className="card-header"><h3 className='card-title'>Sembuh</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(recovered)}</h3>
                </div>
            </div>
            
            <div className="card text-white text-center bg-danger w-25">
                <div className="card-header"><h3 className='card-title'>Meninggal</h3></div>
                <div className="card-body">
                <h3 className="card-text">{formatter.format(death)}</h3>
                </div>
            </div>
        </div> 
        </center>
        
    )
};

export default Card;
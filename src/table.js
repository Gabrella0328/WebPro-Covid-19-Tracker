import {Value} from './value'

const Table = ({prov}) =>{
    return (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
            <th scope="col">No</th>
              <th scope="col">Provinsi</th>
              <th scope="col">Positif</th>
              <th scope="col">Sembuh</th>
              <th scope="col">Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {Value(prov)}
          </tbody>
        </table>
    )
};

export default Table;
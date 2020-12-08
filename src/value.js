import { formatter } from './number'

export const Value = (prov) => {
  let a=0
  if (prov.length !== 0 ) {
  {
    return (
      prov.map(provinsi =>
        <tr key={provinsi.fid}>
          <td>{++a}</td>
          <td>{provinsi.provinsi}</td>
          <td>{formatter.format(provinsi.kasusPosi)}</td>
          <td>{formatter.format(provinsi.kasusSemb)}</td>
          <td>{formatter.format(provinsi.kasusMeni)}</td>
        </tr>
      )
    )
  }} else {
      return (
        <tr>
          
        </tr>
    )
  }
}
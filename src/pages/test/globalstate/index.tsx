//https://tuture.co/2020/04/08/870a7b7/

import React from 'react'



function Stat({ number, color }: any) {
  return <span style={{ color: color, fontWeight: 'bold'}}>{number}</span>
}

function GlobalStats({stats}: any) {
  const { cases, deaths, recovered, active, updated } = stats
  return (
      <div className="global-stats">
        <small>Update on {new Date(updated).toLocaleString()}</small>
        <table>
          <tr>
            <td>
              case: <Stat number={cases} color={'red'}/>
            </td>

            <td>
              deaths: <Stat number={deaths} color={'gray'}/>
            </td>

            <td>
              recovered: <Stat number={recovered} color={'green'}/>
            </td>

            <td>
              active: <Stat number={active} color={'orange'}/>
            </td>
          </tr>
        </table>
      </div>
    )
}

export default GlobalStats

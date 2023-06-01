import React from "react";
import data from "./csvjson.json";
import './Datasheet.css'

export default function Datasheet() {
  return (
    <div>
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>user</th>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th>Q4</th>
              <th>Q5</th>
              <th>Q6</th>
              <th>Q7</th>

              <th>Q9</th>
              <th>Q10</th>

              <th>Q12</th>

              <th>Q14</th>
              <th>Q15</th>
              <th>Q16</th>
              <th>Q17</th>
              <th>Q18</th>
              <th>Q19</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.user}</td>
                <td>{row.Q1}</td>
                <td>{row.Q2}</td>
                <td>{row.Q3}</td>
                <td>{row.Q4}</td>
                <td>{row.Q5}</td>
                <td>{row.Q6}</td>
                <td>{row.Q7}</td>
                <td>{row.Q9}</td>
                <td>{row.Q10}</td>
                <td>{row.Q12}</td>
                <td>{row.Q14}</td>
                <td>{row.Q15}</td>
                <td>{row.Q16}</td>
                <td>{row.Q17}</td>
                <td>{row.Q18}</td>
                <td>{row.Q19}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
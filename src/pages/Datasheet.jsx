import React from 'react'
import Papa from 'papaparse'
import { useState,useEffect } from 'react'
import Data from './data.csv'


function Datasheet() {
    const[data,setData]=useState([]);

    // const handleFileUpload = (e) => {
    //     const file =e.target.files[0];
    //     Papa.parse(file,{
    //         header:true,
    //         complete:(results) =>{
    //             setData(results.data);
    //         },
    //     });
    // };
    useEffect(() => {
        const fetchData=async () => {
        const response=await fetch(Data);
        const reader=response.body.getReader();
        const result=await reader.read();
        const decoder=new TextDecoder("utf-8");
        const csvData=decoder.decode(result.value);
        const parsedData= papa.parse(csvData,{
            header:true,
            skipEmptyLines:true
        }).data;
        setData(parsedData);
        };
        fetchData();
    },[]);

  return (
    <div className='Datasheet'>

        {/* <input type="file" accept=".csv" onChange={handleFileUpload}/> */}
        {data.length ? (
            <table className='dtab'>
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
                    {data.map((row,index)=>(
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

        ):null}

        <br></br>
      
    </div>
  )
}



// export default function Datasheet() {
//   return (
//     <div className='d1'>
      
//     </div>
//   )
// }



// class Datasheet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

//   componentDidMount() {
//     this.parseCSVData();
//   }

//   parseCSVData() {
//     Papa.parse('../assets/sam.csv',{
//       download: true,
//       complete: (results) => {
//         this.setState({ data: results.data });
//       }
//     });
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         <h1>CSV Data Table</h1>
//         <table>
//           <thead>
//             <tr>
//               {data[0] && data[0].map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(1).map((row, index) => (
//               <tr key={index}>
//                 {row.map((cell, index) => (
//                   <td key={index}>{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

export default Datasheet;

// import React from 'react';
// import FusionCharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
// import ReactFusioncharts from "react-fusioncharts";

// // Resolves charts dependancy
// charts(FusionCharts);

// const dataSource = {
//   chart: {
//     caption: "Annual Mean Wage of Aerospace Engineers, by US States",
//     subcaption: "Updated on May 2017",
//     numberprefix: "$",
//     showlabels: "0",
//     theme: "fusion",
//     entitytooltext:
//       "<div id='headerdiv'><b>$lName</b></div><div id='labelDiv'>Annual Mean Wage: $dataValue</div>",
//     entityfillhovercolor: "#E3F2FD"
//   },
//   colorrange: {
//     gradient: "0",
//     color: [
//       {
//         minvalue: "0",
//         maxvalue: "500",
//         displayvalue: "< $500K",
//         code: "#42A5F5"
//       },
//       {
//         minvalue: "500",
//         maxvalue: "1000",
//         displayvalue: "$500K - $1000K",
//         code: "#1E88E5"
//       },
//       {
//         minvalue: "1000",
//         maxvalue: "1500",
//         displayvalue: "$1000K - $1500K",
//         code: "#1976D2"
//       },
//       {
//         minvalue: "1500",
//         maxvalue: "2000",
//         displayvalue: "$1500K - $2000K",
//         code: "#1F65C0"
//       },
//       {
//         minvalue: "2000",
//         maxvalue: "5000",
//         displayvalue: "No data availale",
//         code: "#BBDEFB"
//       }
//     ]
//   },
//   data: [
//     {
//       id: "OR",
//       value: "700"
//     },
//     {
//       id: "CA",
//       value: "1700"
//     },
//     {
//       id: "NV",
//       value: "1800"
//     },
//     {
//       id: "UT",
//       value: "800"
//     },
//     {
//       id: "AZ",
//       value: "670"
//     },
//     {
//       id: "CO",
//       value: "1670"
//     },
//     {
//       id: "NM",
//       value: "1900"
//     },
//     {
//       id: "TX",
//       value: "1650"
//     },
//     {
//       id: "NE",
//       value: "320"
//     },
//     {
//       id: "KS",
//       value: "750"
//     },
//     {
//       id: "OK",
//       value: "420"
//     },
//     {
//       id: "LA",
//       value: "1569"
//     },
//     {
//       id: "MN",
//       value: "1200"
//     },
//     {
//       id: "IA",
//       value: "1450"
//     },
//     {
//       id: "WI",
//       value: "250"
//     },
//     {
//       id: "IL",
//       value: "850"
//     },
//     {
//       id: "IN",
//       value: "300"
//     },
//     {
//       id: "OH",
//       value: "1567"
//     },
//     {
//       id: "PA",
//       value: "670"
//     },
//     {
//       id: "NY",
//       value: "1367"
//     },
//     {
//       id: "MA",
//       value: "1432"
//     },
//     {
//       id: "CT",
//       value: "1756"
//     },
//     {
//       id: "NJ",
//       value: "1987"
//     },
//     {
//       id: "MD",
//       value: "1640"
//     },
//     {
//       id: "DC",
//       value: "1780"
//     },
//     {
//       id: "KY",
//       value: "760"
//     },
//     {
//       id: "TN",
//       value: "480"
//     },
//     {
//       id: "WV",
//       value: "420"
//     },
//     {
//       id: "VA",
//       value: "1890"
//     },
//     {
//       id: "NC",
//       value: "340"
//     },
//     {
//       id: "MS",
//       value: "790"
//     },
//     {
//       id: "AL",
//       value: "1560"
//     },
//     {
//       id: "GA",
//       value: "1765"
//     },
//     {
//       id: "FL",
//       value: "880"
//     },
//     {
//       id: "HI",
//       value: "1567"
//     },
//     {
//       id: "AK",
//       value: "4000",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "WA",
//       value: "2500",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "ID",
//       value: "3500",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "MT",
//       value: "2200",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "WY",
//       value: "3500",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "ND",
//       value: "3000",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "SD",
//       value: "2600",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "MO",
//       value: "3200",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "AR",
//       value: "4100",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "MI",
//       value: "2800",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "ME",
//       value: "2300",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "VT",
//       value: "3300",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "NH",
//       value: "3500",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "SC",
//       value: "4000",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "DE",
//       value: "4000",
//       tooltext: "<b>$lname</b><br>Data not available"
//     },
//     {
//       id: "RI",
//       value: "4000",
//       tooltext: "<b>$lname</b><br>Data not available"
//     }
//   ]
// };

// export default class Mapa extends React.Component {
//   render() {
//     return (
//       <ReactFusioncharts
//         type="maps/usa"
//         width="100%"
//         height="100%"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }
// }

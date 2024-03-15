
export const RentalSummary = () => {
   const houseSpecs=[
      {
         "asset_id": "12345",
          "location_id": "Biryogo",
          "nbr_of_rooms": 2,
          "room_size_width": "2mx6m",
          "asset_value": "60000",
          "only_pay_cost": "true",
          "months_to_pay": 2,
          "availability": "true",
      },
      {
         "asset_id": "12344",
          "location_id": "Gisozi",
          "nbr_of_rooms": 1,
          "room_size_width": "4mx6m",
          "asset_value": "40000",
          "only_pay_cost": "true",
          "months_to_pay": 2,
          "availability": "true",
       
      },
      {
         "asset_id": "12343",
          "location_id": "Biryogo",
          "nbr_of_rooms": 1,
          "room_size_width": "4mx5m",
          "asset_value": "35000",
          "only_pay_cost": "true",
          "months_to_pay": 2,
          "availability": "true",
       
      },
      {
         "asset_id": "12342",
          "location_id": "Gatsata",
          "nbr_of_rooms": 2,
          "room_size_width": "7mx6m",
          "asset_value": "70000",
          "only_pay_cost": "true",
          "months_to_pay": 1,
          "availability": "false",

      }
   ]
  return (
    <div style={{
      position: "absolute",
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "0%",
      height: "70vh",
      backgroundColor: "white",
      padding: "20px",
      border: "1px solid #ccc",
      background: "#FFF",
      borderRadius: "18px 18px 0px 0px",
      color: "black",
    }}>
           <div>
        <button style={{borderRadius: "8px",background: "#F2F2F2",color: "black"}}>Back to list</button>
        <h2 style={{ display: "inline", marginLeft: "10px",borderRadius: "8px"}}>
          Nyarugenge Town
        </h2>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
            padding: "5px 10px",
            backgroundColor: "lightblue",
            borderRadius: "4px",
          }}
        >
          Houses
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type="text" placeholder="Search..." style={{ width: "80%",height: "5vh", borderRadius: "6px",border: "none",
background: "#F3F3F3",color: "black"}} />
        <button style={{ backgroundColor: "green", marginLeft: "70px",borderRadius: "6px",
background:" #00AB59" }}>
          Export
        </button>
      </div>
      <div style={{ marginTop: "10px" , textAlign: "center"}}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Location Id</th>
              <th>Nr_of_Rooms</th>
              <th>Room_size_width</th>
              <th>Asset_value</th>
              <th>Only_pay_cost</th>
              <th>Months_to_pay</th>
              <th>Available?</th>
            </tr>
          </thead>
          <tbody>
            {houseSpecs.map((asset, index) => (
              <tr key={index}>
                <td>{asset.location_id}</td>
                <td>{asset.nbr_of_rooms}</td>
                <td>{asset.room_size_width}</td>
                <td>{asset.asset_value}</td>
                <td>{asset.only_pay_cost}</td>
                <td>{asset.months_to_pay}</td>
                <td>{asset.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
  )
}
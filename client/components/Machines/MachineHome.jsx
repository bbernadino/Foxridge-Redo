import React from "react";
import "./machineHomeStyles.scss";

const AllMachines = () => {
  const arrToMap = [
    {
      id: "2",
      type: "truck",
      model: "320d",
      img:
        "https://images.pexels.com/photos/1420744/pexels-photo-1420744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: "3",
      type: "skid",
      model: "299d",
      img:
        "https://media.istockphoto.com/photos/skid-loader-or-bobcat-construction-equipment-picture-id946212692?s=612x612",
    },
    {
      id: "24",
      type: "dozer",
      model: "d6",
      img:
        "https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
    <div className="allMachines">
      {arrToMap.map((item) => {
        return (
          <div className="machineCard">
            <div className="cardImage">
              <img src={item.img} />
            </div>
            <div className="innerCard">
              <div className="column">
                <h1>{item.model}</h1>
                <div className="row">
                  <div>
                    <h3>Next Service:</h3>
                    <p>500hrs</p>
                  </div>
                  <div>
                    <h3>Last Inspection:</h3>
                    <p>6 Days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllMachines;
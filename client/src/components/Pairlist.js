import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Pairlist.css";

const PairList = () => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pairs")
      .then((response) => {
        setPairs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid-container">
      {pairs.map((pair, index) => (
        <div className={`item${index + 1}`} key={pair.id}>
          <div className="">
            <div className="flap"></div>
            <div className="image">
              <img
                src={pair.image}
                alt={pair.name}
                className="img-fluid"
              />
            </div>
            <h2 className="h5 mt-4 mb-1">{`Pair ${index + 1}: ${pair.student1_name} and ${pair.student2_name}`}</h2> 
            <p className="mb-0">{`Week ${pair.week_no}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PairList;

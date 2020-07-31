import React from "react";
import { useParams, useHistory } from "react-router-dom";
import servicesData from "./servicesdata";

// AJAX call to get the info about the specified service
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

function ServiceDetail() {
  const { serviceId } = useParams();
  const history = useHistory();
  console.log(history);
  const thisService = servicesData.find((service) => service._id === serviceId);

  function handleClick() {
    console.log("Hello");
      console.log("Submitting...")
      setTimeout(() => {
          history.push("/services")
      }, 2000)
      // history.goBack()
      // history.replace("")

  }

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
      <button onClick={handleClick}>Go back to all services</button>
    </div>
  );
}

export default ServiceDetail;

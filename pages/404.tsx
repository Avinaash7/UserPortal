import React from "react";
import Image from "next/image"
function PageNotFound() {
  return (
    <div className="notFound-container">
      {/* <h1 className="">404</h1> */}
      <Image src="/not_found.svg" height={300} width = {300} alt="" />
      <p className="">The page you are looking for could not be found.</p>
    </div>
  );
}

export default PageNotFound;

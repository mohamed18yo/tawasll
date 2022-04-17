import React from "react";
import Loading from "../widget/laoding";



export function Boundary(props) {
  const { error, isLoading, children  } = props;
  // if (error) {
  //   return <p>{error}</p>;
  // }
  if (isLoading) {
    return<Loading/>
  }
  return <>{children}</>;
}
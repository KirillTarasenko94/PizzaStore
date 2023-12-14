import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={400}
    height={200}
    viewBox="0 0 300 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="134" rx="10" ry="10" width="141" height="40" /> 
    <circle cx="65" cy="66" r="66" />
  </ContentLoader>
)

export default MyLoader
import * as React from "react"

const BackArrow = (props) => (
  <div style={{width: "48px"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2M3 12l6.414 6.414a2 2 0 0 0 1.414.586H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8.172a2 2 0 0 0-1.414.586L3 12z"
    />
  </svg>
  </div>
)

export default BackArrow
import "./DynamicCardStyle.css"

import React from 'react'
import DynamicCard from "./DynamicCard"
import DynamicCardData from "./DynamicCardData"

const Dynamic = () => {
  return (
    <div className="dynamic-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {DynamicCardData.map((val,ind)=>{
                return (
                    <DynamicCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )

            })}
        </div>
    </div>
  )
}

export default Dynamic



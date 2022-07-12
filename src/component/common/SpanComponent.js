import React from "react"

const SpanComponent = (props) => {

    return (
        <span className = {props.className}>{props.text}</span>
    )
}

export default SpanComponent
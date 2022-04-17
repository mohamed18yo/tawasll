import React from "react"
import { Img } from "./Image"


export const  Logo=React.memo((props)=>{
    return <Img src={"assets/Logo.svg'"}  alt={"logo"} />
})
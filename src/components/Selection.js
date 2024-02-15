import { useState } from "react"

const Selection=({applyColor})=>{
    const {bgColor,setBgColor} =useState("");

    const applyColor =(background) =>{
        setBgColor(background);
    }
    const changeColor =() =>{
        applyColor(applyBgColor);
    }
return <div style={{width:200,height:300,border:"1px solid gray"}} onClick={changeColor}>
<p>Selection</p>
</div>
}

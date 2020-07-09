import React from "react"

export default function ClipShadow({
  disable = false,
  children,
  mode = "bottom",
  contStyle
}) {
    let modeName;

    // disable and mode check
    if (disable) {
        modeName = ''
    } else {
        modeName = `${mode}Clip`
    }

    // variable init
    let sCont = "py-5 clipShadowCont " + modeName
    let sDiv = "clipShadow" 
    let sChild = "container clipShadowChild"

    // alterations
    if (mode === "both" || mode === "hero") {
        sChild = "clipShadowChild"
    }
    if ( mode === "hero") {
        sCont = "clipShadowCont " + modeName
    }

    return (
        <section className={sCont} style={contStyle}>
            <div className={sDiv}>
                <div className={sChild}>
                    {children}
                    {console.log({div: sDiv, cont: sCont, chil: sChild})}                    
                </div>
            </div>
        </section>
    )
}

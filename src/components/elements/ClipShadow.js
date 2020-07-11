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
    let sDiv = "clipShadow pb-4 " + modeName 
    let sChild = "container p-5"

    // alterations
    if (mode === "both" || mode === "hero") {
        sChild = "clipShadowChild"
        sDiv = "clipShadow " + modeName 
    }

    return (
        <section className={sDiv} style={contStyle}>
            <div className={sChild}>
                {children}
            </div>
        </section>
    )
}

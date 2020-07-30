import React from "react"

export default function ClipShadow({
  disable = false,
  children,
  mode = "bottom",
  contStyle,
  sChild = "container px-5",
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

// TODO: Improve Shadow
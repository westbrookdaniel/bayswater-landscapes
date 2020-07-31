import React from "react"

export default function ClipShadow({
  disable = false,
  children,
  mode = "bottom",
  contStyle,
  sChild = "container px-5",
}) {

    // disable and mode
    let modeName;
    if (disable) {
        modeName = ''
    } else {
        modeName = `${mode}Clip`
    }

    // padding swap
    let pb
    if (mode === "both" || mode === "hero") {
        sChild = ''
        pb = ""
    } else {
        pb = "pb-4"
    }

    return (
        <section className={`clipShadow ${pb} ${modeName}`} style={contStyle}>
            <div className={sChild}>
                {children}
            </div>
        </section>
    )
}
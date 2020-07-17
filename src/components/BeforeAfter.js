import React from 'react'
import ClipShadow from './elements/ClipShadow'
import Image from './elements/Image'

export default function BeforeAfter({ data, shadow }) {
    return (
        <ClipShadow disable={!shadow}>
            <div className='row align-items-center mt-5'>
                <div className='col-12 col-md-5 col-lg-6 text-center'>
                    <Image alt={data.before.alt} src={data.before.src} />
                    <p className="mt-3">Before</p>
                </div>
        
                <div className='col-12 col-md-5 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-md-0 text-center'>
                    <Image alt={data.after.alt} src={data.after.src} />
                    <p className="mt-3">After</p>
                </div> 
            </div>
        </ClipShadow>
    )
}
import React from 'react'

export default function Form({ left }) {
    return (
        <>
            <form className={left ? 'mt-5 text-left' : 'mt-5 text-center'} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/thankyou">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="row" style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "15px"}}>
                    <div className="col-12 px-0 col-md">
                        <input type="text" className="form-control" name="name" placeholder="Name"/>
                    </div>
                    <div className="col-12 px-0 col-md">
                        <input type="email" className="form-control" name="email" placeholder="Email"/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col px-0">
                        <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col px-0">
                        <textarea className="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                    </div>
                </div>

                <div className="mt-4" data-netlify-recaptcha="true"></div>

                <div className="row mt-4">
                    <div className="col px-0">
                        <button type="submit" className="btn btn-secondary">Send Email</button>
                    </div>
                </div>
            </form>  
        </>
    )
}

import React from "react"

export default function Navbar() {
    return (
       <header>
            <nav>
                <section className= "image">
                 </section>
                 
                 <h2>Shah Aowal</h2>
                <h4>Frontend Developer</h4>
                <h5>shah.aowal@nhs.net</h5>
            
            <div className= "links">
                <span className="email">
                    <a href="" target="_blank" className= "btn grey"><i className="fa-solid fa-envelope"></i> Email</a> 
                </span>
            
                 <span className="linkedin"><a           href="https://www.linkedin.com/in/shah-aowal-17b59653/" target="_blank" className= "blue btn"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </span>
            </div>
        </nav>
     </header>
    )
}
import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Jorge Sierra - {currentYear}
            </p>
        </footer>
    
    );
    
}

export default Footer;
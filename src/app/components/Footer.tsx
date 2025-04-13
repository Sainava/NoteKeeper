function Footer(){
    const year=new Date().getFullYear();
    const name="Sainava";
    return(
        <footer>
            <p>
                &copy:{year} {name}. All rights reserved.
                <br />
            </p>
        </footer>
    )
}

export default Footer;
const Navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <div>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="../../public/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    i Wonder
                </Navbar.Brand>
            </div>
        </Navbar>
    );
}

export default Navbar;
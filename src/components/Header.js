 const Header = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <input
                type="text"
                placeholder="Search Our Services"
                className="form-control search-input"
            />
            <div className="icons d-flex align-items-center">
                <i className="fas fa-bell"></i> {/* FontAwesome notification bell */}
                <img
                    src="/images/WhatsApp Image 2024-11-21 at 23.57.16.jpeg"
                    alt="User Profile"
                    className="user-profile"
                />
            </div>
        </div>
    );
 };

export default Header;
const Header = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const today = new Date();
    return (
        <div className="header">
            { today.toLocaleDateString("fr-FR", options) }
        </div>
    );
};

export default Header;
const Header = ({title, headerClass, children}) => {
    return (
        <header>
            <h1 className={headerClass}>{title}{children}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Give me a title!',
    headerClass: 'main_title'
}

export default Header
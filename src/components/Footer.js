const Footer = ({title, footerClass, children}) => {
    return (
        <footer>
            <h3 className={footerClass}>{title}</h3>
            {children}
        </footer>
    )
}

Footer.defaultProps = {
    title: 'Open to the Right Opportunity.',
    footerClass: 'footer_title'
}

export default Footer
import React from 'react';

const Footer = (props) => {
    const { links } = props;

    return (
        <div className="footer">
            <div className="col-12 container">
                {links.map((link, index) => (
                    <a key={index} href={link.url} className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                        {link.text}
                    </a>
                ))}
                <br />
                <div className="corp link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-auto p-2">
                    © 2023 X Corp.
                </div>
            </div>
        </div>
    );
}

export default Footer;







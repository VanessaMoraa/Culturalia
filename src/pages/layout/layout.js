
import React from 'react';
import Menu from '@/components/menu';
const Layout = ({ children }) => {
    return <>
    <Menu/>
    <div style={{display: "flex",width: "100vw", justifyContent: "center"}}>{children}
    </div>
    </>
};

export default Layout;

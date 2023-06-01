
import React from 'react';
import Menu from '@/components/menu';
const Layout = ({ children }) => {
    return <>
    <Menu/>
    {children}
    </>
};

export default Layout;

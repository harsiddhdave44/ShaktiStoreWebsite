import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

export const Nav = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = [
      'Home',
      'Products',
      'About Us',
      'Contact Us'
   ];
   return (
      <Navbar
         isBordered variant="sticky"
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
            <AcmeLogo />
            <Text b color="inherit">
               Shakti Store
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link isActive href="#" css={{ color: '$primary' }}>
                  Home
               </Navbar.Link>
               <Navbar.Link href="#">
                  Products
               </Navbar.Link>
               <Navbar.Link href="#">About Us</Navbar.Link>
               <Navbar.Link href="#">Contact Us</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse showIn="sm">
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            {/* <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem> */}
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};

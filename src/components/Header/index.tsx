import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import logo from '../../assets/movix-logo.svg';
import {
   Logo,
   MenuItem,
   MenuItemContainer,
   MobileMenu,
   StyledContentWrapper,
   StyledHeader,
   StyledSearchField,
} from './index.styled';

const Header = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const [show, setShow] = useState<string>('top');
   const [lastScrollY, setLastScrollY] = useState<number>(0);
   const [mobileMenu, setMobileMenu] = useState<boolean>(false);
   const [query, setQuery] = useState<string>('');
   const [showSearch, setShowSearch] = useState<boolean>(false);

   useEffect(() => {
      window.addEventListener('scroll', controlNavBar);
      return () => {
         window.removeEventListener('scroll', controlNavBar);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [lastScrollY]);

   useEffect(() => {
      window.scrollTo(0,0);
   }, [location])

   const controlNavBar = () => {
      if (window.scrollY === 0) {
         setShow('top');
      } else if (window.scrollY <= 200 && (lastScrollY > window.scrollY || lastScrollY === 0)) {
         setShow('show');
      } else if (window.scrollY > 200 && lastScrollY < window.scrollY && !mobileMenu) {
         setShow('hide');
      }
      setLastScrollY(window.scrollY);
   };

   const openSearch = () => {
      setMobileMenu(false);
      setShowSearch(true);
   };

   const openMobileMenu = () => {
      setMobileMenu(true);
      setShowSearch(false);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
   };

   const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && query.length !== 0) {
         navigate(`/search/${query}`);
         setShowSearch(false);
      }
   };

   const handleNavigation = (route: string) => {
      navigate(`/explore/${route}`);
      setMobileMenu(false);
   };

   return (
      <StyledHeader
         mobileMenu={mobileMenu.toString()}
         show={show}>
         <StyledContentWrapper>
            <Logo onClick={() => navigate('/')}>
               <img
                  src={logo}
                  alt="logo"
               />
            </Logo>

            <MenuItemContainer mobileMenu={mobileMenu.toString()}>
               <MenuItem
                  mobileMenu={mobileMenu.toString()}
                  onClick={() => handleNavigation('movie')}>
                  Movies
               </MenuItem>
               <MenuItem
                  mobileMenu={mobileMenu.toString()}
                  onClick={() => handleNavigation('tv')}>
                  TV Shows
               </MenuItem>
               <MenuItem mobileMenu={mobileMenu.toString()}>
                  <HiOutlineSearch onClick={openSearch} />
               </MenuItem>
            </MenuItemContainer>

            <MobileMenu>
               <HiOutlineSearch onClick={openSearch} />
               {mobileMenu ? (
                  <VscChromeClose onClick={() => setMobileMenu(false)} />
               ) : (
                  <SlMenu onClick={openMobileMenu} />
               )}
            </MobileMenu>
         </StyledContentWrapper>

         {showSearch && (
            <StyledSearchField>
               <input
                  type="text"
                  placeholder="Search for a movie o TV show..."
                  onChange={handleChange}
                  value={query}
                  onKeyUp={handleEnter}
               />
               <VscChromeClose onClick={() => setShowSearch(false)} />
            </StyledSearchField>
         )}
      </StyledHeader>
   );
};

export { Header };

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ContentWrapper, Icon, InfoText, MenuItem, MenuItemContainer, SocialIcons, StyledFooter } from './index.styled';

const Footer = () => {
   return (
      <StyledFooter>
         <ContentWrapper>
            
            <MenuItemContainer>
               <MenuItem>Terms Of Use</MenuItem>
               <MenuItem>Privacy-Policy</MenuItem>
               <MenuItem>About</MenuItem>
               <MenuItem>Blog</MenuItem>
               <MenuItem>FAQ</MenuItem>
            </MenuItemContainer>

            <InfoText>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur.
            </InfoText>

            <SocialIcons>
               <Icon>
                  <FaFacebookF />
               </Icon>

               <Icon>
                  <FaInstagram />
               </Icon>

               <Icon>
                  <FaTwitter />
               </Icon>

               <Icon>
                  <FaLinkedin />
               </Icon>
            </SocialIcons>

         </ContentWrapper>
      </StyledFooter>
   );
};

export { Footer };

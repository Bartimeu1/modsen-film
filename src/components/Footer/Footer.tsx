import React from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';
import {
  StyledFooter,
  FooterContent,
  FooterInfo,
  FooterInfoText,
  FooterSocial,
  FooterSocialLink,
  FooterLabel,
} from './styled';

import { privacyPolicyText, pressCopyrightText } from '../../constants/text';
import { socialMediaLinks } from '../../constants/common';

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterInfo>
          <FooterInfoText>{privacyPolicyText}</FooterInfoText>
          <FooterInfoText>{pressCopyrightText}</FooterInfoText>
        </FooterInfo>
        <FooterSocial>
          {socialMediaLinks.map((item) => (
            <FooterSocialLink id={item.id} href={item.href}>
              <SvgIcon icon={item.icon} />
            </FooterSocialLink>
          ))}
        </FooterSocial>
      </FooterContent>
      <FooterLabel>2023 Modsen company</FooterLabel>
    </StyledFooter>
  );
}

export default Footer;

import React from 'react';

import SvgIcon from '@components/SvgIcon/SvgIcon';
import { socialMediaLinks } from '@constants/common';
import { pressCopyrightText, privacyPolicyText } from '@constants/text';

import {
  FooterContent,
  FooterInfo,
  FooterInfoText,
  FooterLabel,
  FooterSocial,
  FooterSocialLink,
  StyledFooter,
} from './styled';

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
            <FooterSocialLink key={item.id} href={item.href}>
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

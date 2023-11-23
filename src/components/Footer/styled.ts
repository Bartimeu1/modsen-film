import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 65px 0 17px 0;
  position: relative;
  &::before {
    background: ${(props) => props.theme.color.border};
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 45px;
`;

export const FooterInfo = styled.div`
  display: flex;
`;

export const FooterInfoText = styled.p`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.color.text};
  font-weight: 500;
  opacity: 83%;
  max-width: 260px;
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -13px;
`;

export const FooterSocialLink = styled.a`
  margin: 0 13px;
`;

export const FooterLabel = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xxxl};
  color: ${(props) => props.theme.color.text};
  text-align: center;
  font-weight: 500;
  opacity: 40%;
`;

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

  @media (max-width: 830px) {
    padding: 30px 0 8px 0;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 45px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 38px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;

  @media (max-width: 650px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
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

  @media (max-width: 830px) {
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-right: 10px;
    max-width: 230px;
  }

  @media (max-width: 480px) {
    margin: 0 0 20px 0;
    max-width: 180px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -13px;

  @media (max-width: 480px) {
    align-self: center;
  }
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

  @media (max-width: 650px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

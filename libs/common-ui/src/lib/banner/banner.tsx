import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

const StyledBanner = styled.div`
  margin: 16px 16px 16px;
  color: #004ABE;
  font-weight: bold;
  font-size: 18px;

`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <header>{props.text}</header>
    </StyledBanner>
  );
}

export default Banner;

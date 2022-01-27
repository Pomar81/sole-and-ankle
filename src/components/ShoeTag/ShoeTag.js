import { COLORS, SALE_TAGS, WEIGHTS } from "../../constants";
import styled from "styled-components/macro";

export const ShoeTag = ({ variant }) => {
  switch (variant) {
    case "on-sale":
      return <SaleWrapper>{SALE_TAGS.sale}</SaleWrapper>;
    case "new-release":
      return <ReleaseWrapper>{SALE_TAGS.new}</ReleaseWrapper>;
    default:
      return null;
  }
};

const Wrapper = styled.span`
  position: absolute;
  top: 12px;
  right: -6px;
  font-size: 14px;
  padding: 10px;
  color: ${COLORS.white};
  font-weight: 700;
  border-radius: 2px;
`;

const SaleWrapper = styled(Wrapper)`
  background-color: ${COLORS.primary};
`;

const ReleaseWrapper = styled(Wrapper)`
  background-color: ${COLORS.secondary};
`;

/**
 *
 * SoftWidgetWrapper
 *
 */

import styled from 'styled-components';
import { BORDER_GREY_LIGHT } from 'utils/colors';

const SoftWidgetWrapper = styled.section`
  height: 15.3125em;
  box-shadow: 0em 0.0625em 0.1875em 0em rgba(0, 0, 0, 0.2),
    0em 0.0625em 0.0625em 0em rgba(0, 0, 0, 0.14),
    0em 0.125em 0.0625em -0.0625em ${BORDER_GREY_LIGHT};
`;

export default SoftWidgetWrapper;

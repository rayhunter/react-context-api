import styled from "styled-components";

export const LoginNotificationWrapper = styled.div`
  display: ${(props) => (props.isLoggedIn ? "none" : "block")};
`;

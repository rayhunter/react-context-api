import React, { useContext } from "react";
import { LoginNotificationWrapper } from "../elements";
import Context from "../store/context";

export const LoginNotification = () => {
  const { globalState } = useContext(Context);

  return (
    <LoginNotificationWrapper loggedI={globalState.isLoggedIn}>
      <p>Please log in to download image</p>
    </LoginNotificationWrapper>
  );
};

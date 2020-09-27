import React, { useContext } from "react";
import Context from "../store/context";

export const DownloadImage = () => {
  const { globalState } = useContext(Context);

  return (
    <form method="get" action="https://images.ctfassets.net/">
      <button disabled={!globalState.isLoggedIn} type="submit">
        DownloadFile
      </button>
    </form>
  );
};

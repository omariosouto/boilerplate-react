import React from "react";
import { fetchUserDataController } from "../../../../controllers/customer/customer";
import { useHandlerContext } from "@commons/handler-context";

export function FetchUserData() {
  const { withHandlerContext } = useHandlerContext();
  const [user, setUser] = React.useState(null);

  return (
    <div>
      <button
        onClick={withHandlerContext(async ({ event }) => {
          const data = await fetchUserDataController();
          setUser(data);
        })}
      >
        Fetch user data
      </button>
      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  );
}
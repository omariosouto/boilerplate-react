import React from "react";
import { fetchUserDataController } from "../../../../controllers/customer/customer";
import { useHandlerContext } from "@commons/handler-context";
import { Customer } from "src/domain/customer";

export function FetchUserData() {
  const { withHandlerContext } = useHandlerContext();
  const [user, setUser] = React.useState<Customer | null>(null);

  window.addEventListener("resize", withHandlerContext(async ({
    event
  }) => {
    console.log("Global error handler", event);
  }));

  return (
    <div>
      <button
        onClick={withHandlerContext(async () => {
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
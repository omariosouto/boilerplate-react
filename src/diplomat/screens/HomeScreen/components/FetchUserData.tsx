import React from "react";
import { fetchUserDataController, forceErrorController } from "../../../../controllers/customer/customer";
import { useHandlerContext } from "@commons/handler-context";
import { Customer } from "src/domain/customer";
import { CustomError, NotFoundError } from "@commons/errors";

export function FetchUserData() {
  const { withHandlerContext } = useHandlerContext();
  const [user, setUser] = React.useState<Customer | null>(null);

  window.addEventListener("resize", withHandlerContext(async ({
    event
  }) => {
    console.log("Custom Event", event);
  }));

  return (
    <div>
      <button
        style={{
          color: "blue",
        }}
        onClick={withHandlerContext(async () => {
          const data = await fetchUserDataController();
          setUser(data);
        })}
      >
        Fetch user data
      </button>
      <button
        onClick={withHandlerContext(async function onClickUIHandler() {
          forceErrorController();
        })}
        style={{
          color: "red",
        }}
      >
        Throw Error
      </button>
      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    </div>
  );
}
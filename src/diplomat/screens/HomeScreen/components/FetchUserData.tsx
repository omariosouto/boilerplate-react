import React from "react";
import { fetchUserDataController } from "../../../../controllers/customer/customer";

export function FetchUserData() {
  const [user, setUser] = React.useState(null);
  return (
    <div>
      <button
        onClick={async () => {
          console.log("Call the controller");
          const data = await fetchUserDataController();
          setUser(data);
        }}
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
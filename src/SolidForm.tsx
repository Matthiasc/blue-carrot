import { LoginButton, LogoutButton, useSession } from "@inrupt/solid-ui-react";
import { useState } from "react";

export function SolidForm() {
  const { session, sessionRequestInProgress } = useSession();
  const [idp, setIdp] = useState("https://login.inrupt.com");

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-64">
        {!session.info.isLoggedIn && (
          <div className="flex flex-col gap-2">
            <input
              className="p-2 border-2 border-blue-300 rounded-lg"
              id="idp"
              placeholder="Identity Provider"
              defaultValue={idp}
              onChange={(e) => setIdp(e.target.value)}
            />
            <LoginButton
              authOptions={{ clientName: "Blue Carrot" }}
              oidcIssuer={idp}
              redirectUrl={import.meta.env.VITE_REDIRECT_URL}
              onError={console.error}
            >
              <div className="p-2 bg-blue-300 hover:bg-blue-400 rounded-lg text-center text-white font-bold">
                Login
              </div>
            </LoginButton>
          </div>
        )}
        {session.info.isLoggedIn && (
          <LogoutButton>
            <div className="p-2 bg-blue-300 hover:bg-blue-400 rounded-lg text-center text-white font-bold">
              Log Out
            </div>
          </LogoutButton>
        )}
      </div>
      <div className="p-4 border rounded">
        {session.info.isLoggedIn ? (
          <div className=" overflow-scroll">
            <pre>{JSON.stringify(session.info, null, 4)}</pre>
          </div>
        ) : (
          <div>
            {sessionRequestInProgress
              ? "Loading session..."
              : "Log in to access your data"}
          </div>
        )}
      </div>
    </div>
  );
}

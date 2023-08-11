import React from "react";
import { logIn } from "../../services/users";

function SingIn() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const emailNode = React.useRef<HTMLInputElement>(null);
  const passwordNode = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({
      email: emailNode.current?.value || "",
      password: passwordNode.current?.value || "",
    });

    logIn(user)
  };
    
  return (
    <div className="grid place-content-center h-full">
      <h1 className="text-center">SingIn</h1>
      <form action="" 
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          ref={emailNode}
          className="p-4"
          type="text" placeholder="Email" />
        <input
          ref={passwordNode}
          className="p-4"
          type="password" placeholder="Password" />
        <input type="submit" value="SingIn" className="p-4 bg-black text-white font-bold text-xl"   />
      </form>
    </div>
  );
}

export { SingIn };

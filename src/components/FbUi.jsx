import React from "react";
import fblogo from "./fblogo.png";
export default function FbUi() {
  return (
    <div className="w-screen h-screen   flex justify-center items-center flex-col gap-4">
      <div
        className="w-[30%] h-[10%]  bg-contain"
        style={{
          backgroundImage: `url(${fblogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="rounded-md border-2 w-96 h-4/6 flex flex-col items-center gap-2	">
        <div className="text-xl mt-5 mb-5	">
          <p>Log Into Facebook</p>
        </div>
        <div className="mb-2">
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-80 h-[60px] 	  border-2 rounded-md pl-2  "
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            className="w-80 h-[60px] border-2 rounded-md pl-2"
          />
        </div>

        <button className="w-80 h-[60px] border-2 rounded-md  bg-blue-500 text-white text-2xl hover:bg-blue-600	 ">
          Log In
        </button>
        <div>
          <a href="#" className="text-blue-700 hover:underline	">
            forgot account?
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <hr
            style={{
              flexGrow: 1,
              border: "none",
              borderTop: "1px solid #bcc5d4",
              margin: "0 10px",
            }}
          />
          <div style={{ padding: "0 10px" }}>or</div>
          <hr
            style={{
              flexGrow: 1,
              border: "none",
              borderTop: "1px solid #bcc5d4",
              margin: "0 10px",
            }}
          />
        </div>

        <div className="w-56 h-[60px] border-2 rounded-md pl-2 flex justify-center items-center bg-green-400 hover:bg-green-500">
          <a href="#" role="button" className="text-white text-xl	">
            Create new account
          </a>
        </div>
      </div>
    </div>
  );
}

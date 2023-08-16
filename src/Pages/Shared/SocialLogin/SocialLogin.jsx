import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../provider/AuthProvider";
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button className="btn btn-circle btn-outline">
          <p className="text-2xl flex justify-center" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

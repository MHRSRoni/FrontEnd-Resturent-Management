/* import { useState, useEffect } from 'react';
import updatePassword from "../../ApiRequest/ApiRequest";
import LineLoader from "../ui/LineLoader";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
function handlePasswordChange(){

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { status } = await updatePassword();
      
      if (status === 200) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
      setLoading(false);
    })();
  }, []);
}

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Change Password</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form>
          <div>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="w-48 mt-10">
            <button onClick={handlePasswordChange}>Save Change</button>
          </div>
        </form>
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default ChangePassword;
 */

// import { useState, useEffect } from 'react';
// /* import {updatePassword} from "../../ApiRequest/ApiRequest"; */
// /* import LineLoader from "../ui/LineLoader"; */
// import axios from "axios";

// import {
//   errorNotification,
//   successNotification,
// } from "../../utils/NotificationHelper";

// const ChangePassword = () => {
//   /* const [loading, setLoading] = useState(false); */
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handlePasswordChange = async () => {
//     /* setLoading(true); */
    

//     try {
//       console.log("update password called from change password");
      
//       if (status === 200 && status === "success") {
//         successNotification('Password change was successful.');
//         console.log("pass wrod change success");
//       }
//     } catch (error) {
//       errorNotification('Password change failed.');
//       console.log("error from change password");
//     } /* finally {
//       setLoading(false);
//     } */
//   };

//   useEffect(() => {
//     (async () => {
//       /* setLoading(true); */
//       try{

//         const { status } = await axios.put("https://kachchi-palace-api-v1.onrender.com/api/v2/customer/password-update");
        
//         if (status === 200 && status==="success") {
//           successNotification('Password change was successful.');
//         } catch (error) {
//           console.log("error from api req");
//           return {
//             data: error.response.data,
//             status: error.response.status,
//           };
//         }

//         }
//       }
//       /* setLoading(false); */
//     })();
//   }, []);

//   return (
//     <div>
//       <div>
//         <h2 className="text-3xl mb-2">Change Password</h2>
//       </div>
//       <div className="bg-white p-8 min-h-[300px]">
//         <form>
//           <div>
//             <input
//               type="password"
//               placeholder="Current Password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="w-48 mt-10">
//             <button onClick={handlePasswordChange}>Save Change</button>
//           </div>
//         </form>
//       </div>
//       {/* {loading && <LineLoader />} */}
//     </div>
//   );
// };

// export default ChangePassword;





// import { useState, useEffect } from 'react';
// import axios from "axios";

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handlePasswordChange = async () => {
//     try {
//       console.log("update password called from change password");
      
//       const response = await axios.put("https://kachchi-palace-api-v1.onrender.com/api/v2/customer/password-update");
      
//       if (response.status === 200 && response.data.status === "success") {
//         console.log("password change success");
//       } else {
//         console.log("password change failed");
//       }
//     } catch (error) {
//       console.log("error from change password", error);
//     }
//   };

//   useEffect(() => {
//     // You can perform any initial setup or actions when the component mounts here
//   }, []);

//   return (
//     <div>
//       <div>
//         <h2 className="text-3xl mb-2">Change Password</h2>
//       </div>
//       <div className="bg-white p-8 min-h-[300px]">
//         <form>
//           <div>
//             <input
//               type="password"
//               placeholder="Current Password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="w-48 mt-10">
//             <button onClick={handlePasswordChange}>Save Change</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;



// import { useState, useEffect } from 'react';
// import axios from "axios";

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordChanged, setPasswordChanged] = useState(false);

//   const handlePasswordChange = async () => {
//     try {
//       const response = await axios.put("https://kachchi-palace-api-v1.onrender.com/api/v2/customer/password-update", {
//         currentPassword,
//         newPassword,
//         confirmPassword,
//       });

//       if (response.status === 200 && response.data.status === "success") {
//         console.log("Password change successful");
//         setPasswordChanged(true);
//       } else {
//         console.log("Password change failed");
//       }
//     } catch (error) {
//       console.error("Error while changing password", error);
//     }
//   };

//   useEffect(() => {
//     if (passwordChanged) {
//       // Clear input fields when password is successfully changed
//       setCurrentPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//       setPasswordChanged(false); // Reset the flag
//     }
//   }, [passwordChanged]);

//   return (
//     <div>
//       <div>
//         <h2 className="text-3xl mb-2">Change Password</h2>
//       </div>
//       <div className="bg-white p-8 min-h-[300px]">
//         <form>
//           <div>
//             <input
//               type="password"
//               placeholder="Current Password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="w-48 mt-10">
//             <button onClick={handlePasswordChange}>Save Change</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;

import { useState } from 'react';
import { changePassword } from '../../ApiRequest/ApiRequest';
import LineLoader from '../ui/LineLoader';
import {
  errorNotification,
  successNotification,
} from "../../utils/NotificationHelper";

import Button from '../ui/Button';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    if (formData.newPassword !== formData.confirmPassword) {
      errorNotification("New password and confirm password do not match.");
      setLoading(false);
      return;
    }
  
    try {
      // Replace with your actual API endpoint
      const response = await changePassword(formData);
  
      if (response.status === 200) {
        successNotification("Password changed successfully");
        setLoading(false);
  
        // Clear the input fields after a successful change
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        errorNotification("An error occurred while changing the password.");
        setLoading(false);
      }
    } catch (error) {
      errorNotification("An error occurred while changing the password.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Change Password</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleInputChange}
              name="currentPassword" // Add the name attribute
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleInputChange}
              name="newPassword" // Add the name attribute
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              name="confirmPassword" // Add the name attribute
              required
            />
          </div>
          <div className="w-48 mt-10">
            <Button
              text="Save Change"
              type="submit"
              variant="basic"
              size="normal"
            />
          </div>
        </form>
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default ChangePassword;


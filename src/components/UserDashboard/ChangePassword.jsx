import { useState } from "react";
import { changePassword } from "../../ApiRequest/ApiRequest";
import LineLoader from "../ui/LineLoader";
import {
  errorNotification,
  successNotification,
} from "../../utils/NotificationHelper";

import Button from "../ui/Button";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
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
          <div className="flex w-96 flex-col gap-4">
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              type="password"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleInputChange}
              name="currentPassword" // Add the name attribute
              required
            />
            <input
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleInputChange}
              name="newPassword" // Add the name attribute
              required
            />
            <input
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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

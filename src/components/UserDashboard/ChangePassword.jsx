

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


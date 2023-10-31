import { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("/v2/customer/profile")
      .then((response) => {
        setProfileData(response.data);
        console.log("Data received:", response.data);
      })
      .catch((error) => {
        console.log("Error fetching profile data:", error);
      });
  }, []);

  console.log("Profile Data:", profileData);

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">My profile</h2>
      </div>
      <div className="bg-white p-8 grid grid-cols-3 gap-3 min-h-[300px]">
        {profileData ? (
          <>
            <div className="p-2">
              <h5>Name</h5>
              <p>{`${profileData.data?.firstName} ${profileData.data?.lastName}`}</p>
            </div>
            <div className="p-2">
              <h5>Mobile</h5>
              <p>{profileData.data?.phoneNo}</p>
            </div>
            <div className="p-2">
              <h5>Address</h5>
              <p>{profileData.data?.address}</p>
            </div>
            <div className="p-2">
              <h5>Gender</h5>
              <p>{profileData.data?.gender}</p>
            </div>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

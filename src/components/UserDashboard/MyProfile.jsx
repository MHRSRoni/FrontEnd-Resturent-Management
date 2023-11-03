import { useEffect, useState } from "react";
import { myProfileRequest } from "../../ApiRequest/ApiRequest";
import LineLoader from "../ui/LineLoader";

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { status, data } = await myProfileRequest();
      console.log("API Response:", data);

      if (data.status === "success") {
        setProfileData(data.data);
      }

      setLoading(false);
    })();
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
              <p>{`${profileData?.firstName} ${profileData?.lastName}`}</p>
            </div>
            <div className="p-2">
              <h5>Mobile</h5>
              <p>{profileData?.phoneNo}</p>
            </div>
            <div className="p-2">
              <h5>Address</h5>
              <p>{profileData?.address}</p>
            </div>
            <div className="p-2">
              <h5>Gender</h5>
              <p>{profileData?.gender}</p>
            </div>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default MyProfile;

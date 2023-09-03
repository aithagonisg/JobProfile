import React, { useState, useEffect } from "react";
import { getJobProfiles } from "../services/crudServices";
import ProfileCard from "./ProfileCard";

export default function ProfileListComponent() {
  const [profileList, setProfileList] = useState([]);
  useEffect(() => {
    getJobProfiles().then((res) => setProfileList(res.data));
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {profileList?.map((item, index) => (
        <ProfileCard profileData={item} key={`${item.id}-${index}`} />
      ))}
    </div>
  );
}

// src/app/page.tsx
import React from 'react';
import getUserInfo from 'userinfo_kk'; // Import your npm package

// Define TypeScript types for the user info
interface UserInfo {
  username: string;
  uid: string;
  platform: string;
  homedir: string;
}

// Server Component
const Home: React.FC = async () => {
  const userInfo: UserInfo = getUserInfo(); // Use your npm package on the server side

  return (
    <div>
      <h1>User Info</h1>
      <p>Username: {userInfo.username}</p>
      <p>UID: {userInfo.uid}</p>
      <p>Platform: {userInfo.platform}</p>
      <p>Home Directory: {userInfo.homedir}</p>
    </div>
  );
};

export default Home;

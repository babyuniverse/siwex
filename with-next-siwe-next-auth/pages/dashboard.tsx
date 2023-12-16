import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();

  const signOutUser = async () => {
    await signOut({ callbackUrl: '/auth/signin' });
    // You can also use router.push('/signin') here if you want to manually navigate
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOutUser}>Sign out</button>
    </div>
  );
};

export default DashboardPage;

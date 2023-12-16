// Signin.tsx

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function CustomSignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>Please sign in to continue:</p>
      <ConnectButton />
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
    </div>
  );
}

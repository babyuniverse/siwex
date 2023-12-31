import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useSession, signIn, signOut } from "next-auth/react"

export default function OverviewPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <ConnectButton />
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("discord")}>Sign in with Discord</button>
      <button onClick={() => signIn("twitter")}>Sign in with Twitter</button>
      <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
      <button >Continue Without Sign In</button>

    </>
  )
}
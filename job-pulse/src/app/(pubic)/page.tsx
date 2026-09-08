import Link from 'next/link'

export default function page()
{
  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/roles">Roles</Link>
          <Link href="/login">Log in</Link>
          <Link href="/signup">Sign up</Link>
      </nav>

      <main>
        <h1>Home Page</h1>
      </main>
    </>
  )

}
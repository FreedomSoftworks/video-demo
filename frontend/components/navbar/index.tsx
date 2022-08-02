import Link from 'next/link';

export function NavBar() {
  return (
    <div className='nav'>
      This is NavBar
      <div>Hamburger Component</div>
      <div>Search Bar Component</div>
      <div className='nav__link-container'>
        <Link href='/' passHref>
          <a className='nav__link'>Home</a>
        </Link>
        <Link href='/account' passHref>
          <a className='nav__link'>Account</a>
        </Link>
      </div>
    </div>
  );
}

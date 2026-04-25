'use client';

import styles from './ui/navbar.module.css';
import { figtree } from './ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  return <div className={`${styles.navbar} ${figtree.className}`}>
    <h1>meTCG</h1>
    <div>
      <Link href="/" className={clsx(styles.navOpen, { [styles.active]: pathname === '/' })}>
        Home
      </Link>
      <Link href="/about" className={clsx(styles.navOpen, { [styles.active]: pathname === '/about' })}>
        About
      </Link>
    </div>
    <Link href="/ltsan" className={clsx(styles.login, { [styles.active]: pathname === '/ltsan' })}>
      Login
    </Link>
  </div>
}

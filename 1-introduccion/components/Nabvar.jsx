import styles from './Nabvar.module.css';
import Link from 'next/link';

export const Nabvar = () => {
  return (
    <nav className={ styles['menu-controller'] }>
        <Link href="/">Home</Link>
        <Link href="/about/about">About</Link>
        <Link href="/">Contact</Link>
    </nav>
  )
}

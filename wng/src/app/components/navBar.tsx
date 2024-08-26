import React from 'react';
import Link from 'next/link';
import styles from "./navBar.module.css"

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/quem-somos">Quem Somos</Link>
        </li>
        <li>
          <Link href="/atividades">Atividades</Link>
        </li>
        <li>
          <Link href="/planos">Planos</Link>
        </li>
        <li>
          <Link href="/area-do-aluno">Área do Aluno</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

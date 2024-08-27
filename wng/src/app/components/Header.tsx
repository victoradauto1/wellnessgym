import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Quem Somos</Link></li>
          <li><Link href="/atividades">Atividades</Link></li>
          <li><Link href="/planos">Planos</Link></li>
          <li><Link href="/area-do-aluno">Área do Aluno</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

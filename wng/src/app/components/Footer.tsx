import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} WellnessGym. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

import React from 'react';
import Navbar from './components/navBar';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <header className={styles.header}>
        <h1>Bem-vindo à WellnessGym</h1>
        <p>A sua saúde e bem-estar em primeiro lugar.</p>
      </header>
      <section className={styles.mainContent}>
        <h2>Descubra nossas atividades e planos!</h2>
        <p>Oferecemos uma ampla gama de atividades para todos os gostos.</p>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.heading}>Sobre Nós</h1>
          <p className={styles.paragraph}>
            Bem-vindo à nossa página "Sobre"! Somos uma equipe dedicada a oferecer as melhores soluções para o seu bem-estar.
            Nosso objetivo é fornecer um serviço de alta qualidade, sempre buscando a inovação e a satisfação dos nossos clientes.
          </p>
          <p className={styles.paragraph}>
            Nossa missão é inspirar e capacitar pessoas a viverem vidas mais saudáveis e felizes. Estamos comprometidos em criar uma comunidade
            de suporte e encorajamento, onde todos possam alcançar seus objetivos de saúde e bem-estar.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
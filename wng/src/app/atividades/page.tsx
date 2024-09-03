import React from 'react';
import styles from './atividades.module.css';
import EnrollmentForm from './EnrollmentForm'; 

const Atividades: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Nossas Atividades</h1>
      <p className={styles.paragraph}>
        Oferecemos uma variedade de atividades para melhorar o seu bem-estar, incluindo:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Aulas de Yoga</li>
        <li className={styles.listItem}>Musculação</li>
        <li className={styles.listItem}>Natação</li>
        <li className={styles.listItem}>Treinamento Funcional</li>
        <li className={styles.listItem}>Spinning</li>
      </ul>
      
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Inscreva-se em uma Atividade</h2>
        <EnrollmentForm activity="Aulas de Yoga" />
      </div>
    </div>
  );
};

export default Atividades;

import React from 'react';
import styles from './horarios.module.css';

const Horarios: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Horários de Aulas</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h2 className={styles.activity}>Aulas de Yoga</h2>
          <p>Segunda e Quarta - 7:00 AM</p>
          <p>Instrutor: Maria Silva</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.activity}>Musculação</h2>
          <p>Diariamente - 6:00 AM - 10:00 PM</p>
          <p>Instrutores: João Souza e Ana Lima</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.activity}>Natação</h2>
          <p>Terça e Quinta - 8:00 AM</p>
          <p>Instrutor: Pedro Martins</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.activity}>Treinamento Funcional</h2>
          <p>Segunda, Quarta e Sexta - 6:00 PM</p>
          <p>Instrutor: Carla Mendes</p>
        </li>
        <li className={styles.listItem}>
          <h2 className={styles.activity}>Spinning</h2>
          <p>Terça e Quinta - 7:00 PM</p>
          <p>Instrutor: Lucas Pereira</p>
        </li>
      </ul>
    </div>
  );
};

export default Horarios;
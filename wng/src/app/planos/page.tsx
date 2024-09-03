import React from 'react';
import styles from './planos.module.css';

const Planos: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Nossos Planos</h1>
      <div className={styles.planList}>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Plano Básico</h2>
          <p className={styles.planDescription}>Acesso à academia de segunda a sexta, das 6:00 às 18:00.</p>
          <p className={styles.planPrice}>R$ 99,00/mês</p>
          <button className={styles.button}>Selecionar Plano</button>
        </div>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Plano Premium</h2>
          <p className={styles.planDescription}>Acesso ilimitado à academia, incluindo finais de semana, e acesso a todas as aulas coletivas.</p>
          <p className={styles.planPrice}>R$ 199,00/mês</p>
          <button className={styles.button}>Selecionar Plano</button>
        </div>
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Plano VIP</h2>
          <p className={styles.planDescription}>Todos os benefícios do Plano Premium, mais sessões personalizadas com um treinador e acesso ao spa.</p>
          <p className={styles.planPrice}>R$ 299,00/mês</p>
          <button className={styles.button}>Selecionar Plano</button>
        </div>
      </div>
    </div>
  );
};

export default Planos;
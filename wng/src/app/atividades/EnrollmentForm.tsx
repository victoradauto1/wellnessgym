"use client";

import React, { useState } from 'react';
import styles from './EnrollmentForm.module.css';

const EnrollmentForm: React.FC<{ activity: string }> = ({ activity }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de inscrição, como envio de dados para o backend, será adicionada depois
    console.log(`Inscrição feita por: ${name}, Email: ${email}, Aula: ${activity}`);
    setSuccess(true);
  };

  return (
    <div className={styles.enrollmentForm}>
      <h2>Inscreva-se na aula de {activity}</h2>
      {success ? (
        <p className={styles.successMessage}>Inscrição realizada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Inscrever-se</button>
        </form>
      )}
    </div>
  );
};

export default EnrollmentForm;
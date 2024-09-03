"use client";

import React, { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //lógica backend a ser implementada
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login do Aluno</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;

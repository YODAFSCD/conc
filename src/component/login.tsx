import React, { useState } from 'react';
import {Form, Input } from 'antd';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const Login = async () => {
    try {
      const apiUrl = 'https://0a4900f0034fea50821185d8004a00c4.web-security-academy.net/login'; // URL de la API
       const method = 'POST'; // El método HTTP adecuado

      const data = {
        username,
        password,
      };

      const response = await axios.request({
        method,
        url: `${apiUrl}/`,
        data: data,
      });

      if (response.status === 200) {
        setResponse('HACKED');
      } else {
        setResponse('FAILED');
      }
    } catch (error) {
      console.error(error);
      setResponse('FAILED');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundColor: 'Background' }}>
      <div className='login' style={{backgroundColor: 'white'}}>
      <h1>Iniciar Sesión</h1>

      <Form.Item
      label="USUARIO"
      name="USUARIO"
      rules={[{ required: true, message: 'INGRESE SU USUARIO!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="CONTRASEÑA"
      name="CONTRASEÑA"
      rules={[{ required: true, message: 'INGRESE SU CONSTRASEÑA!' }]}
    >
      <Input.Password />
    </Form.Item>
      <button onClick={Login}>Login</button>
      <div>{response}</div>
    </div>

    </div>
  );
};

export default LoginPage;
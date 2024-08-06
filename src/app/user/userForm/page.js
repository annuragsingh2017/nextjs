'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
 import styles from '../../styles/UserForm.module.css';


function UserForm() {
  const router=useRouter()
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: formData?.title,
        body: formData?.body,
        userId: formData?.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json?.title){
          setTimeout(()=>{
            <p>Your Form is Submitted </p>
          router?.push('/user')
          },2000)
        }
        return json
      })
        
       
   
  };

  return (
    <div className={styles?.formContainer}>
      <form className={styles?.userForm} onSubmit={handleSubmit}>
        <h2 className={styles?.formTitle}>User Form</h2>
        
        <div className={styles?.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles?.formControl}
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles?.formGroup}>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            className={styles?.formControl}
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles?.formGroup}>
          <label htmlFor="userId">User ID</label>
          <input
            type="number"
            id="userId"
            name="userId"
            className={styles?.formControl}
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={`${styles?.btn ?? ''} ${styles?.btnPrimary ?? ''}`}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;

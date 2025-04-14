import React, { useState } from 'react';
import { User } from '../../types';
import styles from './EditUser.module.css';

interface EditUserProps {
    user: User;
    onUpdate: (updatedUser: User) => void;
    onCancel: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState<User>(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'age' || name === 'phone' ? Number(value) : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onUpdate(formData); // Pass updated user data to parent
    };

    return (
        <div className={styles.editUserContainer}>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className={styles.editUserForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" onClick={onCancel} className={styles.cancelButton}>Cancel</button>
                    <button type="submit" className={styles.submitButton}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
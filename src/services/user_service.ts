import bcrypt from 'bcrypt';
import User, { IUser } from './user_models';

export const logIn = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password || '');
    if (!isPasswordValid) {
        throw new Error('Contraseña incorrecta');
    }

    return user; // Devuelve el usuario si las credenciales son correctas
};
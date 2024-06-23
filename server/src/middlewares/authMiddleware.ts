import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


// Пользовательского интерфейс для объекта req
interface CustomRequest extends Request {
  user?: any;
}

// Интерфейс декодированного токена
interface DecodedToken {
  user: { id: string }; 
}


export default function authMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
  // Получение токена из заголовка запроса
  const token = req.header('x-auth-token');

  // Проверяем, есть ли токен
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }  

  try {
    // Верифицирование токена
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

    // Если токен действительный, добавляем декодированные данные пользователя в объект req и переходим к следующему middleware
    if (decoded) {
      req.user = decoded?.user; // Присвоение user из декодированных данных
      next();
    } else {
      return res.status(401).json({ message: 'Token is not valid' });
    }
  } catch (err) {
    console.error('Something went wrong with auth middleware');
    res.status(500).json({ message: 'Server Error' });
  }
};

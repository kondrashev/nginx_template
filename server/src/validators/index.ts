import { body } from 'express-validator';

class UserValidator {
  checkAddUser() {
    return [
      body('login').notEmpty().withMessage('The login can not be empty'),
      body('password').notEmpty().withMessage('The password can not be empty'),
    ];
  }
  checkAddArticle() {
    return [body('title').notEmpty().withMessage('The title can not be empty'), body('text').notEmpty().withMessage('The text can not be empty')];
  }
}

export default new UserValidator();

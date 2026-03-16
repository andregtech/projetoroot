const { Router } = require('express');
const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /v1/usuario/token:
 *   post:
 *     summary: Gera token de acesso
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/token', authController.generateToken);

/**
 * @swagger
 * /v1/usuario:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *       400:
 *         description: Erro na requisição ou usuário já existe
 */
router.post('/', userController.create);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/:id', userController.getById);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   put:
 *     summary: Atualiza usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put('/:id', authMiddleware, userController.update);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   delete:
 *     summary: Deleta usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Removido
 */
router.delete('/:id', authMiddleware, userController.delete);

module.exports = router;
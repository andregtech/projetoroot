const { Router } = require('express');
const categoryController = require('../controllers/CategoryController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /v1/categoria:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post('/', authMiddleware, categoryController.create);

/**
 * @swagger
 * /v1/categoria/pesquisa:
 *   get:
 *     summary: Pesquisa categorias
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/pesquisa', categoryController.search);

/**
 * @swagger
 * /v1/categoria/{id}:
 *   get:
 *     summary: Busca categoria por ID
 *     tags: [Categories]
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
router.get('/:id', categoryController.getById);

/**
 * @swagger
 * /v1/categoria/{id}:
 *   put:
 *     summary: Atualiza uma categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Categoria não encontrada
 */
router.put('/:id', authMiddleware, categoryController.update);

/**
 * @swagger
 * /v1/categoria/{id}:
 *   delete:
 *     summary: Remove uma categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da categoria a ser removida
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Categoria não encontrada
 */
router.delete('/:id', authMiddleware, categoryController.delete);

module.exports = router;
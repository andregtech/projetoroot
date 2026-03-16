const { Router } = require('express');
const productController = require('../controllers/ProductController');
const authMiddleware = require('../middleware/auth');

const router = Router();

/**
 * @swagger
 * /v1/produto:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post('/', authMiddleware, productController.create);

/**
 * @swagger
 * /v1/produto/pesquisa:
 *   get:
 *     summary: Pesquisa produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/pesquisa', productController.search);

/**
 * @swagger
 * /v1/produto/{id}:
 *   get:
 *     summary: Busca produto por ID
 *     tags: [Products]
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
router.get('/:id', productController.getById);

/**
 * @swagger
 * /v1/produto/{id}:
 *   put:
 *     summary: Atualiza produto
 *     tags: [Products]
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
 *         description: Atualizado com sucesso
 *       401:
 *         description: Token ausente ou inválido
 *       404:
 *         description: Produto não encontrado
 */
router.put('/:id', authMiddleware, productController.update);

/**
 * @swagger
 * /v1/produto/{id}:
 *   delete:
 *     summary: Remove produto
 *     tags: [Products]
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
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Produto não encontrado
 */
router.delete('/:id', authMiddleware, productController.delete);

module.exports = router;
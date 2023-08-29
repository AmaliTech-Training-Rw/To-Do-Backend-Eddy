import express from 'express';

import { login, logout, register } from '../controllers/authentication';


export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login)
    router.post('/auth/logout', logout)
};

/**
 *@swagger
 *tags:
 *   name: Quiz App
 *   description: Quiz app will help users to do an amazing quiz in an easy and freindly way
 */

/**
 * @swagger
 * path: 
 *     post:
 *       summary: Login user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: User logged in successfully
 *         '400':
 *           description: Invalid credentials
 *         '403':
 *           description: Invalid credentials
 *         '500':
 *           description: Server error
 */
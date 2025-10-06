import * as controller from './apiTest.controller';
import express from 'express';
import multer from 'multer';
import {middleware} from '../../middleware/middleware';

const router = express.Router();
const upload = multer({dest: './uploads/'});

router.use(express.json());
router.use(
  express.urlencoded({
    extended: false,
  }),
);

router.get('/1/apiTestDb1_main', [], controller.apiTestDb1_main); // [middleware.checkToken],
router.get('/1/apiTestDb1_pregresso', [], controller.apiTestDb1_pregresso); // [middleware.checkToken],
router.get('/1/apiTestDb2_catasto', [], controller.apiTestDb2_catasto); // [middleware.checkToken],
router.get('/1/apiTestDb2_monit', [], controller.apiTestDb2_monitoraggio); // [middleware.checkToken],

export {router};

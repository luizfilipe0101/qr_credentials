const express = require('express');
const router = express.Router();

const consulta_ctl = require('./controllers/consulta_Controller');
const cadastro_ctl = require('./controllers/cadastro_Controller');
const pagamento_ctl = require('./controllers/pagamento_Controller');
const check_ctl = require('./controllers/checkin_Controller');
const ping_ctl = require('./controllers/ping_Controller')


router.get('/', consulta_ctl.getAll_c);
router.get('/presence', consulta_ctl.show_presence);
router.get('/ping', ping_ctl.ping);
router.post('/cadastro', cadastro_ctl.post_P);
router.post('/check', consulta_ctl.get_QR);
router.post('/pag', pagamento_ctl.apv_pag);
router.post('/checkin', check_ctl.check_in);



module.exports = router;
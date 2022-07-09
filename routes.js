const router=require('express').Router()
const {homeController,aboutController}=require('./controller')


module.exports=router;
router.get('/',homeController)

router.get('/about',aboutController)
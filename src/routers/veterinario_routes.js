import {Router} from 'express'
//import verificarAutenticacion from '../middlewares/autenticacion.js'
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

const router = Router()

router.post("/login", login);
router.post("/registro", registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

router.get("/perfil", perfil);
router.put('/veterinario/actualizarpassword',actualizarPassword)
router.get("/veterinario/:id", detalleVeterinario);
router.put("/veterinario/:id", actualizarPerfil);


export default router
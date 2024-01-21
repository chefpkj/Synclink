import express from "express";
import jwtControls from "../middleware/jwtControls.js";
import notesController from "../controllers/notesController.js";
const router = express.Router();

router
  .route("/notes/")
  .get(jwtControls.authorizeToken, notesController.getAllNotes)
  .post(jwtControls.authorizeToken, notesController.addNotes);

router
  .route("/notes/:id")
  .get(jwtControls.authorizeToken, notesController.getSpecificNotes)
  .put(jwtControls.authorizeToken, notesController.updateNotes)
  .delete(jwtControls.authorizeToken, notesController.deleteNotes);

router
  .route("/notes/:id/share")
  .post(jwtControls.authorizeToken, notesController.shareNotes);

router.route("/search").get(jwtControls.authorizeToken, notesController.search);

export default router;

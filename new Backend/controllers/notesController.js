import notesDbLayer from "../databaseLayer/notesDbLayer.js";
const getAllNotes = async (req, res) => {
  const AllLink = await notesDbLayer.getAllNotes(req.body._id);
  return res.status(200).send(AllLink);
};

const addNotes = async (req, res) => {
  //logic for adding notes
  const result = await notesDbLayer.addNotes(req?.body);
  if (result === 500) {
    return res.status(500).send("Something failed in saving new note.");
  }
//   return res.status(200).send(_.pick(result, ["_id", "email", "notes"]));
  return res.status(200).send(result);
};

const getSpecificNotes = async (req, res) => {
  const result = await notesDbLayer?.getSpecificNotes({
    _id: req.body._id,
    notesId: req.params?.id,
  });
  if (result.status === 200) {
    return res.status(200).send(result.details);
  } else {
    return res.status(result?.status).send(result?.details);
  }
};

const updateNotes = async (req, res) => {
  //checking if the user sends the empty data
  if (!req.body?.notes) {
    return res
      .status(400)
      .send(`"notes" attribute in the req body is required.`);
  }

  const result = await notesDbLayer.updateNotes({
    _id: req?.body?._id,
    notesId: req.params?.id,
    updatedNotes: req.body?.notes,
  });
  if (result?.status === 200) {
    return res.status(200).send(result?.details);
  } else {
    return res
      .status(result?.status)
      .send(result?.details);
    //   .send(_.pick(result?.details, ["_id", "email", "notes"]));
  }
};

const deleteNotes = async (req, res) => {
  const result = await notesDbLayer.deleteNotes({
    _id: req?.body?._id,
    notesId: req.params?.id,
  });
  if (result?.status === 200) {
    return res.status(200).send(result?.details);
  } else {
    return res.status(result?.status).send(result?.details);
  }
};

const shareNotes = async (req, res) => {
  const result = await notesDbLayer.shareNotes({
    _id: req?.body?._id,
    notesId: req.params?.id,
  });
  if (result?.status === 200) {
    return res.status(200).send(result?.details);
  } else {
    return res.status(result?.status).send(result?.details);
  }
};

const search = async (req, res) => {
  //corner case
  if (!req.query?.q.length) {
    return res
      .status(400)
      .send("No keyword to search.(use this format: '/api/search?q=keyword')");
  }
  const result = await notesDbLayer.search({
    _id: req?.body?._id,
    keyword: req.query.q,
  });
  if (result?.status === 200) {
    return res.status(200).send(result?.details);
  } else {
    return res.status(result?.status).send(result?.details);
  }
};

const notesController = {
  getAllNotes,
  addNotes,
  getSpecificNotes,
  updateNotes,
  deleteNotes,
  shareNotes,
  search,
};

export default notesController;

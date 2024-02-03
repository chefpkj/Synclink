import Users from "../models/users.js";

const getAllNotes = async (req_body_id) => {
  //getting the user information to send ALLNotes
  const user = await Users.findById(req_body_id);
  return user?.notes;
};

const addNotes = async (req_body) => {
  try {
    //getting the user from db
    let user = await Users.findById(req_body?.id);
    console.log(user,"end")
    user.notes = [...user?.notes, ...req_body?.notes];
    console.log("this is it",user.notes);
    const result = await user.save();
    return result;
  } catch (err) {
    console.log("Error in addNotes (dbLayer notes)", err);
    return 500;
  }
};

const getSpecificNotes = async (req_body) => {
  try {
    //getting the user from db
    let user = await Users.findById(req_body?.id);
    //checking if notes id is pesent or not
    const result = user?.notes[req_body?.notesId];
    if (!result) {
      return {
        status: 400,
        details: "Note with given Id not found.",
      };
    } else {
      return {
        status: 200,
        details: result,
      };
    }
  } catch (err) {
    console.log("Error in getSpecificNotes(dbLayer notes)", err);
    return {
      status: 500,
      details: err,
    };
  }
};

const updateNotes = async (req_body) => {
  try {
    //getting user from Db
    const user = await Users.findById(req_body?.id);
    //checking if notes id is pesent or not
    const result = user?.notes[req_body?.notesId];
    if (result === undefined) {
      return {
        status: 400,
        details: "Note with given Id not found.",
      };
    }
    //if note is present make the update
    user.notes[req_body?.notesId] = req_body?.updatedNotes;
    const SavedResult = await user.save();
    return {
      status: 200,
      details: SavedResult,
    };
  } catch (err) {
    console.log("Error in updateNotes(dbLayer notes)", err);
    return {
      status: 500,
      details: err,
    };
  }
};

const deleteNotes = async (req_body) => {
  try {
    //getting user from Db
    const user = await Users.findById(req_body?.id);
    //checking if notes id is pesent or not
    const result = user?.notes[req_body?.notesId];
    if (result === undefined) {
      return {
        status: 400,
        details: "Note with given Id not found.",
      };
    }
    //if note is present delete the notes
    user.notes.splice(req_body?.notesId, 1);
    await user.save();
    return {
      status: 200,
      details: "Deleted successfully.",
    };
  } catch (err) {
    console.log("Error in deleteNotes(dbLayer notes)", err);
    return {
      status: 500,
      details: err,
    };
  }
};

const shareNotes = async (req_body) => {
  try {
    //getting user from Db
    const user = await Users.findById(req_body?.id);
    //checking if notes id is pesent or not
    const result = user?.notes[req_body?.notesId];
    if (result === undefined) {
      return {
        status: 400,
        details: "Note with given Id not found.",
      };
    }
    //if note is present share it with others users
    const AllUsers = await Users.find({ id: { $ne: req_body?.id } });
    AllUsers.map(async (eachUser) => {
      eachUser.notes.push(result);
      const tempResult = await eachUser.save();
    });

    return {
      status: 200,
      details: "Note have been successfully shared with all users.",
    };
  } catch (err) {
    console.log("Error in shareNotes(dbLayer notes)", err);
    return {
      status: 500,
      details: err,
    };
  }
};

const search = async (req_body) => {
  try {
    //getting user from Db

    const user = await Users.findById(req_body?.id);
    const result = [];
    
    //searh logic
    user?.notes.map((eachNotes) => {
      let position = eachNotes.search(new RegExp(req_body?.keyword, "i"));
      if (position != -1) {
        result.push(eachNotes);
      }
    });
    return {
      status: 200,
      details: result,
    };
  } catch (err) {
    console.log("Error in search(dbLayer notes)", err);
    return {
      status: 500,
      details: err,
    };
  }
};

const notesDbLayer = {
  getAllNotes,
  addNotes,
  getSpecificNotes,
  updateNotes,
  deleteNotes,
  shareNotes,
  search,
};

export default notesDbLayer;

// word.js
import { db } from "../../firebase";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";

const initialState = {
  list: [],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  return { type: CREATE, word: word };
}

export function updateWord(word, word_index) {
  return { type: UPDATE, word, word_index };
}

export function deleteWord(word_index) {
  return { type: DELETE, word_index };
}

// middlewares

export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    let word_list = [];

    word_data.forEach((b) => {
      word_list.push({ id: b.id, ...b.data() });
    });

    dispatch(loadWord(word_list));
  }
}

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const word_data = { id: docRef.id, ...word };

    dispatch(createWord(word_data));
  }
}

export const updateWordFB = (word, word_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "word", word_id);

    await updateDoc(docRef, { ...word, ...word });

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    })

    dispatch(updateWord(word, word_index));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      return;
    }
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });

    dispatch(deleteWord(word_index));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }

    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }

    case "word/UPDATE": {
      const updated_word_list = state.list.map((word, idx) => {
        return Number(action.word_index) === idx
          ? { ...word, ...action.word }
          : word;
      });
      return { ...state, list: updated_word_list };
    }

    case "word/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.word_index) !== idx;
      });

      return { list: new_word_list };
    }
    default:
      return state;
  }
}

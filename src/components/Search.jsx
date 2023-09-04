import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const Search = () => {
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", search)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setContact(doc.data());
      });
    } catch (err) {
      console.log(err)
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // Check whether the group (chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > contact.uid
        ? currentUser.uid + contact.uid
        : contact.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        // Create contact chats
        await updateDoc(doc(db, "contactChats", currentUser.uid), {
          [combinedId + ".contactInfo"]: {
            uid: contact.uid,
            displayName: contact.displayName,
            photoURL: contact.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "contactChats", contact.uid), {
          [combinedId + ".contactInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp()
        })

      }
    } catch (err) { 
      console.log(err)
    }
  };

  return (
    <div className="search">
      <div className="search_form">
        <input
          type="text"
          placeholder="Find a contact"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <p>Contact not found!</p>}
      {contact && (
        <div className="search_contact" onClick={handleSelect}>
          <img src={contact.photoURL} alt="profile-photo" />
          <h4>{contact.displayName}</h4>
        </div>
      )}
    </div>
  );
};

export default Search;

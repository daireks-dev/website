'use client';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAxVaRBci9usCweDebKkNdeRa4EuSGoZK0",
  authDomain: "bowie-tracker-backend.firebaseapp.com",
  projectId: "bowie-tracker-backend",
  storageBucket: "bowie-tracker-backend.firebasestorage.app",
  messagingSenderId: "615379639163",
  appId: "1:615379639163:web:7f8471d8b381ff1bdb7bde",
  measurementId: "G-3HJ6T4HTHB"
};

export default function Comments() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function addComment() {
        try {
            const docRef = await addDoc(collection(db, "Comments"), {
                Name: "Derek",
                Message: "Testing this out",
                Time: new Date()
            })
        } catch (e) {
            console.error("Error adding document")
        }
    }

    useEffect(() => {
        async function getComments() {
            const querySnapshot = await getDocs(collection(db, "Comments"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`, doc.data());
            });
        }

        getComments()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <button onClick={addComment} className="bg-white w-100 aspect-square">

            </button>
        </div>
    )
}
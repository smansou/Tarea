import React, { useState, useRef } from 'react';
import { collection, doc, getDoc, query, where, addDoc, updateDoc, FieldValue, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import './addTeam.css';
import {useNavigate} from 'react-router-dom';




export default function AddTeam(props) {

    const navigateTo = useNavigate();
    const [teamMemberEmail, setTeamMemberEmail] = useState('');
    const emailRef = useRef();
    const handleChange = async (e) => {
        setTeamMemberEmail( e.target.value)

    }
    //*get project ID props.projectID => get whole project doc from DB => append to team array =>update DB
    const handleAddTeamMember = async (e) => {
        e.preventDefault();
        const docRef = doc(db, 'projects', props.projectId);  
        getDoc(docRef).then((res) => {
            let teamArray = [...res.data().team];

        console.log(teamArray);
            teamArray.push(teamMemberEmail);
            updateDoc(docRef, {
                team: arrayUnion(...teamArray)

            })
        }).catch((error) => {
            console.log(error, 'failed to submit data');
        })
        navigateTo('/dashboard/projects');
    }
    


    return (
        <div className="form-conatiner">
            <form onSubmit={handleAddTeamMember} className='ui form'>
               
                <div>
                    <label></label>
                    <br/>
                    <input ref={emailRef} name={'email'} placeholder={'Enter Team Member Email'} onChange={handleChange} type="text" />
                </div>


                <br />
                <button className='ui small violet inverted button' type='submit'> Confirm </button>

            </form>
            </div>
   
        

    )
}

import {  useEffect, useRef, useState } from "react"


export const UserAdd = ({ list, setList }) => {

    

    const [img, setImg] = useState([]);

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [prof, setProf] = useState();



    const handleName = (e) => { setName(e.target.value) }

    const handleAge = (a) => { setAge(a.target.value) }
    const handleEmail = (m) => { setEmail(m.target.value) }
    const handleProf = (p) => { setProf(p.target.value) }

    const handleImg = (i) => {
        setImg(URL.createObjectURL(i.target.files[0]))
    }




    const handleAdd = () => {
       if(name !== ''  && age !=='' && email !== ''  &&  prof !== ''  ){
        setList([...list, {
            id: Math.random(),
            name: name,
            age: age,
            email: email,
            profession: prof
        }])
    }
        setName('')
        setAge('')
        setEmail('')
        setProf('')
    }

    return (
        <>
            <div className="input-new-user">
                

                <input className="inp-ut" type="text" placeholder="Name" onChange={handleName} value={name} />
                <input  className="inp-ut" type="text" placeholder="Age" onChange={handleAge} value={age} />
                <input className="inp-ut" type="email" placeholder="Email" onChange={handleEmail} value={email} />
                <input className="inp-ut" type="text" placeholder="Proffesion" onChange={handleProf} value={prof} />

                <button  className="addBut" onClick={handleAdd}>Add new User</button>

            </div>

        </>
    )
}
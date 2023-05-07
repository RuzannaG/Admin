import { useState ,useMemo} from "react"
import { useForm } from "react-hook-form";


export const UserAdd = ({ list, setList }) => {
    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);



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




    const onSubmit = () => {
        if (name !== '' && age !== '' && email !== '' && prof !== '') {
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

    const memo=useMemo(()=> onSubmit(),[])

    return (
        <>
            <div className="input-new-user">

                <form onSubmit={handleSubmit(onSubmit)}>  
                    <input className="inp-ut" type="text"   {...register("name", { required: true, maxLength: 20 })} placeholder="Name" onChange={handleName} value={name} />
                    <input className="inp-ut" type="text"  {...register("age", { min: 18, max: 99 })} placeholder="Age" onChange={handleAge} value={age} />
                    <input className="inp-ut" type="email"  {...register('email')}  placeholder="Email" onChange={handleEmail} value={email} />
                    <input className="inp-ut" type="text"  {...register('prof')}  placeholder="Proffesion" onChange={handleProf} value={prof} />

                    <button  type ="submit" className="addBut" >Add new User</button>
                </form>

            </div>

        </>
    )
}
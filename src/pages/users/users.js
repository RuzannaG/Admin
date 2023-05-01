import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UserAdd } from "./usersAdd";
import { UserDelete } from "./userDelete";




export const Users = ({ img }) => {

    const [list, setList] = useState([
        { id: 1, name: 'Gor', age: "10", email: "gor11.mail.com", profession: "CEO", logo: 'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg' },
        { id: 2, name: 'John', age: "88", email: "john11.mail.com", profession: " Web Devloper", logo: 'https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' },
        { id: 3, name: 'Ani', age: "10", email: "ani.mail.com", profession: "Test Specialist", logo: 'https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg' },
        { id: 4, name: 'Karen', age: "25", email: "karen.mail.com", profession: "ICT Trainer", logo: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' },
        { id: 5, name: 'anna', age: "10", email: "anna1.mail.com", profession: "Business Analyst", logo: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000' },

        { id: 6, name: 'Mila', age: "15", email: "mla.mail.com", profession: "Devloper", logo: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-542.jpg?w=360' },
        { id: 7, name: 'Simon', age: "36", email: "simon.mail.com", profession: "Network Specialist", logo: 'https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-542759665.jpg' },
        { id: 8, name: 'Mari', age: "47", email: "mari.mail.com", profession: "ICT Trainer", logo: 'https://img.freepik.com/premium-vector/upset-female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-628.jpg?w=360' },
        { id: 9, name: 'Ani', age: "10", email: "ani.mail.com", profession: "CEO", logo: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg' },
        { id: 10, name: 'Karen', age: "10", email: "karen.mail.com", profession: "Devloper", logo: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png' },
        { id: 11, name: 'anna', age: "10", email: "anna1.mail.com", profession: "Test Specialist", logo: 'https://thumbs.dreamstime.com/b/female-user-profile-avatar-woman-character-screen-saver-emotions-girl-surprised-website-mobile-app-design-199834314.jpg' },
    ]);



    const navigate = useNavigate();
    const handlePush = (id) => {
        navigate(`/userDetails/${id}`)
    }



    const handleDelete = (id) => {
        setList(value => {
            return value.filter(i => i.id !== id)

        })
        console.log(id)
        console.log(list)
    }




    return (
        <div>
            <UserAdd list={list} setList={setList} />

            <div className="X">


                {
                    list?.map((i, j) => {
                        return (

                            <div key={j}  className="SG">
                                <ul  onClick={() => { handlePush(i.id) }}>
                                    <li className="sgLi">

                                        <div><img className="img" src={i.logo} img={img} /></div>
                                        <li>{i.name}</li>
                                        <li>{i.age}</li>
                                        <li>{i.email}</li>
                                        <li>{i.profession}</li>
                                        <li></li>
                                    </li>

                                </ul>
                                <button  className="deletBut" onClick={() => handleDelete(i.id)}>Delete</button>
                            </div>
                        )
                    })
                }</div></div>

    )
}
import React, { useState } from 'react'

const Dataform = () => {
  const [data, setData] = useState({
    name: "",
    gmail:"",
    password:"",
    country:"",
    skill:[],
    gender:"",
    address:""
  })
  // const [data1,setData1] = useState("")
  // console.log(data)
  const handleChange = (e) => {
    const {name,value,type,checked}=e.target
    if(type==="checkbox"){
      
    }
    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value

    // })
  }

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="block1">
            <div className="getdetails">
              <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input type="text" name="name" id="username" placeholder='Name' value={data.name} />
                <label htmlFor="gmail">Gmail</label>
                <input type="email" name="gmail" id="gmail" placeholder="Gmail" value={data.gmail}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"  placeholder='password' value={data.password} />
                <label htmlFor="country">Country</label>
                <select name="country" id="country" >
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                </select>
                <label htmlFor="checkbox" >Skills</label>
                <div id="checkbox" >
                  <input type="checkbox" name='check' id='checkbox1' value="HTML" />
                  <label htmlFor="checkbox1">HTML</label>
                  <input type="checkbox" name='check' id='checkbox2' value="CSS" />
                  <label htmlFor="checkbox2">CSS</label>
                  <input type="checkbox" name='check' id='checkbox3' value="Bootstrap"/>
                  <label htmlFor="checkbox3">Bootstrap</label>
                  <input type="checkbox" name='check' id='checkbox4' value="Javascript"/>
                  <label htmlFor="checkbox4">Javascript</label>
                  <input type="checkbox" name='check' id='checkbox5' value="React"/>
                  <label htmlFor="checkbox5">React</label>
                </div>
                <label htmlFor="radio">Gender</label>
                <div id="radio" >
                  <input type="radio" id='male' name='gender' value={"Male"} />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id='female' name='gender' value={"Female"}/>
                  <label htmlFor="female">Female</label>
                  <input type="radio" id='others' name='gender' value={"Others"}/>
                  <label htmlFor="others">Others</label>
                </div>
                <label htmlFor="address">Address</label>
                <textarea name="address" id="address" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
          <div className="block2">
            <div className="displaydetails">
              <h2><span>Name     :</span> {data1.name}</h2>
              <h2><span>Email Id :</span> {data1.gmail}</h2>
              <h2><span>Password :</span> {data1.password}</h2>
              <h2><span>Country  :</span> {data1.country}</h2>
              <h2><span>Skills   :</span> {data1.skill}</h2>
              <h2><span>Gender   :</span> {data1.gender}</h2>
              <h2><span>Address  :</span> {data1.address}</h2>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dataform

// import React, { useState } from 'react'

// const Dataform = () => {
//   const [data, setData] = useState({
//     name: "",
//     gmail: "",
//     password: "",
//     country: "",
//     skills: [],
//     gender: "",
//     address: ""
//   })

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setData(prevData => ({
  //       ...prevData,
  //       skills: checked
  //         ? [...prevData.skills, value]
  //         : prevData.skills.filter(skill => skill !== value)
  //     }));
  //   } else {
  //     setData({
  //       ...data,
  //       [name]: value
  //     });
  //   }
  // }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//   }

//   return (
//     <>
//       <div className="section">
//         <div className="container">
//           <div className="block1">
//             <div className="getdetails">
//               <form onChange={handleChange} onSubmit={handleSubmit}>
//                 <label htmlFor="username">User Name</label>
//                 <input type="text" name="name" id="username" placeholder='Name' value={data.name} />
                
//                 <label htmlFor="gmail">Gmail</label>
//                 <input type="email" name="gmail" id="gmail" placeholder="Gmail" value={data.gmail} />
                
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" id="password" value={data.password} />
                
//                 <label htmlFor="country">Country</label>
//                 <select name="country" id="country" value={data.country}>
//                   <option value="Australia">Australia</option>
//                   <option value="Canada">Canada</option>
//                   <option value="India">India</option>
//                 </select>

//                 <label htmlFor="checkbox">Skills</label>
//                 <div id="checkbox">
//                   {["HTML", "CSS", "Bootstrap", "Javascript", "React"].map(skill => (
//                     <div key={skill}>
//                       <input type="checkbox" name="skills" value={skill} checked={data.skills.includes(skill)} />
//                       <label>{skill}</label>
//                     </div>
//                   ))}
//                 </div>

//                 <label htmlFor="radio">Gender</label>
//                 <div id="radio">
//                   {["Male", "Female", "Others"].map(gender => (
//                     <div key={gender}>
//                       <input type="radio" id={gender.toLowerCase()} name="gender" value={gender} checked={data.gender === gender} />
//                       <label htmlFor={gender.toLowerCase()}>{gender}</label>
//                     </div>
//                   ))}
//                 </div>

//                 <label htmlFor="address">Address</label>
//                 <textarea name="address" id="address" cols="30" rows="10" value={data.address}></textarea>

//                 <input type="submit" value="Submit" />
//               </form>
//             </div>
//           </div>

//           <div className="block2">
//             <div className="displaydetails">
//               <h2>Name: {data.name}</h2>
//               <h2>Email Id: {data.gmail}</h2>
//               <h2>Password: {data.password}</h2>
//               <h2>Country: {data.country}</h2>
//               <h2>Skills: {data.skills.join(", ")}</h2>
//               <h2>Gender: {data.gender}</h2>
//               <h2>Address: {data.address}</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Dataform


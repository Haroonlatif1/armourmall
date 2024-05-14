import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Successpop from "./protectpop"
import "./protect.css"
const Protect = () => {
    const [service, setservice] = useState({gurads:""},{vehicle:""},{shelter:""});
    const [others,setother]=useState(false)
    const [status, setstatus] = useState(true)
    const guards=()=>{
        setservice({guards:"We pride ourselves on offering the highest quality guards who are meticulously trained to meet the diverse needs of our clients. Our guards undergo rigorous and specialized training programs, equipping them with the necessary skills and expertise to handle various security challenges effectively. From maintaining a vigilant watch to executing precise protocols, our guards are dedicated professionals committed to ensuring the safety and security of our clients and their assets. With our unwavering focus on excellence and professionalism, you can trust that our guards will deliver unparalleled protection and peace of mind."})
        setstatus(false)
        setother(false)
    }
    const vehicle=()=>{
        setservice({vehicle:"We are dedicated to delivering top-of-the-line bulletproof vehicles that provide unparalleled protection and security. Our fleet consists of meticulously maintained vehicles, each meticulously engineered to withstand the most demanding security situations. From armored SUVs to fortified sedans, our bulletproof vehicles are equipped with state-of-the-art features and advanced armor technology, ensuring maximum safety and security for our clients. Our commitment to quality extends beyond just the vehicles themselves; our team of experts meticulously inspects and maintains each vehicle to ensure optimal performance and reliability in any situation. When you choose our bulletproof vehicles, you can trust that you're receiving the highest level of protection and security available"})
        setstatus(false)
        setother(false)
    }
    const shelter=()=>{
        setservice({guards:"We are dedicated to providing top-tier shelter solutions that prioritize safety, comfort, and reliability. Our shelters are meticulously designed and constructed to withstand various environmental conditions and security threats, offering a secure and comfortable refuge for our clients. Whether it's a temporary safe house or a fortified bunker, our shelters are equipped with state-of-the-art security features and amenities to ensure the utmost safety and well-being of our clients. From robust construction to advanced security systems, our shelters are meticulously crafted to provide a secure and reliable sanctuary in any situation. With our unwavering commitment to quality and innovation, you can trust that our shelters will exceed your expectations for safety and security."})
        setstatus(false)
        setother(false)
    }
    const other=()=>{
        setother(true)
        setstatus(true)
        setservice("")
    }
    const [paymentSuccessModalOpen2, setPaymentSuccessModalOpen2] = useState(false); 
    const clickhandler=(e)=>{
      e.preventDefault()
      setPaymentSuccessModalOpen2(true)
      setTimeout(() => {
        setPaymentSuccessModalOpen2(false)
      }, 2000);

    }
  return (<><div className='bg-dark' style={{paddingBottom:"38vh"}}><div className='text-center p-3  ' style={{"color":"rgb(246, 183, 23)"}}><h1>Choose a service <FontAwesomeIcon icon={faBriefcase} /></h1></div>
  <div className='container mb-3 p-3 d-flex justify-content-center' style={{"background-color":"#2b2f32","border-radius":"20px"}}>
      
      
      <div >
          <button className='btn btn-primary m-3 pulsee ' onClick={guards}>Security guards</button>
          <button className='btn btn-primary m-3 pulsee' onClick={vehicle}>Bullet proof vehicle</button>
      </div>
      <div>
          <button className='btn btn-primary m-3 pulsee' onClick={shelter}>Shelter </button>
          <button className='btn btn-danger m-3 pulsee' onClick={other}>Other</button>
      </div>
  </div>
  <p className='container wording'style={{ "font-size":"25px","color":"rgb(246, 183, 23)","font-family": 'Montserrat, sans-serif'
}}>{Object.values(service).toString()}</p> 
  {status===true ? (<></>
) : (<div className='container mb-3'>
  <Link to='/contactus'  className='btn btn-success' >Contact us</Link></div>
)}

  {others && (
     
      <form className=' container mb-3 lolo' style={{"color":"rgb(246, 183, 23)"}}>
      <h2  >Tell us how may we help you</h2>
        <label>
          Name:
          <div  className='lolo2'><input className='form-control ' type="text" /></div>
        </label>
        <label>
          Email:
          <div  className='lolo2'><input className='form-control' type="email" /></div>
          </label>
          <label>
          Your request
         <div className='lolo2'><input className='form-control ' placeholder="What you want" type="text" /></div> 
        </label><br/>
        <button className='btn btn-success mt-3 mb-5 '  onClick={clickhandler}  type="submit">Submit</button>
      </form>
    )}</div>
                <Successpop isOpen={paymentSuccessModalOpen2}/>

    </>

  )
}

export default Protect
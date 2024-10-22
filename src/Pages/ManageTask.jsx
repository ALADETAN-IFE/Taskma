import React from 'react'
import "../Style/ManageTask.css"
// In your index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';


const ManageTask = () => {
   const navigate = useNavigate()
  return (
    <div className='ManageTask'>
        <div className='ManageTask-container'>
            <div className='ManageTask-imageHolder'>
                <img src="../../public/Frame1.png" alt="" className='ManageTask-image'/>
            </div>
            <div className='ManageTask-header'>Manage your tasks </div>
            <div className='MangeTask-text'>You can easily manage all of your daily tasks on Taskma for free.</div>
       <div className='progressbar'></div>
        </div>
        <button className='ManageTask-btn' onClick={(()=> navigate('/welcome'))}>Get Started</button>
    </div>
  )
}

export default ManageTask
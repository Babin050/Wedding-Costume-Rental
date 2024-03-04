
import './Home.css'
import video from '../Home/videos/Wedding Video .mp4'
import { Link } from 'react-router-dom'
import pic1 from '../Home/videos/tittle_img.png.webp'
import story1 from '../Home/videos/story1.jpg.webp'
import aroww from '../Home/videos/right-arrow .png'
import face from '../Home/videos/facebook (2).png'
import insta from '../Home/videos/instagram (1).png'
import google from '../Home/videos/social.png'
import twitter from '../Home/videos/twitter.png'
import link from '../Home/videos/linkedin.png'
import github from '../Home/videos/github.png'


const Home = () => {
   
  return (
    <>
    <div className='home'>
     
      <video className="videoHome" autoPlay muted loop>
        <source src={video} />
      </video>
      <div className='video-cover-div'>
        <div className='shop-div'>
          <div className='sub'>
         <p>Wedding Expo 2024</p>
         </div>
         <div className='small-div'>
         <p>Your geteway to perfectly planned weddings!</p>
         </div>
        </div>
        <div className='book'>
          <Link to='/Product'>
          <button className='bttn'>SHOP NOW</button>
          <img className='aroww' src={aroww} alt="" />
          </Link>

        </div>
        

      </div>
    
     
</div>
<div className='none'>
        
        </div>

     <div className='story'>
      <div className='sub-line'>
        {/* <div className='hed'> */}
      <h2 className='sry-head'>Our Love Story</h2>
      {/* </div> */}
      {/* <div className='under-line'> */}
        <img src={pic1} alt="" />

      {/* </div> */}
           <p> Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam sodales sem egestas sem blandit volutpat.</p>

      </div>
      <div className='background-div'>
        <div className='color1'>
          <div className='story-details' >
              <h4>The proposal</h4>
              <p>Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci est luctus ex, ut vestibulum ipsum nisl eu nisi.
              <p>Proin at sapien ipsum. Aenean placerat, quam ac tempor.</p>



</p>
          </div>

        </div>
        <div className='color2'>
        <img className='story-img'src={story1} alt="" />


        </div>

      </div>
        
     </div>
     {/* <div className='info'>

     </div> */}
     <div className='wedding-info'>
      <div className='wedding-info-1'>
        <h2 className='sry-head'>Wedding Info</h2>
        <img src={pic1} alt="" />
        <p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl</p>

      </div>
      </div>
      <div className='footer' >
        <div className='social-media'>
          <div className='facebook'><img className='face1' src={face} alt="" /></div>
          <div className='twitter'> <img className='twitter1' src={twitter} alt="" /></div>
          <div className='google'> <img className='google1' src={google} alt="" /></div>
          <div className='insta'> <img className='insta1' src={insta} alt="" /></div>
          {/* <div className='link'> <img className='link1' src={link} alt="" /></div>
          <div className='github'> <img className='github1' src={github} alt="" /></div> */}
          

          
         

        </div>
        <div className='cld'>
          <p>© 2020 Copyright: wedding center.com</p>

        </div>
        


      </div>
    </>
  )
}

export default Home
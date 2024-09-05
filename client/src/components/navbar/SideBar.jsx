import React, { useEffect } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import "./Sidebar.css"
import $ from 'jquery';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import mad from "../../Composent/image/repub.PNG";

function SideBar() {
  const navigate=useNavigate()

  const logout=()=>{navigate('/loginer')}
 
  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
    <div>
<img className="tete" src={mad} alt=""></img>
<nav className="navbar navbar-expand-lg navbar-mainbg">   
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Personnel
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/monrecrutement" exact='true'>
                <i 
                className="far fa-address-book">
                </i>Recrutement
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/premiercontrat" exact='true'>
                <i 
                className="far fa-clone">
                </i>1<sup>ere</sup>Contrat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/moncontrat2" exact='true'>
                <i 
                className="far fa-chart-bar">
                </i>2<sup>eme</sup>Contrat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/moncontrat3" exact='true'>
                <i 
                className="far fa-chart-bar">
                </i>3<sup>eme</sup>Contrat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/monreclassement" exact='true'>
                <i 
                className="far fa-copy">
                </i>Reclassement
              </NavLink>
            </li>

             <div className="deconnecter">
            <Button sx={{textTransform:'none'}} endIcon={<ExitToAppIcon/>} onClick={logout} >Deconnecter</Button>
             </div>
        </ul>
      </div>
  </nav>
    </div>
  
  )
}

export default SideBar
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getLoginCss(): string {
    return `
    .container-custom, .container-lg-custom, .container-md-custom, .container-sm-custom, .container-xl-custom {
      width: 99%;
    }
    .row-custom {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .col-md-4-custom {
      float: left;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      width: 33.333333%;
    }

    .mt-140 {
      margin-top: 140px
    }

    .card {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
    }

    .card-header:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    .card-header {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
        height: 48px;
    }

    .card-header img {
      float: left;
    }

    .card-header span {
      float: left; 
      margin-left: 6px;
    }
    .card-title {
      font-size: 1rem; 
      font-weight: 500;
    }

    .card-body {
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
      text-align: left;
    }

    .divflex .grid-container{grid-template-columns: repeat(1, 1fr);grid-column-gap: 0px;grid-row-gap: 10px;margin: 10px auto; width: 90%;}
    .divflex .grid-container .grid2 {grid-column: span 2; padding-bottom: 10px}
    .divflex .grid-container .grid1 { grid-column: span 1;}
    .divflex .grid-container .inputText {
      width:100%; height:30px;
      border-radius: 4px;
      border: 1px solid #d7cdcd;
      padding: 6px;
    }
    .divflex .grid-container .inputDate{ width:100%;height:30px}
    .divflex .grid-container .select{ width:100%; height:30px}
    .divflex .grid-container .label {font-size: 13px;font-weight: 500;line-height: 24px;}
    .divflex .grid-container .label-check {font-size: 13px;font-weight: 500;line-height: 21px;}
    .divflex .p-footer {font-size: 14px; text-align: center !important; margin-top: 30px}

    .divflex .mt-10 { margin-top: 10px;}
    .divflex .mt-20 { margin-top: 20px;}
    .divflex .mt-30 { margin-top: 30px;}
    
    .btn-custom {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      cursor: pointer;
    }
    .btn-primary-custom {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      width: 120px;
    }
    .btn-light-custom {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
  `
  }

  getDashCss() : string {
    return `body {
      font-size: .875rem;
    }
    
    .feather {
      width: 16px;
      height: 16px;
      vertical-align: text-bottom;
    }
    
    /*
     * Sidebar
     */
    
    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100; /* Behind the navbar */
      padding: 48px 0 0; /* Height of navbar */
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    
    @media (max-width: 767.98px) {
      .sidebar {
        top: 5rem;
      }
    }
    
    .sidebar-sticky {
      position: relative;
      top: 0;
      height: calc(100vh - 48px);
      padding-top: .5rem;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }
    
    @supports ((position: -webkit-sticky) or (position: sticky)) {
      .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
      }
    }
    
    .sidebar .nav-link {
      font-weight: 500;
      color: #333;
    }
    
    .sidebar .nav-link .feather {
      margin-right: 4px;
      color: #999;
    }
    
    .sidebar .nav-link.active {
      color: #007bff;
    }
    
    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
      color: inherit;
    }
    
    .sidebar-heading {
      font-size: .75rem;
      text-transform: uppercase;
    }
    
    /*
     * Navbar
     */
    
    .navbar-brand {
      padding-top: .75rem;
      padding-bottom: .75rem;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, .25);
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
    }
    
    .navbar .navbar-toggler {
      top: .25rem;
      right: 1rem;
    }
    
    .navbar .form-control {
      padding: .75rem 1rem;
      border-width: 0;
      border-radius: 0;
    }
    
    .form-control-dark {
      color: #fff;
      background-color: rgba(255, 255, 255, .1);
      border-color: rgba(255, 255, 255, .1);
    }
    
    .form-control-dark:focus {
      border-color: transparent;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
    }
    `
  }

  // getDashboardCss() : string {
  //   return `
  //   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  //   @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
  //   *{
  //     margin: 0;
  //     padding: 0;
  //     box-sizing: border-box;
  //     font-family: 'Poppins', sans-serif;
  //   }
  //   .sidebar{
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     height: 100%;
  //     width: 260px;
  //     background: #11101d;
  //     z-index: 100;
  //     transition: all 0.5s ease;
  //   }
  //   .sidebar.close{
  //     width: 78px;
  //   }
  //   .sidebar .logo-details{
  //     height: 60px;
  //     width: 100%;
  //     display: flex;
  //     align-items: center;
  //   }
  //   .sidebar .logo-details i{
  //     font-size: 30px;
  //     color: #fff;
  //     height: 50px;
  //     min-width: 78px;
  //     text-align: center;
  //     line-height: 50px;
  //   }
  //   .sidebar .logo-details .logo_name{
  //     font-size: 22px;
  //     color: #fff;
  //     font-weight: 600;
  //     transition: 0.3s ease;
  //     transition-delay: 0.1s;
  //   }
  //   .sidebar.close .logo-details .logo_name{
  //     transition-delay: 0s;
  //     opacity: 0;
  //     pointer-events: none;
  //   }
  //   .sidebar .nav-links{
  //     height: 100%;
  //     padding: 30px 0 150px 0;
  //     overflow: auto;
  //   }
  //   .sidebar.close .nav-links{
  //     overflow: visible;
  //   }
  //   .sidebar .nav-links::-webkit-scrollbar{
  //     display: none;
  //   }
  //   .sidebar .nav-links li{
  //     position: relative;
  //     list-style: none;
  //     transition: all 0.4s ease;
  //   }
  //   .sidebar .nav-links li:hover{
  //     background: #1d1b31;
  //   }
  //   .sidebar .nav-links li .iocn-link{
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  //   .sidebar.close .nav-links li .iocn-link{
  //     display: block
  //   }
  //   .sidebar .nav-links li i{
  //     height: 50px;
  //     min-width: 78px;
  //     text-align: center;
  //     line-height: 50px;
  //     color: #fff;
  //     font-size: 20px;
  //     cursor: pointer;
  //     transition: all 0.3s ease;
  //   }
  //   .sidebar .nav-links li.showMenu i.arrow{
  //     transform: rotate(-180deg);
  //   }
  //   .sidebar.close .nav-links i.arrow{
  //     display: none;
  //   }
  //   .sidebar .nav-links li a{
  //     display: flex;
  //     align-items: center;
  //     text-decoration: none;
  //   }
  //   .sidebar .nav-links li a .link_name{
  //     font-size: 18px;
  //     font-weight: 400;
  //     color: #fff;
  //     transition: all 0.4s ease;
  //   }
  //   .sidebar.close .nav-links li a .link_name{
  //     opacity: 0;
  //     pointer-events: none;
  //   }
  //   .sidebar .nav-links li .sub-menu{
  //     padding: 6px 6px 14px 80px;
  //     margin-top: -10px;
  //     background: #1d1b31;
  //     display: none;
  //   }
  //   .sidebar .nav-links li.showMenu .sub-menu{
  //     display: block;
  //   }
  //   .sidebar .nav-links li .sub-menu a{
  //     color: #fff;
  //     font-size: 15px;
  //     padding: 5px 0;
  //     white-space: nowrap;
  //     opacity: 0.6;
  //     transition: all 0.3s ease;
  //   }
  //   .sidebar .nav-links li .sub-menu a:hover{
  //     opacity: 1;
  //   }
  //   .sidebar.close .nav-links li .sub-menu{
  //     position: absolute;
  //     left: 100%;
  //     top: -10px;
  //     margin-top: 0;
  //     padding: 10px 20px;
  //     border-radius: 0 6px 6px 0;
  //     opacity: 0;
  //     display: block;
  //     pointer-events: none;
  //     transition: 0s;
  //   }
  //   .sidebar.close .nav-links li:hover .sub-menu{
  //     top: 0;
  //     opacity: 1;
  //     pointer-events: auto;
  //     transition: all 0.4s ease;
  //   }
  //   .sidebar .nav-links li .sub-menu .link_name{
  //     display: none;
  //   }
  //   .sidebar.close .nav-links li .sub-menu .link_name{
  //     font-size: 18px;
  //     opacity: 1;
  //     display: block;
  //   }
  //   .sidebar .nav-links li .sub-menu.blank{
  //     opacity: 1;
  //     pointer-events: auto;
  //     padding: 3px 20px 6px 16px;
  //     opacity: 0;
  //     pointer-events: none;
  //   }
  //   .sidebar .nav-links li:hover .sub-menu.blank{
  //     top: 50%;
  //     transform: translateY(-50%);
  //   }
  //   .sidebar .profile-details{
  //     position: fixed;
  //     bottom: 0;
  //     width: 260px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     background: #1d1b31;
  //     padding: 12px 0;
  //     transition: all 0.5s ease;
  //   }
  //   .sidebar.close .profile-details{
  //     background: none;
  //   }
  //   .sidebar.close .profile-details{
  //     width: 78px;
  //   }
  //   .sidebar .profile-details .profile-content{
  //     display: flex;
  //     align-items: center;
  //   }
  //   .sidebar .profile-details img{
  //     height: 52px;
  //     width: 52px;
  //     object-fit: cover;
  //     border-radius: 16px;
  //     margin: 0 14px 0 12px;
  //     background: #1d1b31;
  //     transition: all 0.5s ease;
  //   }
  //   .sidebar.close .profile-details img{
  //     padding: 10px;
  //   }
  //   .sidebar .profile-details .profile_name,
  //   .sidebar .profile-details .job{
  //     color: #fff;
  //     font-size: 18px;
  //     font-weight: 500;
  //     white-space: nowrap;
  //   }
  //   .sidebar.close .profile-details i,
  //   .sidebar.close .profile-details .profile_name,
  //   .sidebar.close .profile-details .job{
  //     display: none;
  //   }
  //   .sidebar .profile-details .job{
  //     font-size: 12px;
  //   }
  //   .home-section{
  //     position: relative;
  //     background: #E4E9F7;
  //     height: 100vh;
  //     left: 260px;
  //     width: calc(100% - 260px);
  //     transition: all 0.5s ease;
  //   }
  //   .sidebar.close ~ .home-section{
  //     left: 78px;
  //     width: calc(100% - 78px);
  //   }
  //   .home-section .home-content{
  //     height: 60px;
  //     display: grid;
  //     align-items: left;
  //   }
  //   .home-section .home-content .bx-menu,
  //   .home-section .home-content .text{
  //     color: #11101d;
  //     font-size: 35px;
  //   }
  //   .home-section .home-content .bx-menu{
  //     margin: 10px 15px;
  //     cursor: pointer;
  //     float: left;
  //   }
  //   .home-section .home-content .text{
  //     font-size: 24px;
  //     font-weight: 600;
  //     float: left;
  //     margin-top: 10px;
  //   }
  //   @media (max-width: 420px) {
  //     .sidebar.close .nav-links li .sub-menu{
  //       display: none;
  //     }
  //   }`
  // }

  getSalesCss(): string {
    return `
   
    @media (min-width: 768px) {
      .col-md-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }
    }
    

    .mt-10 {
      margin-top: 10px
    }

    .card {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
    }

    .card-header:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    .card-header {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
        height: 48px;
    }

    .card-header img {
      float: left;
    }

    .card-header span {
      float: left; 
      margin-left: 6px;
    }
    .card-header i {
      float: right;
      font-size: 20px;
      margin-top: 2px;
      cursor: pointer;
    }
    .card-title {
      font-size: 1rem; 
      font-weight: 500;
    }

    .card-body {
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
      text-align: left;
      min-height: 600px;
    }

    .divflex .grid-container{grid-template-columns: repeat(1, 1fr);grid-column-gap: 0px;grid-row-gap: 10px;margin: 10px auto; width: 90%;}
    .divflex .grid-container .grid2 {grid-column: span 2; padding-bottom: 10px}
    .divflex .grid-container .grid1 { grid-column: span 1;}
    .divflex .grid-container .inputText {
      width:100%; height:30px;
      border-radius: 4px;
      border: 1px solid #d7cdcd;
      padding: 6px;
    }
    .divflex .grid-container .inputDate{ width:100%;height:30px}
    .divflex .grid-container .select{ width:100%; height:30px}
    .divflex .grid-container .label {font-size: 13px;font-weight: 500;line-height: 24px;}
    .divflex .grid-container .label-check {font-size: 13px;font-weight: 500;line-height: 21px;}
    .divflex .p-footer {font-size: 14px; text-align: center !important; margin-top: 30px}

    .divflex .mt-10 { margin-top: 10px;}
    .divflex .mt-20 { margin-top: 20px;}
    .divflex .mt-30 { margin-top: 30px;}
    
    .btn-custom {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      cursor: pointer;
    }
    .btn-primary-custom {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      width: 120px;
    }
    .btn-light-custom {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
  `
  }

  getAnCss(): string {
    return `
    
    .row-c {
      margin-right: -15px;
      margin-left: -15px;
    }
    .mt-10 {
      margin-top: 10px
    }

    .card {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
    }

    .card-header:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    .card-header {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
        height: 48px;
    }

    .card-header img {
      float: left;
    }

    .card-header span {
      float: left; 
      margin-left: 6px;
      font-size: 16px;
    }
    .card-header i {
      float: right;
      font-size: 20px;
      margin-top: 2px;
      cursor: pointer;
    }
    .card-title {
      font-size: 1rem; 
      font-weight: 500;
    }

    .card-body {
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
      text-align: left;
      min-height: 600px;
    }

    .divflex .grid-container{grid-template-columns: repeat(1, 1fr);grid-column-gap: 0px;grid-row-gap: 10px;margin: 10px auto; width: 90%;}
    .divflex .grid-container .grid2 {grid-column: span 2; padding-bottom: 10px}
    .divflex .grid-container .grid1 { grid-column: span 1;}
    .divflex .grid-container .inputText {
      width:100%; height:30px;
      border-radius: 4px;
      border: 1px solid #d7cdcd;
      padding: 6px;
    }
    .divflex .grid-container .inputDate{ width:100%;height:30px}
    .divflex .grid-container .select{ width:100%; height:30px}
    .divflex .grid-container .label {font-size: 13px;font-weight: 500;line-height: 24px;}
    .divflex .grid-container .label-check {font-size: 13px;font-weight: 500;line-height: 21px;}
    .divflex .p-footer {font-size: 14px; text-align: center !important; margin-top: 30px}

    .divflex .mt-10 { margin-top: 10px;}
    .divflex .mt-20 { margin-top: 20px;}
    .divflex .mt-30 { margin-top: 30px;}
    
    .btn-custom {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      cursor: pointer;
    }
    .btn-primary-custom {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      width: 120px;
    }
    .btn-light-custom {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
  `
  }

  getUsersCss(): string {
    return `
   
    @media (min-width: 768px) {
      .col-md-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }
    }
    

    .mt-10 {
      margin-top: 10px
    }

    .card {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
    }

    .card-header:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    .card-header {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
        height: 48px;
    }

    .card-header img {
      float: left;
    }

    .card-header span {
      float: left; 
      margin-left: 6px;
      font-size: 16px;
    }
    .card-header i {
      float: right;
      font-size: 20px;
      margin-top: 2px;
      cursor: pointer;
    }
    .card-title {
      font-size: 1rem; 
      font-weight: 500;
    }

    .card-body {
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
      text-align: left;
      min-height: 600px;
    }
  `
  }

}

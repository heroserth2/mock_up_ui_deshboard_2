import React, { Component } from 'react'
//css
import '../CSS/Navbar.scss'
import {
    Link
} from 'react-router-dom'
import $ from 'jquery'
class MainNavBar extends Component {
    constructor(){
        super()
    }
    openProfile = () =>{
        $('.popup-profile').toggleClass('popup-profile-active')
    }
    componentWillMount(){
        document.addEventListener('mousedown', this.handClick, false);
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handClick, false)
    }
    handClick = (e) =>{
        //ถ้ามี class popup และ click นอกกรอบ popup หรือ click ที่ กรอบโปรไฟล์
        if( $('.popup-profile').hasClass('popup-profile-active') && !this.node_body.contains(e.target) || this.node.contains(e.target)){
            $('.popup-profile').toggleClass('popup-profile-active')
        }
    }
    render() {
        return (
            <nav className='headdingPage'>
                <div className='contentNav'>
                    <Link to='/' class='link-home-page'>
        <a className='nav-heading'>{this.props.header}</a>
                    </Link>
                    <div className='box-icons-search'>
                        <i className='las la-search icon-search'></i>
                        <input type='text' className='input-search' placeholder='Search'></input>
                    </div>
                    <div className='box-profile' ref={node => this.node = node}>
                        <div className='profile-box-image'>
                            <img className='full-w-h' src='https://demos.creative-tim.com/nextjs-argon-dashboard/_next/static/images/team-4-800x800-230071328b705f8686cabd26a85ed6a5.jpg'></img>
                        </div>
                        <a className='box-profile-name'> Jessica Jones</a>
                    </div>
                    <div className='popup-profile' ref={node_body => this.node_body = node_body}>
                        <ul className='list-profile'>
                            <li>
                                welcome!
                                
                            </li>
                            <li>
                                <i className=' fa fa-user'></i>
                                My profile
                            </li>
                            <li>
                                <i className=' fa fa-cog'></i>
                                Settings
                            </li>
                            <li>
                                <i className=' fa fa-calendar'></i>
                                Activity
                            </li>
                            <li>
                                <i className=' fa fa-life-ring'></i>
                                Support
                            </li>
                            <li>
                                <i className=' fa fa-running'></i>
                               Logout
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default MainNavBar
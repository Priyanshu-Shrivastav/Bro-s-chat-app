import React from 'react'
import { Users } from "../../DummyData"
import Online from '../../components/online/Online'
import "./rightbar.css"

const Rightbar = ({profile}) => {

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img src="assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Pola foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
      </div>
      <img src="assets/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {
          Users.map((u) => (
            <Online key={u.id} user={u} />
          ))
        }

      </ul>
    </>
  )
}

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  )
}


  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>

      
    </div>
  )
}

export default Rightbar

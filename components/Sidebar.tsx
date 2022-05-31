import React from 'react'
import {
BellIcon,
HashtagIcon,
BookmarkIcon,
CollectionIcon,
DotsCircleHorizontalIcon,
MailIcon,
UserIcon,
HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img className = "h-10 w-10" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt = ""/>
      <SidebarRow Icon ={HomeIcon} title="Home" />
      <SidebarRow Icon = {HashtagIcon} title="Hashtag"/>
      <SidebarRow Icon = {BellIcon} title="Notifications" />
      <SidebarRow Icon = {MailIcon} title="Messages" />
      <SidebarRow Icon ={BookmarkIcon} title="Bookmark"/>
      <SidebarRow Icon = {CollectionIcon} title="Lists" />
      <SidebarRow Icon = {UserIcon} title ="Sign In" />
      <SidebarRow Icon = {DotsCircleHorizontalIcon} title ="More"/>

    </div>
  )
}

export default Sidebar
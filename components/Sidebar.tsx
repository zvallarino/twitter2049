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
import { signIn, signOut, useSession } from 'next-auth/react'

function Sidebar() {

  const {data: session } = useSession()

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start mt-5">
      <img className = "h-10 w-10 mb-1" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt = ""/>
      <SidebarRow Icon ={HomeIcon} title="Home" />
      <SidebarRow Icon = {HashtagIcon} title="Hashtag"/>
      <SidebarRow Icon = {BellIcon} title="Notifications" />
      <SidebarRow Icon = {MailIcon} title="Messages" />
      <SidebarRow Icon ={BookmarkIcon} title="Bookmark"/>
      <SidebarRow Icon = {CollectionIcon} title="Lists" />
      <SidebarRow onClick = {session? signOut: signIn} Icon = {UserIcon} title ={session?"Sign Out":"Sign In"} />
      <SidebarRow Icon = {DotsCircleHorizontalIcon} title ="More"/>

    </div>
  )
}

export default Sidebar
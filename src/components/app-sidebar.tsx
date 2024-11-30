"use client"

import { ChartColumnIncreasing, Star } from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserApiDto } from '@/server/myApi'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [realUser, setRealUser] = React.useState<UserApiDto | null>(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setRealUser(data.user)
    }

    fetchUser()
  }, [])

  const data = {
    user: {
      name: realUser?.name,
      email: realUser?.email,
      avatar: "",
    },
    navMain: [
      {
        title: "Рейтинг",
        url: "/rating",
        icon: Star,
        isActive: false,
      },
      {
        title: "Метрики",
        url: "/metrics",
        icon: ChartColumnIncreasing,
        isActive: false,
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

import { IndianRupee, Home, ChartPie, HandCoins, Settings, Wallet } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


function getDate() {
  const date = new Date()
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

function getTime() {
    const date = new Date()
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    })
}

const myTime = getTime()

const myDate = getDate()
const day = myDate.split(",")[0]
const month = myDate.split(" ")[1]
const date = myDate.split(" ")[2]


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "../transactions",
    icon: IndianRupee,
  },
  {
    title: "Budget",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "Goals",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "Loans",
    url: "#",
    icon: Wallet,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible='none'>
        <SidebarHeader>
            <h1>{myTime}</h1>
            <h1 style={{fontSize:'35px', fontWeight:'700'}}>{day}</h1>
            <p style={{fontSize:'15px'}}>{month} {date}</p>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        Made with &lt;3 by 4S
      </SidebarFooter>
    </Sidebar>
  )
}

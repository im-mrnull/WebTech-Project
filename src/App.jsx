import './App.css';
import myimg from './assets/bgImg.png';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import NameBanner from './components/name-banner'
import BudgetCard from './components/budget-card';


export default function App({ children }){
  return (
    <div className='flex flex-row'>
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
    <div className='flex flex-col min-h-screen items-center w-full p-10 gap-20 '>
      <NameBanner/>
      <BudgetCard/>
    </div>
      <img src={myimg} className='fixed bottom-0 right-0 w-[300px] opacity-[0.1]'/>
    </div>
  )
}

        
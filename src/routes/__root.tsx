import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

function NotFoundComponent(){return <main className="status-page"><span>404</span><h1>This page could not be found.</h1><Link to="/">Return home ↗</Link></main>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){const router=useRouter(); useEffect(()=>reportLovableError(error,{boundary:"tanstack_root_error_component"}),[error]); return <main className="status-page"><span>Error</span><h1>This page did not load.</h1><button onClick={()=>{router.invalidate();reset()}}>Try again</button></main>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"author",content:"NB Instrument Pvt. Ltd."},{property:"og:site_name",content:"NB Instrument"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap"},{rel:"icon",href:"/favicon.png",type:"image/png"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><SiteHeader/><Outlet/><SiteFooter/></QueryClientProvider>}

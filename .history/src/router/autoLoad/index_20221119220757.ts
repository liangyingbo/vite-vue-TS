import { RouteRecordRaw } from "vue-router";
import autoLoadRoutesByModule from "./module";
import getRoutes from './view'

let routes;

if(import.meta.env.VITE_AUTOLOAD ){
    console.log(import.meta.env.VITE_AUTOLOAD )
    //routes = getRoutes()
    routes = getRoutes()
} else{

}
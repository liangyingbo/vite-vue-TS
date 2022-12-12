interface Menu {
    title:string,
    icon?:string,
    isClick?:boolean
}

interface IMenu extends Menu{
    children?:Menu[]
}
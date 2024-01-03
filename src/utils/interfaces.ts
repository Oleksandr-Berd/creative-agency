export interface IStyles {
bg:string;
size:string;
}

export interface ILink {
    path:string,
    content:string,
}

export interface AdjustSizeProps {
    complySize:(windowWidth:number, initialSize:number, initialWindowWidth:number) => string
}

export interface IMenu {
    toggleMenu:()=>void,
    isMenu:boolean,
}
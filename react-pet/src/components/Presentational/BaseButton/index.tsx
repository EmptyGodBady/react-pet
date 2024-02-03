import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
        dlina:number;
        name:string;
        click:Function;
}>

export default function BaseButton({dlina, name, click, children}:Props){
    return (<button onClick={()=>click()}>
    </button>)
}





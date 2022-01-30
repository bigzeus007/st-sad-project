import Link from "next/link";
import SignOut from "./SignOut";

export default function Test2(){
    return(
        <>
        <SignOut/>
        <Link href="/components/Test2">
            <a> Hello </a>
        </Link>
    </>)
}
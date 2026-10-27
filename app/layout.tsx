import "./styles.css";
import type {ReactNode} from "react";
export const metadata={title:"CrowdQuest",description:"Twitch chat solves timed questions together using one verified first vote per viewer."};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body className="lab">{children}</body></html>;}

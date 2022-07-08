import styles from "../styles/Navi.module.scss"
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";

const Navi = (props) => {
    const session = supabase.auth.session();
    return(
        <div className={styles.container}>
        <div className="nav-bar flex pl-4">
            <div  className="nav-brand w-1/2 py-5 pl-40"><Link href='/'>[DECA UTSC LOGO]</Link></div> 
            <div className="py-50 w-1/2">
                <ul className="nav-nav flex">
                    <li className="nav-list py-5 pl-12"><Link className="nav-link" href="/">[Home]</Link></li>
                    <li className="nav-list py-5 pl-12"><Link className="nav-link" href="/about">[About]</Link></li>
                    <li className="nav-list py-5 pl-12"><Link className="nav-link" href="/events">[Events]</Link></li>
                    <li className="nav-list py-5 pl-12"><Link className="nav-link" href="/delegate">[Delegate]</Link></li>
                    <li className="nav-list py-5 pl-12"><Link className="nav-link" href="/contact">[Contact]</Link></li>
                    <li className="nav-list py-5 pl-12">
                    {/* <Link className="nav-link" href="/login">[Login]</Link> */}
                    {!!session ? <Link className="nav-link" href='/login'>[Account]</Link> : <Link className="nav-link" href="/login">[Login]</Link>}
                    </li>
                    {/* <li>
                    <motion.button className='underline underline-offset-1          text-cyan-500' onClick={(e) => {
                        e.preventDefault()
                        alert(!!session)
                        }} >
                        Check.
                    </motion.button>
                    </li> */}
                </ul>
            </div>
        </div>
</div>);
}
// export async function getServerSideProps(){
//     return{
//         props{

//         }
//     }
// }

export default Navi;
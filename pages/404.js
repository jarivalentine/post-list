import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Yo</h1>
            <h2>Deze shit bestaat niet man</h2>
            <Link href="/"><a>Ga terug naar home</a></Link>
        </div>
    );
}
 
export default NotFound;
import profile from '../../assets/profile.jpg'
import { Github, Twitter, Mail } from 'lucide-react'

const Home = () => {
  return (
    <div className='flex justify-center items-center relative z-50 font-mono'>
    <div className='min-h-screen min-w-2xl'>
    
    <section className='pt-20 px-7'>
        <div className='flex justify-between pb-3'>
            <img src={profile} className='w-45 h-45 rounded-3xl'/>
            <div className='flex gap-4'>
                <Github className='w-9 font'/>
                <Twitter className='w-9'/>
                <Mail className='w-9'/>

            </div>
        </div>
        <h1 className='font-bold text-3xl tracking-tighter'>Hi, I'm Probal</h1>
        <p className='pt-1'>22, Kolkata|Fullstack Developer</p>
    </section>

    </div>
    </div>
  )
}

export default Home

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Masthead from '../components/masthead'
import Aboutus from '../components/aboutus'
import Contact from '../components/contact'
import SignIn from '../components/signin'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RateWorks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <Masthead />
      <SignIn />
      <Aboutus />
      <Contact />
      
    
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 
         
        </a>
      </footer>
    </div>
  )
}

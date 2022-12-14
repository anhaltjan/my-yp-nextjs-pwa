import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>YouPointγ About γ</title>
      </Head>
      <Title title='About' subtitle='Why you should care.' />

      <div className={styles.aboutBio}>
        <h3 className={styles.bioHeader}>First, So... Why YouPoint?</h3>
        <p>
          There is a copious amount of valuable information for those who live
          or will live Japan<span className={styles.textIcon}>πΎ</span> on the
          internet; almost overmuch of it is old, wrong, misleading or
          straight-up useless. Sites like Facebook provide great community
          forums. But waste time sifting through garbage posts and comments to
          obtain great advice and even harder to find older posts that you
          desperately need.
        </p>
        <h3 className={styles.bioHeader}>
          With YouPoint I wanted to do something different.
        </h3>
        <p>
          I want to take all that good information about Japan, filter it, audit
          it and carefully prepare it for my wonderful community of like-minded
          expats. So they can promptly get their deserved information easily.
        </p>
        <h3 className={styles.bioHeader}>That&apos;s not all.</h3>
        <p>
          I have an image of a bright future for us!{' '}
          <span className={styles.textIcon}>π»</span>Online and
          <span className={styles.textIcon}>π€π»</span> Offline community hubs
          where we can receive Japanese lessons
          <span className={styles.textIcon}>π§π»βπ«</span>, interpretation services
          <span className={styles.textIcon}>π€³π»</span> on top of that have
          community meetups. So we can network, find new friends or even that
          special someone. Basically, the point is! Living overseas is hard.
          Whether if we&apos;re foreign-residents, immigrants, refugees, or
          expats we need more help to live successful and fulfilling lives
          overseas.
        </p>

        <p>So, I need your help because,this is a team effort.</p>

        <p>Please join me and let&apos;s help make Japan</p>

        <p>Even better</p>

        <p>
          <strong className={styles.redText}>Together</strong>
        </p>

        <p>
          <strong>γγγγγι‘γγγγγΎγγ</strong>
        </p>

        <p>
          <strong>Jan Anhalt</strong>
        </p>

        <div className={styles.imgWrap}>
          <Image src='/images/jan.png' alt='Jan' width={50} height={50} />
        </div>
        {/*   <h3 className={styles.bioHeader}>Wait, Who&apos;s Jan?</h3>

        <p>
          Honestly, I prefer to talk to you all. Please watch the video below!
        </p> */}
        <br />
        {/* EMBED VIDEO HERE */}
        {/*  <p>
          Now that you have seen my beautiful face; please message me If you
          have any questions or need information on living in Japan! Give me at
          most 24 hours to get back to you!
        </p> */}
      </div>
    </>
  )
}

export default About

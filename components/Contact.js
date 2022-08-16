import Image from 'next/image'
import Jan from '../public/images/jan.png'
import Kemmy from '../public/images/kemmy.png'
import Title from './Title'

import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <>
      <Title title='Talk to us! 👋' subtitle="We're here for you" />
      <div className={styles.imgContainer}>
        <div className={styles.imgWrap}>
          <Image
            width={200}
            height={200}
            src={Jan}
            layout='responsive'
            alt='Picture of Jan'
          />
        </div>
        <div className={styles.imgWrap}>
          <Image
            width={200}
            height={200}
            src={Kemmy}
            layout='responsive'
            alt='Picture of Kemmy'
          />
        </div>
      </div>
      <ul className={styles.exampleList}>
        <li>If you have a question small or big</li>
        <li>If you can&apos;t find a location in Tokyo</li>
        <li>If you have any location recommendations let us know</li>
        <li>We want to get to know you! Let&apos;s chat! </li>
      </ul>

      <form id='form' data-netlify='true' action={`POST`}>
        <input
          className='form-input form-child'
          placeholder='Name (Jan Anhalt)'
          type='text'
          id='name'
          name='name'
          required
        />

        <input
          className='form-input form-child'
          type='email'
          name='email'
          placeholder='Email Address'
          required
        />

        <input
          className='form-input form-child'
          placeholder='Location (Kita-ku, Tokyo)'
          type='text'
          id='location'
          name='location'
          required
        />

        <select id='select' className='form-input form-child' name='emotion'>
          <option value='nonAnswer'>How&apos;re you doing?</option>
          <option value='stressed'>Stressed</option>
          <option value='unhappy'>Unhappy</option>
          <option value='umotivated'>Unmotivaed</option>
          <option value='motivated'>Motivated</option>
          <option value='happy'>Happy</option>
          <option value='unstressed'>Unstressed</option>
          <option value='trainProblems'>
            people don&apos;t sit nex to me on the train
          </option>
        </select>

        <select className='form-input form-child' name='length' id='time'>
          <option value='nonAnswer'>
            --How long have you lived in Japan?--
          </option>
          <option value='never'>never</option>
          <option value='only travelled Japan'>only travelled Japan</option>
          <option value='less than one year'>less than one year</option>
          <option value='one to five years'>1-5 years</option>
          <option value='six to nine years'>6-9 years</option>
          <option value='more than ten years'>10+ years</option>
          <option value='a little too long'>maybe a little too long...</option>
        </select>

        <select className='form-input form-child' name='level' id='level'>
          <option value='nonAnswer'>--Japanese level--</option>
          <option value='no experience'>Non-experienced</option>
          <option value='N5-basic'>N5-Basic Level</option>
          <option value='N4-elementary'>N4-Elementary Level</option>
          <option value='N3-intermediate'>N3-Intermediate Level</option>
          <option value='N2-preAdvanced'>N2-Pre-Advanced Level</option>
          <option value='N1-Advanced'>N1-Advanced Level</option>
          <option value='native level'>Native Level</option>
        </select>

        <select
          className='form-input form-child'
          name='topic'
          id='topic'
          required
        >
          <option value='nonAnswer'>--Message topic--</option>
          <option value='hello'>just saying hi!</option>
          <option value='question'>I have a question</option>
          <option value='recommendation'>I have a recommendation</option>
          <option value='support YouPoint'>I want to support YouPoint</option>
          <option value='join YouPoint'>I want to join YouPoint</option>
        </select>

        <textarea
          className='form-input form-child'
          name='message'
          id=''
          cols='30'
          rows='10'
          placeholder='Message here'
        />

        <div className='form-info, form-child'>
          <p>Please, give us 24 hours to reply back!</p>
        </div>

        <div className='field'>
          <div data-netlify-recaptcha='true'></div>
        </div>

        <button id='submit' className='form-button form-child'>
          Send some love!
        </button>
      </form>
    </>
  )
}

export default Contact

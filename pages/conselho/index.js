import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/Link'

const urlAdvice = "https://api.adviceslip.com/advice";
const urlDog = "https://dog.ceo/api/breed/mix/images/random";

export const getStaticProps = async () =>{
    const res = await fetch(urlAdvice)
    const data = await res.json()
    const resDog = await fetch(urlDog)
    const dataDog = await resDog.json()


    return{
      props:{ conselhoDoDog:data, thumbDoDog:dataDog}
    }
  }


export default function Conselho({conselhoDoDog, thumbDoDog}) {

    return (
      <main>
        <div className='cardDog'>
          <div className='dogThumb'>
            <Image src={thumbDoDog.message} objectFit='cover' width={300} height={300} />
          </div>
          
          <p id="conselhoID" className='conselhoText'>
              {conselhoDoDog.slip.advice}
          </p>
        </div>
        <Link href="/"><a className='linkVoltar'>voltar</a></Link>
      </main>
    )
  }
  
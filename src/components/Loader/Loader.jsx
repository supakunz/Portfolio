import { useEffect, useState } from 'react'
import style from './Loader.module.scss'

const Loader = ({ time }) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    let current = 0
    let timeoutId

    const intervalId = window.setInterval(() => {
      current += 1
      setNumber(current)

      if (current >= 100) {
        window.clearInterval(intervalId)
        timeoutId = window.setTimeout(() => {
          time(false)
        }, 800)
      }
    }, 40)

    return () => {
      window.clearInterval(intervalId)
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [time])

  return (
    <>
      <section>
        <div className={`${style.preloader} ${number >= 100 ? `${style.active} ` : null}`}>
          <div className={`${style.counter} ${number >= 100 ? `${style.hide}` : null} `}>{number}</div>
        </div>
      </section >
    </>
  )
}

export default Loader

import style from "./cursor.module.scss"
import {useEffect, useRef} from 'react'
import gsap from "gsap"

function cursor() {

    const i = useRef<HTMLElement>(null)

    useEffect(() => {
        console.log("nada")
        window.onmousemove = (e) =>{
            const {clientX: x, clientY: y} = e

            // configura a animacao
            const config = {
                x, y, duration: 2, scale: 1, ease: "elastic.out(.8, .4)" 
            }

            // se for um elemento DOM com data-type valido...
            if(e.target instanceof HTMLElement && e.target.dataset.type){
                const {type: dataType} = e.target.dataset
                config.scale = dataType ? 2.5 : 1
                
                // seta o icone dentro do cursor que segue
                i.current!.className = `fa-solid fa-${dataType}`

                gsap.set("#"+style.cursor, {x, y, opacity: 0})
                gsap.to("#"+style.cusor_follower + "> i", {opacity: 1})
            }else{
                gsap.to("#"+style.cusor_follower + "> i", {opacity: 0})
                gsap.set("#"+style.cursor, {x, y, opacity: 1})
            }
            gsap.to("#"+style.cusor_follower, config)
        }

        return () => {
            window.onmousemove = null
        }
    })

  return (
    <>
        <div id={style.cursor}></div>
        <div id={style.cusor_follower}>
            <i ref={i} className="fa-solid fa-link"></i>
        </div>
    </>
  )
}

export default cursor
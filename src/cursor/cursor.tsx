import "./cursor.scss"
import {useEffect, useRef, type ReactNode} from 'react'
import gsap from "gsap"

type Props ={
    children: ReactNode
}

function Cursor1({children}: Props){
    return (
    <>
        <div 
            id="cursor"
            className="cursor"></div>
        <div 
            id="cursor_follower"
            className="folowerCursor">
            {children}
        </div>
    </>
  )
}

function Cursor2({children}: Props){
    return (
    <>
        <div 
            id="cursor2"
            className="cursor"></div>
    </>
  )
}

type MainProps = {
    cursorType: Boolean
}

function cursor({cursorType}: MainProps) {

    const i = useRef<HTMLElement>(null)

    useEffect(() => {
        console.log("nada")
        const cursor = ".cursor"
        const followerCursor = ".folowerCursor"
        const haveFolower = (config?: Object | null, animateChildren?: Boolean) => {
            if(cursorType){
                if(animateChildren){
                    gsap.to(followerCursor + "> i", {opacity: 1})
                }else{
                    console.log("Entrou!")
                    gsap.to(followerCursor, config!)
                }
            }else{

            }
        }
            window.onmousemove = (e) =>{
                const {clientX: x, clientY: y} = e
                
            // configura a animacao do follower
            const config = {
                x, y, duration: 3, scale: 1, ease: "elastic.out(.8, .4" 
            }

            // se for um elemento DOM com data-type valido...
            // e se for o primeiro cursor
            if(
                e.target instanceof HTMLElement && 
                e.target.dataset.type &&
                cursorType
            ){
                const {type: dataType} = e.target.dataset
                config.scale = dataType ? 2.5 : 1
                
                gsap.set(cursor, {x, y, opacity: 0})
                // seta o icone dentro do cursor que segue
                i.current!.className = `fa-solid fa-${dataType}`
                haveFolower(null, true)
            }else{
                // remove o icone se nao tiver nada
                i.current!.className = ""
                gsap.set(cursor, {x, y, opacity: 1})
                // gsap.to(followerCursor + "> i", {opacity: 0})
                haveFolower(config)
            }
            haveFolower(config)
            // gsap.to(followerCursor, config)
    }

        return () => {
            window.onmousemove = null
        }
    }, [cursorType])

    if(cursorType){
        return(
            <Cursor1>
                <i ref={i} className="fa-solid fa-link"></i>
            </Cursor1>
        )
    }else{
        return(
            <Cursor2>
                <i ref={i} className="fa-solid fa-link"></i>
            </Cursor2>
        )
    }
}

export default cursor
import style from "./customElement.module.scss"

type Props = {
    dataType?: String,
    func?: () => void
}

function customElement({dataType = "outros", func}: Props) {
  
    function setBgColor(): String{
        switch(dataType){
            case "video":
                return "#fc2bce"
            break
            case "link":
                return "#eb7d23"
            break
            case "toggle-off":
                return "red"
            break
            default:
                return "#66b9f0"
        }
    }
    return (
    <div 
        id={style.element} 
        data-type={dataType}
        onClick={func}
        style={{"--bg": setBgColor()} as React.CSSProperties}></div>
  )
}

export default customElement
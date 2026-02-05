import style from "./customElement.module.scss"

type Props = {
    dataType?: String
}

function customElement({dataType = "outros"}: Props) {
  
    function setBgColor(): String{
        switch(dataType){
            case "video":
                return "#fc2bce"
            break
            case "link":
                return "#eb7d23"
            break
            default:
                return "#66b9f0"
        }
    }
  
    return (
    <div 
        id={style.element} 
        data-type={dataType}
        style={{"--bg": setBgColor()} as React.CSSProperties}></div>
  )
}

export default customElement
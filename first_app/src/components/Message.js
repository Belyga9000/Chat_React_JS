import "./Message.scss"

export const Message =  (prop) => {
    const text = "Мир"
    return <p class="paragraph">{prop.name} {text}</p>
}
export default function Clock(props) {
    return (
        <div>It is {props.date.toLocaleTimeString()}</div>
    )
}

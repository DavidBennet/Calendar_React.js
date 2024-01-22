

export function DayCard(props) {
    return <p>{props.day.format("DD").toString()}</p>
}
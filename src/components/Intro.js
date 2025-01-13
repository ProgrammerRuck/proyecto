export default function Intro(props){
    console.log(props);
    const { message } = props;
    return(
    <div>
        <p>Hey</p>
        <p>{ message }</p>
    </div>)
}
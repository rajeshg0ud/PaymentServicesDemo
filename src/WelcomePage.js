import { useSelector } from "react-redux";



const WelcomePage=()=>{

    const {name} = useSelector(store => store.Slice)

    return(<div>
        <div>Hi  {name}</div>
        <div>Welcome to PRT software solutions</div>
        </div>)
}

export default WelcomePage;
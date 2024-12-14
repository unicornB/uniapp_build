import { Button } from "antd"
import { useSelector } from "react-redux"
import { useStoreTrigger } from "@/common/hooks";
// import store from "../store"
// //获取state 类型
// type RootState = ReturnType<typeof store.getState>

const Page1 = () => {
    const count = useSelector((state: RootState) => state.userStore.count);
    const StoreTrigger = useStoreTrigger();
    const onClick = () => {
        StoreTrigger.dispatch({
            type: "addCount",
            num: 1
        })
    }
    const asyncAdd2 = () => {
        StoreTrigger.asyncDispatch({ type: "asyncAddCount", num: 2 });
    };
    return (
        <div>
            <h1>Page 1</h1>
            <p>This is the first page</p>
            <a href="https://www.google.com">Go to Google</a>
            <p>Number: {count}</p>
            <Button onClick={onClick}>同步方法</Button>
            <Button onClick={asyncAdd2}>异步方法</Button>
        </div>
    )
}
export default Page1
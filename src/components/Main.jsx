import styled from "styled-components"
import Top from "./Top"
import Content from "./Content"
import Middle from "./Middle"
import Trending from "./Trending"
import { useState } from "react"

const Main = () => {

    const [current, setCurrent] = useState("saved")

  return (
    <>
        <Outer>
            <div>
                <Top setCurrent = {setCurrent}/>
                    {
                        current == "saved" ?  
                        <>
                            <Center>
                                <Middle/>
                                <Content/>
                            </Center>
                        </>
                        : current === "curated"  ? <Content current={current}/>
                        : current === "trending" ? <Trending/>
                        : ""
                    }
            </div>
        </Outer>
    </>
  )
}

export default Main;

const Outer = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 1;
    height: 100vh;
    overflow: auto;
    color: rgba(255,255,255,1);
    padding: 20px;
    margin: auto;
`


const Center = styled.div`
    max-width: 896px;
    margin: auto;
`

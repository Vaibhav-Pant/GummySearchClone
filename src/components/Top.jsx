import styled from "styled-components"

const MainTop = ({setCurrent}) => {


  return (
    <Top>

        <div className="top-one">
            <div className="text">
                <h2>Audiences</h2>
            </div>
            <div className="tabs">
                <a href="#" style={{backgroundColor: "rgba(55,65,81,1)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="-ml-1 mr-2 h-5 w-5" aria-hidden="true"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Info
                </a>
                <a href="#" style={{backgroundColor: "rgba(6,182,212,1)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="-ml-1 mr-2 h-5 w-5" aria-hidden="true"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                New
                </a>
            </div>
        </div>

        <div className="top-two">
            <nav>
                <a href="#" onClick={() => setCurrent("saved")}>
                    <span>Saved</span>
                </a>
                <a href="#" onClick={() => setCurrent("curated")}>
                    <span>Curated</span>
                </a>
                <a href="#" onClick={() => setCurrent("trending")}>
                    <span>Trending</span>
                </a>
            </nav>
        </div>

    </Top>
  )
}

export default MainTop

const Top = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -10.5px;


    .top-one{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .text{
        flex-grow: 1;
        font-size: 26.25px;
        font-weight: 700;
    }

    .text h2{
        font-weight: 700;
        color: rgba(255,255,255,1);
    }

    .tabs{
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-left: auto;
    }

    .tabs a{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 7px 14px;
        border-radius: 8px;
        border: 0;
    }


    .top-two nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        max-width: 100%;
    }

    .top-two{
        border-bottom: 1px solid rgba(31,41,55,1);
    }

    .top-two nav a{
        font-size: 12.25px;
        font-weight: 500;
        padding: 7px 7px 14px 7px;
        color: gray;
        cursor: pointer;
    }

    .top-two nav a:hover{
        color: white;
        border-bottom: 2px solid white;
    }


    @media screen and (max-width: 640px) {
        .text{
            font-size: 21px;
        }
    }
    
`

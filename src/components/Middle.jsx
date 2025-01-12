import styled from "styled-components"

const Middle = () => {
  return (
    <MiddleElem>
        <div className="first">
            <div className="image">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h2>Create your first audience</h2>
            <p>An audience is a collection of subreddits you can search/analyze quickly</p>
        </div>

        <div className="second">
            <h3>Name your custom audience</h3>
            <form >
                <div className="input">
                    <input type="text" placeholder='Pick a short name, like "Digital Marketers" or "Movie-Goers" '/>
                </div>
                <div className="btn">
                    <button>Find Communities</button>
                </div>

            </form>
        </div>

    </MiddleElem>
  )
}

export default Middle


const MiddleElem = styled.div`
    padding-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;


    .first{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .image{
        background-color: rgba(55,65,81,1);
        display: inline-block;
        border-radius: 5.25px;
        padding: 17.5px;
    }

    .first h2{
        font-size: 15.75px;
        font-weight: 500px;
        opacity: 0.5;
    }

    .first p{
        font-size: 12.25px;
        color: rgb(107, 114, 128);
        text-align: center;
    }


    .second h3{
        color: rgb(156, 163, 175);
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.2625px;
        text-transform: uppercase;
        margin-bottom: 7px;
    }

    .second form{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .input{
        flex-grow: 1;
    }

    .input input{
        width: 100%;
        background-color: rgb(31, 41, 55);
        border: 0.8px solid rgb(55, 65, 81);
        border-radius: 5.25px;
        padding: 7px;
        outline: none;
    }
    
    .btn button{
        cursor: pointer;
        width: 100%;
        text-align: center;
        font-weight: 500;
        border-radius: 5.25px;
        border: 1px solid transparent;
        background-color: rgba(8,145,178,1);
        display: block;
        padding: 7px 14px;
    }


    @media screen  and (max-width: 640px){
        .second form{
            flex-direction: column;
        }
    }

`

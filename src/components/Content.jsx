import React from 'react'
import Box from './Box'
import styled from 'styled-components'

const Content = ({current}) => {
    const n = 23;   
  return (
    <Boxes>
        {
            current === "curated" ? "Curated Audiences"
            : 
            <h3 className='top-text'>
                <div>   
                        No audience in mind? Explore a curated one, or browse <a href="#">Trending subreddits</a>.
                </div>
            </h3>
        }
        <div className={`${current != "curated" ? "boxx" : "curated"}`}>
            {
                [...Array(n)].map((e, index) => 
                    <Box key={index}/>
                )
            }
        </div>
    </Boxes>
  )
}

export default Content

const Boxes = styled.div`

    margin-top: 28px;

    .top-text{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 600;
        font-size: 10.5px;
        text-transform: uppercase;
        color: rgb(156, 163, 175);
    }

    .top-text a{
        text-decoration: underline    
    }

    .boxx{       
        display: grid;
        gap: 14px;
        opacity: 1;
        margin-top: 7px;
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
    
    .curated{
        display: grid;
        gap: 14px;
        opacity: 1;
        margin-top: 7px;
        grid-template-columns: repeat(4,minmax(0,1fr));
    }

    @media screen and (max-width: 640px){
        .boxx .curated{
            grid-template-columns: repeat(1,minmax(0,1fr));
        }
    }


`
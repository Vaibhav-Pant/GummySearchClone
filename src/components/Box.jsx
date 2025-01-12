import styled from "styled-components"

const Box = (props) => {
  return (
    <Outer>
        <div className="first">
            {/* <h2>{props.name}</h2> */}
            <h2>Pet Lovers</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 h-6 w-6 flex-shrink-0 text-gray-500" data-for="audience-card-4c0463bfad" data-tip="Curated by GummySearch" currentItem="false"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"></path></svg>
        </div>

        <div className="second">
            <div className="stats">
                <div className="subs stat">
                     <svg class="h-4 w-4 mr-1 opacity-25" enable-background="new 0 0 24 24" height="512" fill="currentColor" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path></svg>
                     31 Subs
                </div>

                <div className="users stat">
                      <svg class="h-4 w-4 mr-1 opacity-25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    21.9M
                    Users
                </div>

                <div className="permonth stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    <div>2.19 % /mo</div>
                </div>
            </div>

            <div className="images">
                <div className="img-outer-box">
                    <div className="plus">+24</div>
                    <div className="image">
                        <img src="https://styles.redditmedia.com/t5_2tjao/styles/communityIcon_2ru43ge8dg1e1.png?width=256&s=13b659e30321a3b08a44c056b04477342238a3d2" alt="PetAdvice"/>
                    </div>
                    <div className="image">
                        <img src="https://styles.redditmedia.com/t5_2uqu9/styles/communityIcon_9p15b1k9zw551.jpg?width=256&s=c24dd0811a88a00eb2a515526ebcac227e9d4aa5" alt="cockatiel"/>
                    </div>
                    <div className="image">
                        <img class="h-full w-full rounded-sm" src="https://styles.redditmedia.com/t5_2svlx/styles/communityIcon_1ff99du8zq891.png?width=256&s=3992da7a00704895165f6a3798d86d18a8748fdd" alt="turtle"/>
                    </div>
                    <div className="image">
                        <img src="https://styles.redditmedia.com/t5_2slot/styles/communityIcon_yuep9bjj34ya1.png?width=256&s=935edbdc38c78feb506fde4cd73945eef49f3b27" alt="leopardgeckos"/>
                    </div>
                    <div className="image">
                        <img src="https://styles.redditmedia.com/t5_2srho/styles/communityIcon_iprkwgdy985b1.jpg?width=256&s=4901f54733b3e3f140b828bdc31c122ed8e0ad9e" alt="ballpython"/>
                    </div>
                    <div className="image">
                        <img src="https://styles.redditmedia.com/t5_2re9t/styles/communityIcon_hxt82sxbl8cc1.png?width=256&s=a90b29d5f3484d261e82f8bd9a71f5ec48431ec4" alt="herpetology"/>
                    </div>
                    <div className="image">
                       <img src="https://styles.redditmedia.com/t5_367ex/styles/communityIcon_hzmr0tbew45a1.jpg?width=256&s=130d2c817ee3447319d2de44061e61f13bd832e1" alt="DogAdvice"/>
                    </div>
                </div>
            </div>

        </div>
    </Outer>
  )
}

export default Box

const Outer = styled.div`

    cursor: pointer;
    background-color: rgb(55, 65, 81);
    border-radius: 5.25px;
    font-size: 14px;
    padding: 14px;

    &:hover{
        background-color: rgba(75,85,99,1);
    }

    .first{
        display: flex;
        flex-direction: row;
        align-items: center;
    }


    .first h2{
        font-size: 17.5px;
        font-weight: 600;
        line-height: 24.5px;
        margin-right: auto;
    }

    .first svg{
        flex-shrink: 0;
        margin-left: 7px;
        height: 21px;
        width: 21px;
        display: block;
    }

    .stats{
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-size: 10.5px;
        margin-top: 7px;
    }

    .stat{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }

    .permonth{
        color: rgb(156, 163, 175)
    }

    .img-outer-box{
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-top: 7px;
        padding-right: 14px;
    }

    .image{
        position: relative;
        border-radius: 5.25px;
        background-color: rgb(75, 85, 99);
        border: 2px solid rgb(31, 41, 55);
        width: 42px;
        height: 42px;
        font-size: 14px;
        padding: 3.5px;
        margin-right: -1rem;
    }
    
    .plus{
        position: relative;
        text-align: center;
        border: 2px solid rgb(31, 41, 55);
        border-radius: 5.25px;
        padding: 12.25px;
        width: 42px;
        height: 42px;
        font-size: 10.5px;
        font-weight: 600;
        color: rgb(156, 163, 175)
    }

`
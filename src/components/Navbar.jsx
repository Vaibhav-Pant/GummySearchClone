import styled from "styled-components"

const Navbar = () => {

    return (
        <>
            <NavBar>
                <div className="image">
                    <a href="#">
                        <img src="https://go.gummysearch.com/images/branding-logo-head-gray.png" alt=""  height={40}/>
                    </a>
                </div>

                <div className="top nav-common">
                    <a href="#">
                        <span className="sr-only">Audiences</span>
                        <img src="/svg/audience.svg" alt="audience" />
                    </a>
                    <a href="#">
                        <span className="sr-only">Search</span>
                        <img src="/svg/search.svg" alt="search" />
                    </a>
                    <a href="#">
                        <span className="sr-only">Conversations</span>
                        <img src="/svg/conversation.svg" alt="conversation" />
                    </a>
                    <a href="#">
                        <span className="sr-only">AI Reports</span>
                        <img src="/svg/reports.svg" alt="reports" />
                    </a>
                </div>

                <div className="bottom nav-common">
                    <a href="#">
                        <span className="sr-only">Help</span>
                        <img src="/svg/help.svg" alt="help" />
                    </a>
                    <a href="#">
                        <span className="sr-only">Account</span>
                        <img src="/svg/account.svg" alt="account" />
                    </a>

                    <div className="more">
                        <button>
                            <span className="sr-only">More</span>
                            <img src="/svg/more.svg" alt="more" />
                        </button>
                    </div>
                </div>

            </NavBar>
        </>
    )
}

export default Navbar;

const NavBar = styled.nav`
    position: static;
    background-color: rgba(31,41,55,1);
    width: 70px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .image{
      background-color: rgba(6,182,212,1);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
    }

    .image img{
        width: auto;
        height: 2.5rem;
    }

    .top{
        display: flex;
        flex-direction: column;
        position: relative;
        flex-grow: 1;
    }
    
    .bottom{
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .nav-common{
        align-items: center;
        padding: 12px;

    }

    .nav-common a{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 8px;
        width: 56px;
        height: 56px;
        color: rgba(255,255,255,1);
    }

    .nav-common a:hover{
        background-color: rgba(55,65,81,1);
    }

    .nav-common img{
        width: 24px;
        height: 24px;
        display: block;
        color: rgba(255,255,255,1);
    }

    .sr-only{
        position: absolute; 
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;
    }

    .more{
        position: relative;
    }

    .more button{
        cursor: pointer;
        background-color: transparent;
        background-image: none;
        line-height: inherit;
        padding: 0;
        border-radius: 0.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 3.5rem;
    }


    @media screen and (max-width: 768px) {
        display: none;
    }
`
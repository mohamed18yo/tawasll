import React from 'react'
import { SearchBox, SearchInput } from './navbar.style'



export const SearchBoxResult = () => {
    return (
        <SearchBox>
            <SearchInput>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.971" height="20.429" viewBox="0 0 19.971 20.429">
                        <g id="Iconly_Light_Search" data-name="Iconly/Light/Search" transform="translate(0.5 0.5)">
                            <g id="Search" transform="translate(-0.778 -0.778)">
                                <circle id="Ellipse_739" cx="8.989" cy="8.989" r="8.989" transform="translate(0.778 0.778)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                <path id="Line_181" d="M0,0,3.524,3.515" transform="translate(16.018 16.485)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                            </g>
                        </g>
                    </svg>
                </button>
                {/* <input type="search" name="search" placeholder=""/> */}
            </SearchInput>
        </SearchBox>
    )
}
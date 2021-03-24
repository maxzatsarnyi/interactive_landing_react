import styled from 'styled-components';



export const PaginationList = styled.ul`
    margin: 30px 3px 5px;
    padding: 0;
    list-style: none;
    text-align: center;
`;  

export const PaginationItem = styled.li`
    background-color: ${({isActive}) => (isActive ? '#286DBD' : '#E8F8FF')};
    margin-right: 15px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    border-radius: 50%;
    display: inline-block;
    
    :last-child{
        margin-right: 0;
    }
`;


import styled  from "styled-components";

export const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

    && .Add-user {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 850px;
        padding: 2rem 3%;
    }
    && .Add-user input {
        flex: 1;
        border: .1rem solid #454545;
        margin-right: 15px;
        padding: .8rem 1rem;
        outline: none;
    }
    && .Add-user button {
        padding: .8rem .5rem;
        background: rgb(255, 193, 149, 0.167);
        border: 0;
        font-weight: 600;
        margin-right: 1rem;
        cursor: pointer;
    }
    && .Add-user button.order {
        background: blue;
        color: #FFF;
    }
    && .list-user {
        width: 850px;
        margin: 0 1rem;
        background: #EEE;
        color: #000;
        padding: .5rem 0;
    }
    && .list-user ul {
        list-style: none;
    }
    && .list-user ul .name-area li {
        color: #454545;
        font-size: 20px;
        text-transform: capitalize;
    }
    && .name-area {
        padding: 0 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    && .name-area .btn-area {
        margin-right: 15px;
    }
    && .name-area .btn-area button {
        outline: none;
        border: none;
        background: rgb(255, 10, 49, 0.67);
        padding: .5rem 1rem;
        margin-left: 2rem;
        color: #FFF;
        cursor: pointer;
        font-weight: 600;
        font-size: 12px;
    }
    && .name-area .btn-area button.del {
        background: #FF0000;
    }
    && .name-area .btn-area button.order {
        background: blue;
    }
`;
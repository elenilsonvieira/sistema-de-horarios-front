import styled from 'styled-components';

export const Main = styled.div`
    padding: 5px;
    margin: 35px; /* Aumentei a margem para uma aparência mais espaçada */
    margin-top:  70px;
    width: 200px;
    height: fit-content;
    position: absolute;
    background-color: rgba( 0, 0, 0, 0.1);
    border: px solid #C2C2C2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adicionada uma sombra mais sutil */
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Alterado para auto para exibir a barra de rolagem apenas quando necessário */
    overflow-x: hidden;
    max-height: 80vh; /* Aumentei a altura máxima para melhorar a usabilidade */
    header {
        margin-bottom: 1em;
    }


    /* Estilizando a Barra de Rolagem */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(90, 200, 100, 1);         border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4; /* Cor de fundo da barra de rolagem */
        border-radius: 4px;
    }
`;

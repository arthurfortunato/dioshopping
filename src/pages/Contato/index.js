import {
    ButtonContainerStyled,
    ContainerStyled,
    InputStyled,
} from './styles';

import { useState } from 'react';
import { api } from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';

const Contatos = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');


    async function sendMessage(email, message) {
        await api.post('/message', {
            email: email,
            message: message
        })
    }

    async function salvar() {
        await sendMessage(
            email,
            message
        )
        setEmail('')
        setMessage('')
    }

    function handleSendMessage(event) {
        event.preventDefault()

        if (email.trim() === '') {
            toast.error('Digite o seu e-mail')
        } else if (message.trim() === '') {
            toast.error('Digite a sua mensagem')
        } else {
            toast.success('Mensagem enviada!')
        }
    }


    return (
        <ContainerStyled>
            <form onSubmit={handleSendMessage}>
                <h2>Dúvida sobre algum produto?  Por favor nos envie uma mensagem!</h2>
                <label>E-mail</label>
                <InputStyled
                    type="email"
                    placeholder="Insira o seu e-mail..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Mensagem</label>
                <InputStyled
                    type="text"
                    placeholder="Insira a sua mensagem..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <ButtonContainerStyled onClick={salvar} >
                    Enviar
                </ButtonContainerStyled>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </form>
        </ContainerStyled>
    )
}

export default Contatos;

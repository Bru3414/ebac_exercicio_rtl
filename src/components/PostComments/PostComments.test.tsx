import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<App/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    it('Teste para adicionar 2 comentários', () => {
        const { debug } = render(<App />)

        const fireEventInput = (valor: string) => {
            fireEvent.change(screen.getByTestId('campo-comentario'), {
                target : {
                    value: valor
                }
            })
            fireEvent.click(screen.getByTestId('btn-comentar'))
            expect(screen.getByText(valor)).toBeInTheDocument()
        }
        fireEventInput('teste')
        fireEventInput('teste2')
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
    })
    ;
});
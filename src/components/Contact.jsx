import * as C from '../home/styled'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
    name: yup.string().required('Seu nome é obrigatório'),
    email: yup.string().email('Digite um email válido!').required('Seu email é obrigatório!'),
    phone: yup.string().required("Este campo é obrigatório"),
    message: yup.string().required('Sua mensagem é obrigatória!'),
}).required();


export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(userData) {
        console.log(userData)
    }


    return (
        <C.Contact>
            <h1>Contato</h1>
            <div className='line'></div>
            <div className='principal-div-contact'>
                <form className='div-contact' onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder='Nome'  {...register("name", { required: true })} />
                    <span>{errors.name?.message}</span>

                    <input type="text" placeholder='Email'  {...register("email", { required: true })} />
                    <span>{errors.email?.message}</span>

                    <input type="number" placeholder='Telefone'  {...register("phone", { required: true })} />
                    <span>{errors.phone?.message}</span>

                    <textarea name="message" className='box-message' cols="30" rows="7" placeholder='Mensagem'  {...register("message", { required: true })} />
                    <span>{errors.message?.message}</span>
                    <button type='submit'>Enviar</button>
                </form>

                <div className='links-contact'>
                    <h2>Redes Sociais</h2>
                    <div className='line2'></div>
                    <div className='individual-contact'>
                        <C.Insta />
                        <a target='_blank' href="https://www.instagram.com/royalsparfums/">@royalsparfums</a>
                    </div>

                    <div className='individual-contact'>
                        <C.Face />
                        <a target='_blank' href="https://www.facebook.com/royalsparfums">Royals Parfums</a>
                    </div>

                    <div className='individual-contact'>
                        <C.Zap />
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=5541984501617&text=Olá Royals Parfums, gostaria de mais informações sobre os perfumes.">(41) 9-98450-1617 </a>
                    </div>

                </div>
            </div>
        </C.Contact>
    )
}
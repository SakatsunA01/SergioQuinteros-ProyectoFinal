import { useCartContext } from "../context/CartContext"
import { useForm } from "react-hook-form"

const Login = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {guardarDatos} = useCartContext()

    const onSubmits = (data)=>{
        guardarDatos(data)
    }

    return(
        <section className="login">
            <div className="login_cont">
                <h2>Registrate!</h2>
                <form onSubmit={handleSubmit(onSubmits)}>
                    <div className="login_inp">
                        <div>
                            <input 
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            {...register("nombre",{required:true})}
                            ></input>
                            {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
                        </div>
                        <div>
                            <input 
                            type="text"
                            name="telefono"
                            placeholder="Numero Telefonico"
                            {...register("telefono",{required:true})}
                            ></input>
                            {errors.telefono?.type === "required" && <span>telefono requerido</span>}
                        </div>
                        <div>
                            <input 
                            type="text"
                            name="email"
                            placeholder="Email"
                            {...register("email",{
                                required:true,
                                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                            })}
                            ></input>
                            {errors.Email?.type === "required" && <span>Email requerido</span>}
                            {errors.Email?.type === "pattern" && <span>El email deve incluir "@" ".com"</span>}
                        </div>
                        <div>
                            <input 
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            {...register("contraseña",{
                                required:true,
                                minLength:5
                            })}
                            ></input>
                            {errors.Contraseña?.type === "required" && <span>Contraseña requerido</span>}
                            {errors.Contraseña?.type === "minLength" && <span>Minimo 5 caracteres</span>}
                        </div>
                    </div>
                    <button type="submit">Iniciar</button>
                </form>
            </div>     
        </section>
    )
}

export default Login
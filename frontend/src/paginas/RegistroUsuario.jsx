import React from 'react';
import { useForm } from 'react-hook-form';
import { useUsuario } from '../contexto/UsuarioContext';

function RegistroUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { agregarUsuario } = useUsuario();

    const onSubmit = handleSubmit((data) => {
        agregarUsuario(data);
    });

    return (
        <div className='bg-gray-800 max-w-md p-10 rounded-md mx-auto mt-10'>
            <h2 className="text-2xl font-bold text-white mb-6">Registro de Usuario</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder='Rol Unico Tributario'
                    {...register("run", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.run && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="text"
                    placeholder='Nombre Completo'
                    {...register("nombreCompleto", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.nombreCompleto && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="text"
                    placeholder='Dirección'
                    {...register("direccion", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.direccion && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="text"
                    placeholder='Comuna'
                    {...register("comuna", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.comuna && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="text"
                    placeholder='Provincia'
                    {...register("provincia", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.provincia && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="text"
                    placeholder='Región'
                    {...register("region", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.region && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="date"
                    placeholder='Fecha de Nacimiento'
                    {...register("fechaNacimiento", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.fechaNacimiento && <span className="text-red-500">Este campo es requerido</span>}

                <select
                    {...register("sexo", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                >
                    <option value="">Seleccione sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.sexo && <span className="text-red-500">Este campo es requerido</span>}

                <input
                    type="email"
                    placeholder='Correo Electrónico'
                    {...register("correoElectronico", { required: true, pattern: /^\S+@\S+$/i })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.correoElectronico && <span className="text-red-500">Ingrese un correo electrónico válido</span>}

                <input
                    type="tel"
                    placeholder='Número Telefónico'
                    {...register("numeroTelefonico", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'
                />
                {errors.numeroTelefonico && <span className="text-red-500">Este campo es requerido</span>}

                <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full'>
                    Registrar Usuario
                </button>
            </form>  
        </div>
    );
}

export default RegistroUsuario;

function Formulario({ botao, eventoTeclado}) {
    return (
        <form>

            <input type='text' onChange = {eventoTeclado} placeholder="Marca" className="form-control" />
            <input type='text' onChange = {eventoTeclado} placeholder="Modelo" className="form-control" />
            <input type='text' onChange = {eventoTeclado} placeholder="Ano" className="form-control" />
            {
                botao

                    ?

                    <input type="button" value="cadastrar" className="btn btn-primary" />

                    :

                    <div>

                        <input type="button" value="remover" className="btn btn-danger" />
                        <input type="button" value="cancelar" className="btn btn-secondary" />
                        <input type="button" value="Alterar" className="btn btn-warning" />

                    </div>

            }
        </form>
    );
}

export default Formulario;
function Tabela({ vetor }) {
    return (
        <table className="table">

            <thead>

                <tr>

                    <th>@</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>

                </tr>

            </thead>

            {
                vetor.map((obj,indice) => (
                <tr key={indice}>

                    <td>{indice +1}</td>
                    <td>{obj.marca}</td>
                    <td>{obj.modelo}</td>
                    <td>{obj.ano}</td>
                    <td><button className="btn btn-sucess">Selecionar</button></td>

                </tr>
                ))
            }

        </table>
    );
}

export default Tabela;
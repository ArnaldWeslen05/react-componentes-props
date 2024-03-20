import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        // linha para o titulo
        <div className="continer border rounded mt-2">
            <div className="row borderbottom m-2">
                <h1 className="display-5 text-center">Seus pedidos</h1>
         </div>
            {/* linha para o primeiro pedido */}
        <div className='row'>
                {/*controle de responsividade*/}
            <div className='col-sm-8 col-md-6 m-2'>
                <div className='card'>
                        <div className='carde-header text-muted'>22/04/2021</div>
                    <div className='card-body d-flex'>
                          <div className='d-flex alig-items-center'>
                             <i className='fas fa-hdd fa-2x'></i>
                          </div>
                          {/* flex-grow 1 : tomar espaço remanescente */}
                          <div className='flex-grow-1 ms-2 border'>
                            <h4 className='text-center'>SSD</h4>
                            <p>SSD Kingston A400 - SATA</p>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
{/* linha para o segundo pedido pedido*/}
<div className="row">
    {/* controle de colunas para responsividade*/}
    <div className="col-sm-8 col-md-6 m-2">
        {/* cartão */}
        <div className="card">
                {/* cabeçalho do cartão */}
                <div className="card-header text-muted">20/04/2021</div>
            {/* corpo do cartão */}
            <div className="card-body d-flex">
                 <div className="d-flex align-items-center">
                    <i className="fas fa-book fa-2x"></i>
                 </div>
                {/* flex-grow 1: tomar espaço remanescente */}
                 <div className="flex-grow-1 ms-2 border">
                     <h4 className="text-center">Livro</h4>
                     <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                </div>
            </div>
        </div>
    </div>
 </div>

{/* linha para o terceiro pedido pedido*/}
<div className="row">
 	{/* controle de colunas para responsividade*/}
 	<div className="col-sm-8 col-md-6 m-2">
 		{/* cartão */}
 		<div className="card">
 			{/* cabeçalho do cartão */}
 			<div className="card-header text-muted">21/01/2021</div>
 		{/* corpo do cartão */}
 		<div className="card-body d-flex">
			 <div className="d-flex align-items-center">
 				<i className="fas fa-laptop fa-2x"></i>
 			</div>
 		{/* flex-grow 1: tomar espaço remanescente */}
 		<div className="flex-grow-1 ms-2 border">
 			    <h4 className="text-center">Notebook</h4>
 			    <p className="text-center">Notebook Dell - 8Gb - i5</p>
 		      </div>
 		    </div>
        </div>
    </div>
</div>



 </div>
  )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
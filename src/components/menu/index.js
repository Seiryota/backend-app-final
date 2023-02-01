import { useNavigate } from "react-router-dom";

const MenuComponent = ( { children } ) => {

    const navigate = useNavigate();


    return (
        <>
        <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <p class="navbar-brand text-white"  style={{ fontWeight: "bold" }} >Minha Aplicação Financeira</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item linkMenu" onClick={ () => navigate("/") } >
          <p class="nav-link active text-white" >Home</p>
        </li>
        <li class="nav-item linkMenu" onClick={ () => navigate("/inputs") }>
          <p class="nav-link active text-white" >Entradas</p>
        </li>
        <li class="nav-item linkMenu" onClick={ () => navigate("/outputs") }>
          <p class="nav-link active text-white" >Saídas</p>
        </li>
        <li class="nav-item linkMenu" onClick={ () => navigate("/users") }>
          <p class="nav-link active text-white" >Usuários</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div style={{ margin: "40px" }} > { children } </div>
</>
    )
};

export default MenuComponent;
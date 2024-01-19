const Nav = () => { //Lambda style of return, is more compact and cleaner
    import logoImg from '../sources/Co_Create_Logo_blue.png';

    <nav class="navbar navbar-expand-lg bg-success">
    
    <div class="container-fluid">
      <a class="CoCreate" href="#">
        <img src ="logoImg" alt="Logo" width="30" height="30">
        Home
        </a>
      
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Username</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  </nav>

}
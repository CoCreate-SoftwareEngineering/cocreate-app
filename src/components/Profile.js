import profileImg from '../sources/Darwizzy.jpg';
import { Link } from 'react-router-dom'
import logoImg from '../sources/Co_Create_Logo_blue.png';

const Profile = () => {
    return(

        <section style={{backgroundColor: '#eee' }}>
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/home"><img src={logoImg} alt="Home"
                      className="rounded-circle img-fluid" style={{width: '47px'}}></img></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                  </ol>
                </nav>
              </div>
            </div>
        
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img src={profileImg} alt="avatar"
                      className="rounded-circle img-fluid" style={{width: '150px'}}></img>
                    <h5 className="my-3">Darwin Nunez</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4"></p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary">Follow</button>
                      <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">GitHub.com</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg" style={{color: '#333333'}}></i>
                        <p className="mb-0">Microsoft.com</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{color: '#55acee;'}}></i>
                        <p className="mb-0">placeholder</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{color: '#ac2bac;'}}></i>
                        <p className="mb-0">placeholder</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg" style={{color: '#3b5998;'}}></i>
                        <p className="mb-0">placeholder</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Darwin Nunez</p>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Darwin@Nunez.com</p>
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">N/A</p>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">GitHub</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">N/A</p>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Microsoft Account</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">N/A</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                        </p>
                        <p className="mb-1" style={{fontsize: '.77rem;'}}>Web Design</p>
                        <div className="progress rounded" style={{height: '5px;'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Website Markup</p>
                        <div className="progress rounded" style={{height: '5px;'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '54%'}} aria-valuenow="72"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>One Page</p>
                        <div className="progress rounded" style={{height: '5px;'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '38%'}} aria-valuenow="89"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Mobile Template</p>
                        <div className="progress rounded" style={{height: '5px;'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '87%'}} aria-valuenow="55"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Backend API</p>
                        <div className="progress rounded mb-2" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '12%'}} aria-valuenow="66"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                        </p>
                        <p className="mb-1" style={{fontsize: '.77rem;'}}>Web Design</p>
                        <div className="progress rounded" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Website Markup</p>
                        <div className="progress rounded" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="72"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>One Page</p>
                        <div className="progress rounded" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="89"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Mobile Template</p>
                        <div className="progress rounded" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="55"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{fontsize: '.77rem;'}}>Backend API</p>
                        <div className="progress rounded mb-2" style={{width: '80%'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="66"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Profile;
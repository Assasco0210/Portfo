import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="d-flex">
              <div className="dropdown mr-1" style={{ position: 'relative', right: '150px' }}>
                <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                  Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <div className="col-8" style={{ position: 'relative', left: '400px' }}>
                Mon Portfolio
              </div>
              <div className="col" style={{ position: 'relative', left: '300px' }}>
                <h6><strong>+225 05 02 89 78 26</strong></h6>
              </div>
            </div>
          </div>
        </div>

        {/* Image et résumé */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-4">
            <img src="./P1050996.JPG" class="img-fluid" alt="Responsive image"/>
            </div>
            <div className="col-8" style={{ position: 'relative', top: '100px' }}>
              <h3><strong>ASSALE Pierre Pascal</strong></h3>
              <p className="para" style={{ size: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
          </div>
        </div>

        {/* Mes projets */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm" style={{ position: 'relative', left: '50px' }}>
              <h3>MES PROJETS</h3>
            </div>
            <div className="col-sm">

            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 mt-5">
          <div className="col mb-4">
            <div className="card">
            <img src="./Projet1.png" class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Projet bootstrap</h5>
                <p className="card-text">Reproduction de site avec bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="./Projet 4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Projet Javascrpit</h5>
                <p className="card-text">Reproduction d'un quiz avec Javascrpit</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="./Projet 3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Projet Jquery</h5>
                <p className="card-text">Reproduction de site avec Jquery</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="./Projet 2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Projet Flexbox</h5>
                <p className="card-text">Reproduction de site avec élément css Flexbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

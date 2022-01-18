import React from "react";

function Header() {
return (
    <div>
    <header>
        <div>
            <h1 style={{textAlign: "Center"}}>Recipe</h1>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link text-right" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-right" href="#">Features</a>
                </li>
            </ul>
            </div>
        </nav>
    </header>
    </div>
);
}

export default Header;

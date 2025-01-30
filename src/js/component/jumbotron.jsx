import React from "react";

function Jumbotron() {
    return (
        <div class="mx-5 mt-4 p-4  bg-secondary-subtle text-black rounded-2 jumbo">
            <div class="container-fluid py-5 text-start">
                <h1 class="display-4">A Warm Welcome!</h1>
                <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel faucibus nisi. Nam sit amet leo nec tortor pellentesque vestibulum. Suspendisse ac justo id lorem scelerisque pellentesque. Fusce rhoncus nibh id venenatis efficitur.</p>
                <button class="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    );
}
export default Jumbotron;
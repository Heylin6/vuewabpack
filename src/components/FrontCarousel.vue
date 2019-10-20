<template>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" >
                <img class="bd-placeholder-img" height="100%" src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1903&&h=512&q=80" alt="xmas_orchestra">
                <svg class="bd-placeholder-img" width="100%" height="100%" 
                        xmlns="http://www.w3.org/2000/svg" 
                        preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption text-left">
                    <h1 style="font-size:1.2cm;font-weight:bold;">一同成長</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p>
                        <router-link class="btn btn-lg btn-primary" to="/membercart" > 
                         查看詳情
                        </router-link>                        
                    </p>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                <img class="bd-placeholder-img" height="100%" src="https://images.unsplash.com/photo-1486589503730-6b8cb43a2d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1903&h=512&q=80" alt="xmas_orchestra">
                <svg class="bd-placeholder-img" width="100%" height="100%" 
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption">
                    <h1 style="font-size:1.2cm;font-weight:bold;">人生催燦的當下</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p>
                        <router-link class="btn btn-lg btn-primary" to="/membercart" > 
                         查看詳情
                        </router-link>                        
                    </p>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                <img class="bd-placeholder-img" height="100%" src="https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1903&h=512&q=80" alt="xmas_orchestra">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption text-right">
                    <h1 style="font-size:1.2cm;font-weight:bold;">無可取代的羈絆</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                     <p>
                        <router-link class="btn btn-lg btn-primary" to="/membercart" > 
                         我想知道
                        </router-link>                        
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
</template>
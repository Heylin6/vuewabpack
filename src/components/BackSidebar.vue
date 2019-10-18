<template>
    <div>
         <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
         <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>管理者</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
               <router-link class="nav-link" to="/admin/products" >
                     <i class="fab fa-product-hunt"></i>
                     <span data-feather="file-text"></span>
                      產品列表
               </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">            
               <router-link class="nav-link" to="/admin/orders" >
                     <i class="fas fa-border-style"></i>
                     <span data-feather="file-text"></span>
                      訂單列表
               </router-link>
             </a>              
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
               <router-link class="nav-link" to="/customerorder" >
                      <i class="fas fa-shopping-cart"></i>
                     <span data-feather="file-text"></span>
                      模擬訂單
               </router-link>
            </a>
          </li>        
        </ul>
      </div>
    </nav>
    </div>
</template>
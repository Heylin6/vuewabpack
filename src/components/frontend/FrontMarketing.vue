<template>
    <div class="container marketing">

           <hr class="featurette-divider">
            <section class="action">
              <div class="container">
                <div class="left-text hidden-xs">
                  <h2>我們已協助多個團隊成長</h2>
                    <p>
                      <br>
                      <em>對象包含在學學生，社群團體，企業部門等等。</em>
                      <br><br>
                      或許令人難以置信，我們教的學程適用於各種場合，所有年齡層，甚至不同　族群，
                      人生充滿了各種變化，但有些事情總會有個脈絡可循，
                      我們團隊帶給你的，不只是技能，更是一樁心法與思維，讓您遇到各種團體場合能夠　　　無往不利。
                    </p>
                </div>
                <div class="right-image hidden-xs"></div>
              </div>
          </section>
           <!-- START THE FEATURETTES -->
           <hr class="featurette-divider">
           <FrontDivider></FrontDivider>
           <hr class="featurette-divider">
           <FrontTeacher></FrontTeacher>           
           <hr class="featurette-divider">
                    <div data-v-8ae33138="" class="d-flex justify-content-center">
                              <div class="py-5">
                                <h5 class="mb-4">訂閱我們取得最新優惠與活動特訊</h5> 
                                      <div class="input-group">
                                            <input type="text" 
                                              aria-label="搜尋商品" 
                                              aria-describedby="btnGroupAddon" 
                                              placeholder="E-mail" 
                                              class="form-control" 
                                              aria-required="true" 
                                              aria-invalid="false"> 
                                            <div class="input-group-prepend">
                                              <button data-v-06518fa6="" class="rounded-right btn btn-heylin"><!----> 
                                                  <span data-v-06518fa6="" class=""> 
                                                    訂閱
                                                  </span>
                                              </button>
                                            </div>
                                      </div>
                              </div>
                    </div>
           <hr class="featurette-divider">
    </div>
</template>
<script>
import FrontTeacher from './FrontTeacher';
import FrontDivider from './FrontDivider';

export default {
      name: 'FrontMarketing',
      components:{
        FrontTeacher,
        FrontDivider,
  },
}
</script>
var renkler = ['green', 'red', 'yellow', 'blue'];
var dereje = 0;
var bashlady = false;
var oyunun_belligi = [];
var oyunchynyn_basan_belligi = [];
$(document).keypress(function(){
  if (!bashlady) {
    indiki_yzygiderlik();
    bashlady = true;
  }
});
function indiki_yzygiderlik(){
  oyunchynyn_basan_belligi = [];
  dereje++;
  $('#bashy').text('Dereje '+dereje);
  var totan_san = Math.floor(Math.random()*4);
  totan_renk = renkler[totan_san];
  oyunun_belligi.push(totan_renk);
  $("#" + totan_renk).fadeIn(100).fadeOut(100).fadeIn(100);/////////////////////
  ses_chykar(totan_renk);
}
function ses_chykar(at){
  new Audio(at + ".mp3").play();
}
$('.btn').click(function(){
  var oyunchynyn_saylan_renki = $(this).attr('id');
  oyunchynyn_basan_belligi.push(oyunchynyn_saylan_renki);
  ses_chykar(oyunchynyn_saylan_renki);
  animasiya_et(oyunchynyn_saylan_renki);
  jogaby_barla(oyunchynyn_basan_belligi.length-1);
});
function animasiya_et(renk){
  $('#'+renk).addClass('basyldy');
  setTimeout(function(){
    $('#'+renk).removeClass('basyldy');
  },100);
}
function jogaby_barla(shuwagtky_dereje){
  if (oyunun_belligi[shuwagtky_dereje]===oyunchynyn_basan_belligi[shuwagtky_dereje]) {
    if (oyunun_belligi.length===oyunchynyn_basan_belligi.length) {
      setTimeout(function(){
        indiki_yzygiderlik();
      },400);
    }
  }
  else {
    ses_chykar('wrong');
    $('body').addClass('yalnysh');
    $('#bashy').text('Oyun gutardy, Tazeden bashlamak ucin islendik knopka basyn');
    setTimeout(function(){
      $('body').removeClass('yalnysh');
    },200);
    tazeden();
  }
}
function tazeden(){
  dereje = 0;
  oyunun_belligi = [];
  bashlady = false;
}

import React from "react";

import PersonCard from "./PersonCard.jsx";
import Grid from "@material-ui/core/Grid";

function Ekip() {
  return (
    <div className="Squeezer">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <PersonCard image="Ekip/ak.jpg" name="Altan Karabulut" job= "Mimar" text="1968 Yılında Çarşamba’da doğdu. Çarşamba Nuri Pamir İlkokulu, Çarşamba Ortaokulu ve Çarşamba Lisesinde okudu. 1990 Yılında KTÜ Mimarlık Bölümü’nden mezun oldu. <br> Önce Çarşamba’da (1990-1992), daha sonra ise Samsun’da kendisine ait serbest mimarlık ofisinde (Promega Mimarlık), proje üretimi ve uygulama hizmeti vermektedir.
<br> CHP Çarşamba İlçe Başkan yardımcılığı, Çarşamba Belediyesi Meclis üyeliği görevlerinde bulundu. 2019 Yerel seçimlerde CHP’den Çarşamba Belediye Başkan adayı oldu.
Yerel mimarlık, kırsal mimari, kent ve yaşam konularında araştırmalar ve arşiv çalışmaları yapan Karabulut’un 2004 yılında yayınlanmış ‘Memleketim Çarşamba’ isimli bir kitabı bulunmaktadır.
<br> 1993 yılında Leyla Özdemir’le evlenen Karabulut’un, Atakan (İç Mimar) ve Kıvanç (Lise öğrencisi) isminde iki çocukları bulunmaktadır.
  <br> <br> Mimari Anlayışı: <br>
Özgünlük, özgürlük, vefa, toprak, asalet, zarafet, sadelik, yerellik, estetik, esneklik gibi kavramlar mimari anlayışını oluşturur. Ona göre mimarlık; yerellik ve zekanın estetikle harmanlandığı bir ruhtur. Bir mimari ürün (tasarım) yerel olmalı, estetik ve esnek olmalı ve içinde zeka barındırmalıdır.

" key = "1"/>
        <PersonCard image="Ekip/lk.jpg" name="Leyla Karabulut" job= "Teknik Ressam" text="1971 Yılında Osmancık’ta doğdu. Osmancık İlkokulu, Samsun Cumhuriyet Lisesi Orta bölümü ve Atakum Meslek Lisesi Yapı Ressamlığı bölümünden mezun oldu (1987). Samsun’da Remzi Parmak Mimarlık Ofisinde çalıştı (1987-1992) ve daha sonra kısa bir dönem Samsun’da kendi ofisini açtı. 1993 yılından itibaren eşi Mimar Altan Karabulut’la birlikte serbest mimarlık ofisinde çalışmaya devam etti.
Profesyonel olarak yağlı boya resimler de yapan Karabulut’un Atakan ve Kıvanç isminde iki çocuğu bulunmaktadır.
" key = "2"/>
        <PersonCard image="Ekip/atk.jpg" name="Atakan Karabulut" job= "İç Mimar" text="1995 Yılında Samsun’da doğdu. Samsun Atakum Denizevleri İlköğretim Okulu ve Cumhuriyet Lisesi’nde okudu. Kıbrıs Doğu Akdeniz Üniversitesi İç Mimarlık Bölümü’nden mezun oldu (2018). <br> İlkokul öğretmeni Erhan Bey’in özendirmesiyle başlayan tiyatro ve sinema sevgisi, tüm eğitim hayatı boyunca katlanarak devam etti. Okul tiyatrolarında ve en son olarak Üniversite tiyatrosunda birçok oyunda görev aldı. Üniversite son sınıfta sinema eğitimi aldı. Müjdat Gezen Tiyatro Okulu’nda Kamera önü oyunculuk eğitimi aldı (2018-2019). Müjdat Gezen’in yazıp yönetip oynadığı ve bir çok önemli oyuncunun oynadığı ‘Pera Müzikali’nde görev aldı.
Senaristlik, oyunculuk ve yönetmenlik konusunda her geçen gün kendisini geliştirme amacında olan Atakan Karabulut’un birçok kısa filmi bulunmaktadır. Tüm üretimlerini kendisine ait ‘Cinek Film’ de yayınlamaktadır.
 <br> <br>Oynadığı tiyatro oyunları (ve yıllar): <br>
2014 - Othello <br>
2015 - Yedi Kocalı Hürmüz <br>
2015 - Hastalık Hastası <br>
2016 - Anna Karenina <br>
2016- Rumuz Goncagül <br>
2019 - Pera Müzikali (Müjdat Gezen Tiyatrosu) <br>
 <br> <br>
Kısa filmleri (ve yıllar): <br>
2015 - Seyyah <br>
2017 - Karanlıkta Kalan Hikayeler <br>
2017 - Çıkış <br>
2017 - Kaçış <br>
2017 - Beklenmedik Olaylar <br>
2018 - Kaçış -2 <br>
2018 - Beklenmedik Olaylar -2 <br>
2018 - Sessizler Köyü <br>
2018 - Onüç <br>
2019 - Yarın  <br>

" key = "3"/>
      </Grid>
    </div>
  );
}

export default Ekip;

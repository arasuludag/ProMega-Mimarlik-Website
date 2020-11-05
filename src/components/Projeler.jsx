import React from "react";

import Grid from "@material-ui/core/Grid";

import Card from "./Card.jsx";

function Projeler() {
  return (
    <div className="Projects">
    <div className="CardHolder Squeezer">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Card
          image={["PROMEGA  PROJELER/1. OMÜ-HAVZA REHABİLİTASYON MERKEZİ/havza 3d.jpg", "PROMEGA  PROJELER/1. OMÜ-HAVZA REHABİLİTASYON MERKEZİ/render_3.jpg"]}
          title="OMÜ Rehabi̇li̇tasyon Merkezi̇"
          location="Havza"
          key = "1"
        />

        <Card
          image={["PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R1-İ.jpg", "PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R2-İ.jpg", "PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R3-İ.jpg", "PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R4-İ.jpg", "PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R5-İ.jpg", "PROMEGA  PROJELER/2. ÇINARLIK MERKEZ CAMİİ/R6-İ.jpg"]}
          title="Çınarlık Merkez Cami̇i̇"
          key = "2"
        />

        <Card
          image={["PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/1.jpg", "PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/2.jpg", "PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/3.jpg", "PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/4.jpg", "PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/7.jpg", "PROMEGA  PROJELER/3. OMÜ MÜHENDİSLİK FAKÜLTESİ EK BİNA/8.jpg"]}
          title="OMÜ Mühendi̇sli̇k Fakültesi̇ Ek Bi̇na"
          key = "3"
        />

        <Card
          image={["PROMEGA  PROJELER/4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ/1-İDARİ BİNA-1.jpg", "PROMEGA  PROJELER/4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ/1-İDARİ BİNA-3.jpg", "PROMEGA  PROJELER/4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ/1-İDARİ BİNA-4.jpg", "PROMEGA  PROJELER/4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ/2-GENEL GÖRÜNÜŞ-6.jpg", "PROMEGA  PROJELER/4. KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ/KARAYOLLARI 7. BÖLGE MÜDÜRLÜĞÜ TESİSLERİ PROJESİ.jpg"]}
          title="Karayolları 7. Bölge Müdürlüğü Tesi̇sleri̇ Projesi̇"
          key = "4"
        />

        <Card
          image={["PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/1.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/2.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/3.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/4.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/5.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/6.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/7.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/8.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/9.jpg", "PROMEGA  PROJELER/5. ILGAZ DORUK OTEL-ÇANKIRI/10.jpg", ]}
          title="Ilgaz Doruk Otel"
          location="Çankırı"
          key = "5"
        />

        <Card
          image={["PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/Cephe 1.jpg", "PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/Banyo.jpg", "PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/yatak odası.jpg", "PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/Cephe 2.jpg", "PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/Mutfak.jpg", "PROMEGA  PROJELER/6. ACAR YÜKSEK YAPI-ATAKUM/Salon.jpg"]}
          title="Acar Yüksek Yapı"
          location="Atakum"
          key = "6"
        />

        <Card
          image={["PROMEGA  PROJELER/7. KAYA APARTMANI - HAVZA/1.jpg", "PROMEGA  PROJELER/7. KAYA APARTMANI - HAVZA/2.jpg", "PROMEGA  PROJELER/7. KAYA APARTMANI - HAVZA/3.jpg"]}
          title="Kaya Apartmanı"
          location="Havza"
          key = "7"
        />

        <Card
          image={["PROMEGA  PROJELER/8. HAVZA GÖBEÇOĞLU DEĞİRMEN-KAFETERYA REKONSTRÜKSİYON PROJESİ/1.jpg", "PROMEGA  PROJELER/8. HAVZA GÖBEÇOĞLU DEĞİRMEN-KAFETERYA REKONSTRÜKSİYON PROJESİ/2.jpg", "PROMEGA  PROJELER/8. HAVZA GÖBEÇOĞLU DEĞİRMEN-KAFETERYA REKONSTRÜKSİYON PROJESİ/3.jpg"]}
          title="Göbeçoğlu Deği̇rmen - Kafeterya Rekonstrüksi̇yonu"
          location="Havza"
          key = "8"
        />

        <Card
          image={["PROMEGA  PROJELER/9. EVİN OTEL - ÇARŞAMBA/1.jpg", "PROMEGA  PROJELER/9. EVİN OTEL - ÇARŞAMBA/2.jpg", "PROMEGA  PROJELER/9. EVİN OTEL - ÇARŞAMBA/3.jpg"]}
          title="Evi̇n Otel"
          location="Çarşamba"
          key = "9"
        />

        <Card
          image={["PROMEGA  PROJELER/10. KAYAN AİLE APARTMANI - HAVZA/1.jpg", "PROMEGA  PROJELER/10. KAYAN AİLE APARTMANI - HAVZA/2.jpg"]}
          title="Kayan Ai̇le Apartmanı"
          location="Havza"
          key = "10"
        />

        <Card
          image={["PROMEGA  PROJELER/11. MUSA AKGÜL - GAZİ ÖCAL VİLLARI TERME/1.jpg", "PROMEGA  PROJELER/11. MUSA AKGÜL - GAZİ ÖCAL VİLLARI TERME/2.jpg", "PROMEGA  PROJELER/11. MUSA AKGÜL - GAZİ ÖCAL VİLLARI TERME/3.jpg"]}
          title="Musa Akgül - Gazi̇ Öcal Vi̇lları"
          location="Terme"
          key = "11"
        />

        <Card
          image={["PROMEGA  PROJELER/12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME/render1.jpg", "PROMEGA  PROJELER/12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME/havuz-3D2.jpg", "PROMEGA  PROJELER/12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME/render2.jpg", "PROMEGA  PROJELER/12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME/render3.jpg", "PROMEGA  PROJELER/12. O. CENGİZ VE HİSSEDARLARI APARTMANI - TERME/render7.jpg"]}
          title="O. Cengi̇z ve Hi̇ssedarları Apartmanı"
          key = "12"
        />

        <Card
          image={["PROMEGA  PROJELER/A. KAYA APT. - HAVZA/Aydın Kaya - 1.jpg", "PROMEGA  PROJELER/A. KAYA APT. - HAVZA/Aydın Kaya - 2.jpg", "PROMEGA  PROJELER/A. KAYA APT. - HAVZA/Plan.jpg"]}
          title="A. Kaya Apartmanı"
          location="Havza"
          key = "13"
        />

        <Card
          image={["PROMEGA  PROJELER/ACAR APT. - HAVZA/image (1).jpeg", "PROMEGA  PROJELER/ACAR APT. - HAVZA/image (2).jpeg", "PROMEGA  PROJELER/ACAR APT. - HAVZA/image (3).jpeg", "PROMEGA  PROJELER/ACAR APT. - HAVZA/image.jpeg", "PROMEGA  PROJELER/ACAR APT. - HAVZA/plan_1.jpg"]}
          title="Acar Apartmanı"
          location="Havza"
          key = "14"
        />

        <Card
          image={["PROMEGA  PROJELER/AMAZON APT. - TERME/Musa - 1.jpg", "PROMEGA  PROJELER/AMAZON APT. - TERME/Musa - 2.jpg", "PROMEGA  PROJELER/AMAZON APT. - TERME/Musa - 3.jpg", "PROMEGA  PROJELER/AMAZON APT. - TERME/Musa - Plan.jpg"]}
          title="Amazon Apartmanı"
          location="Terme"
          key = "15"
        />

        <Card
          image={["PROMEGA  PROJELER/KAHYALAR İŞ MERKEZİ - TEKKEKÖY/KA50.jpg", "PROMEGA  PROJELER/KAHYALAR İŞ MERKEZİ - TEKKEKÖY/kyeni20.jpg"]}
          title="Kayalar İş Merkezi"
          location="Terme"
          key = "16"
        />

        <Card
          image={["PROMEGA  PROJELER/KAYAN SİTESİ - HAVZA/1 (2).jpg", "PROMEGA  PROJELER/KAYAN SİTESİ - HAVZA/2.jpg", "PROMEGA  PROJELER/KAYAN SİTESİ - HAVZA/3.jpg", "PROMEGA  PROJELER/KAYAN SİTESİ - HAVZA/4.jpg"]}
          title="Kayan Sitesi"
          location="Havza"
          key = "17"
        />

        <Card
          image={["PROMEGA  PROJELER/M. ŞAHİN - R. ACAR APT. - HAVZA/1.jpg", "PROMEGA  PROJELER/M. ŞAHİN - R. ACAR APT. - HAVZA/2.jpg", "PROMEGA  PROJELER/M. ŞAHİN - R. ACAR APT. - HAVZA/Ramazan Acar - Musa Şahin.jpg"]}
          title="M. Şahin - R. Acar Apartmanı"
          location="Havza"
          key = "18"
        />

        <Card
          image={["PROMEGA  PROJELER/R. ACAR APT. - HAVZA/1.jpg", "PROMEGA  PROJELER/R. ACAR APT. - HAVZA/Ramazan Acar 155-14 - Plan.jpg"]}
          title="R. Acar Apartmanı"
          location="Havza"
          key = "19"
        />

        <Card
          image={["PROMEGA  PROJELER/SİNA ÖZEL EĞT. MERKEZİ - TERME/1 (2).jpg", "PROMEGA  PROJELER/SİNA ÖZEL EĞT. MERKEZİ - TERME/2.jpg", "PROMEGA  PROJELER/SİNA ÖZEL EĞT. MERKEZİ - TERME/3.jpg", "PROMEGA  PROJELER/SİNA ÖZEL EĞT. MERKEZİ - TERME/4.jpg", "PROMEGA  PROJELER/SİNA ÖZEL EĞT. MERKEZİ - TERME/5.jpg"]}
          title="Sina Özel Eğitim Merkezi"
          location="Terme"
          key = "20"
        />

        <Card
          image={["PROMEGA  PROJELER/Y. BALABAN APT. - ALAÇAM/Yılmaz Balaban Siyah 1.jpg", "PROMEGA  PROJELER/Y. BALABAN APT. - ALAÇAM/Yılmaz Balaban Siyah 2.jpg", "PROMEGA  PROJELER/Y. BALABAN APT. - ALAÇAM/Yılmaz Balaban Siyah 3.jpg"]}
          title="Y. Balaban Apartmanı"
          location="Alaçam"
          key = "21"
        />

        <Card
          image={["PROMEGA  PROJELER/Y. KARAOĞLAN APT. - HAVZA/1 (2).jpg", "PROMEGA  PROJELER/Y. KARAOĞLAN APT. - HAVZA/2.jpg", "PROMEGA  PROJELER/Y. KARAOĞLAN APT. - HAVZA/3.jpg", "PROMEGA  PROJELER/Y. KARAOĞLAN APT. - HAVZA/Yiğit Karaoğlan - Plan.jpg"]}
          title="Y. Karaoğlan Apartmanı"
          location="Havza"
          key = "22"
        />

      </Grid>
    </div>
    </div>
  );
}

export default Projeler;

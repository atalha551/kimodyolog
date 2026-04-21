const fs = require('fs');

const s21_100 = [
        {
            n: 21,
            q: "Sağlıklı bir kulakta, orta kulak sisteminin (zar ve kemikçikler) sağladığı toplam amplifikasyon (yükseltme) oranı yaklaşık olarak kaça kaçtır?",
            options: ["1:1", "10:1", "22:1", "50:1"],
            correctIndex: 2,
            exp: "Kulak zarının oval pencereye alan oranı (yaklaşık 17:1) ve kemikçiklerin kaldıraç etkisi (1.3:1) çarpıldığında sistem sesi yaklaşık 22 kat (22:1) güçlendirir."
        },
        {
            n: 22,
            q: "Rinne testi, bir diyapazon yardımıyla hava yolu ve kemik yolu işitmesini karşılaştırır. Sensörinöral işitme kaybı olan bir hastada Rinne testi sonucu nasıldır?",
            options: ["Rinne Negatif (Kemik > Hava)", "Rinne Pozitif (Hava > Kemik)", "Eşit (Hava = Kemik)", "Ses hiç duyulmaz"],
            correctIndex: 1,
            exp: "Sensörinöral kayıpta hem hava hem kemik yolu aynı oranda düştüğü için doğal oran korunur ve hava yolu iletimi kemik yolundan daha iyi kalmaya devam eder (Rinne Pozitif)."
        },
        {
            n: 23,
            q: "Orta kulak kaslarından olan Musculus Tensor Tympani hangi kranial sinir tarafından uyarılır?",
            options: ["Nervus Facialis (VII)", "Nervus Trigeminus (V)", "Nervus Vagus (X)", "Nervus Vestibulocochlearis (VIII)"],
            correctIndex: 1,
            exp: "Tensor tympani kası, çiğneme kaslarını da innerve eden 5. kranial sinir (Trigeminal sinir) tarafından uyarılır."
        },
        {
            n: 24,
            q: "İç kulaktaki endolenf sıvısının elektriksel potansiyeli (Endokoklear potansiyel) yaklaşık olarak kaç milivolttur (mV)?",
            options: ["-40 mV", "0 mV", "+80 mV", "+120 mV"],
            correctIndex: 2,
            exp: "Endolenf, vücuttaki en yüksek pozitif dinlenim potansiyeline sahip sıvılardan biridir ve yaklaşık +80 mV değere sahiptir."
        },
        {
            n: 25,
            q: "Havadaki sesin yayılma hızı ortalama bir sıcaklıkta (yaklaşık 20 derece) saniyede kaç metredir?",
            options: ["140 m/s", "343 m/s", "1480 m/s", "300.000 m/s"],
            correctIndex: 1,
            exp: "Sesin havadaki hızı oda sıcaklığında saniyede yaklaşık 343 metre (veya 340 m/s) olarak kabul edilir."
        },
        {
            n: 26,
            q: "Ses dalgalarının bir saniyede kat ettiği fiziksel mesafeye (dalga boyu) ulaşmak için hangi formül kullanılır?",
            options: ["Hız x Frekans", "Frekans / Hız", "Hız / Frekans", "Genlik x Zaman"],
            correctIndex: 2,
            exp: "Dalga boyu (λ), sesin hızı (c) bölü frekans (f) formülü ile hesaplanır."
        },
        {
            n: 27,
            q: "Ters Kare Kanunu'na (Inverse Square Law) göre, ses kaynağından olan uzaklık iki katına çıktığında sesin şiddeti (SPL) kaç desibel düşer?",
            options: ["3 dB", "6 dB", "10 dB", "12 dB"],
            correctIndex: 1,
            exp: "Serbest bir alanda mesafenin iki katına çıkması, ses basıncının yarıya düşmesine neden olur, bu da -6 dB'lik bir kayba eşittir."
        },
        {
            n: 28,
            q: "İç tüy hücreleri (Inner Hair Cells) koklea boyunca anatomik olarak nasıl bir dizilim gösterir?",
            options: ["Tek sıra halinde", "Üç sıra halinde", "Beş sıra halinde", "Dağınık halde"],
            correctIndex: 0,
            exp: "İç tüy hücreleri baziler membran boyunca tek bir sıra halinde (yaklaşık 3500 adet) dizilirken, dış tüy hücreleri 3-4 sıra halindedir."
        },
        {
            n: 29,
            q: "İç kulakta yer alan ve başın dönme (açısal ivmelenme) hareketlerini algılayan yapılar aşağıdakilerden hangisidir?",
            options: ["Utrikül", "Sakkül", "Yarım Daire Kanalları", "Kohlea"],
            correctIndex: 2,
            exp: "Üç adet yarım daire kanalı (anterior, posterior, horizontal) başın dönme hareketlerini algılar."
        },
        {
            n: 30,
            q: "Yerçekimine ve doğrusal (lineer) ivmelenmeye (örneğin asansörde yükselmeye) duyarlı olan vestibüler organlar hangileridir?",
            options: ["Ampulla ve Kupula", "Utrikül ve Sakkül", "Korti organı ve Maküla", "Helikotrema ve Promontoryum"],
            correctIndex: 1,
            exp: "Utrikül yatay, sakkül ise dikey lineer ivmelenmeyi algılayan otolitik organlardır."
        },
        {
            n: 31,
            q: "Otolit (kalsiyum karbonat kristalleri) adı verilen yapılar iç kulaktaki hangi duyu epitelinin üzerinde bulunur?",
            options: ["Korti organı", "Maküla", "Krista ampullaris", "Striya vaskülaris"],
            correctIndex: 1,
            exp: "Otolitler, utrikül ve sakkülde bulunan 'maküla' adlı duyu epitelinin üzerindeki jelatinöz zarda yer alırlar."
        },
        {
            n: 32,
            q: "Saf Ses Ortalaması (PTA - Pure Tone Average) hesaplanırken klinikte genellikle hangi frekanslardaki işitme eşiklerinin aritmetik ortalaması alınır?",
            options: ["250, 500, 1000 Hz", "500, 1000, 2000 Hz", "1000, 2000, 4000 Hz", "2000, 4000, 8000 Hz"],
            correctIndex: 1,
            exp: "Konuşma seslerinin en yoğun olduğu 500, 1000 ve 2000 Hz frekanslarındaki eşiklerin ortalaması alınarak PTA hesaplanır."
        },
        {
            n: 33,
            q: "Klinik bir odyogramda, SAĞ kulak KEMİK yolu işitme eşikleri (maskesiz) hangi sembolle gösterilir?",
            options: ["< (Sola açık açı)", "> (Sağa açık açı)", "[ (Sola açık köşeli ayraç)", "] (Sağa açık köşeli ayraç)"],
            correctIndex: 0,
            exp: "Uluslararası standartlarda sağ kulak maskesiz kemik yolu < sembolü ile, sol kulak ise > sembolü ile gösterilir."
        },
        {
            n: 34,
            q: "Santral işitme yollarının talamus'ta bulunan ve işitsel bilgiyi kortekse iletmeden önceki son durağı olan yapı hangisidir?",
            options: ["İnferior Kollikulus", "Lateral Lemniskus", "Medial Genikulat Cisim", "Koklear Nükleus"],
            correctIndex: 2,
            exp: "Medial genikulat cisim (MGB), talamusta yer alır ve işitme sisteminin en önemli röle istasyonlarından biridir."
        },
        {
            n: 35,
            q: "Fizikte aynı frekans ve genliğe sahip iki ses dalgası, tamamen aynı fazda (0 derece faz farkı) üst üste binerse ne tür bir girişim (interference) oluşur?",
            options: ["Yıkıcı girişim (Sessizlik)", "Yapıcı girişim (Şiddet artışı)", "Durağan dalga (Standing wave)", "Kırınım (Diffraction)"],
            correctIndex: 1,
            exp: "İki dalga aynı fazda (tepe tepeye, çukur çukura) karşılaştığında genlikleri toplanır ve sesin şiddeti artar (yapıcı girişim)."
        },
        {
            n: 36,
            q: "Dış kulak yolu ile orta kulağı birbirinden ayıran anatomik yapı hangisidir?",
            options: ["Oval pencere", "Yuvarlak pencere", "Membrana tympani (Kulak zarı)", "Östaki borusu"],
            correctIndex: 2,
            exp: "Membrana tympani (kulak zarı), dış kulak yolunun bittiği ve orta kulak boşluğunun başladığı anatomik sınırdır."
        },
        {
            n: 37,
            q: "Sesin bir ortamdan diğerine (örneğin havadan suya) geçerken karşılaştığı dirence ne ad verilir?",
            options: ["Akustik rezonans", "Akustik empedans", "Akustik kırınım", "Akustik yansıma"],
            correctIndex: 1,
            exp: "Empedans, bir sistemin enerji aktarımına karşı gösterdiği toplam dirençtir."
        },
        {
            n: 38,
            q: "Kokleanın apeksinde (tepe noktasında) scala vestibuli ile scala tympani'nin birleştiği ve perilenfin geçiş yaptığı dar deliğe ne ad verilir?",
            options: ["Helikotrema", "Promontoryum", "Modiolus", "Kupula"],
            correctIndex: 0,
            exp: "Helikotrema, koklear kanalın en ucunda yer alan ve iki perilenfatik boşluğu birbirine bağlayan yapıdır."
        },
        {
            n: 39,
            q: "Kokleanın merkezinde yer alan, işitme siniri liflerinin içinden geçtiği kemik eksene ne ad verilir?",
            options: ["Modiolus", "Habenula perforata", "Osseoz spiral lamina", "Helikotrema"],
            correctIndex: 0,
            exp: "Modiolus, kokleanın etrafına sarıldığı süngerimsi kemik yapıdaki merkezi sütundur."
        },
        {
            n: 40,
            q: "Dünya Sağlık Örgütü (WHO) sınıflamasına göre, 41-55 dB HL arasındaki bir işitme eşiği hangi derece işitme kaybı olarak adlandırılır?",
            options: ["Hafif derece", "Orta derece", "İleri derece", "Çok ileri derece"],
            correctIndex: 1,
            exp: "41-55 dB HL arası orta derece (moderate) işitme kaybı olarak sınıflandırılır."
        },
        {
            n: 41,
            q: "Hem hava yolunda hem de kemik yolunda işitme eşiklerinin normal sınırların dışında (yüksek) olduğu, ancak aralarında 15 dB'den fazla fark (Air-Bone Gap) bulunduğu işitme kaybı tipine ne ad verilir?",
            options: ["İletim tipi işitme kaybı", "Sensörinöral tip işitme kaybı", "Mikst (Karma) tip işitme kaybı", "Fonksiyonel işitme kaybı"],
            correctIndex: 2,
            exp: "Mikst tip kayıplarda hem iç kulakta (sensörinöral) hasar vardır hem de dış/orta kulakta (iletim) mekanik bir engel bulunur."
        },
        {
            n: 42,
            q: "İşitme cihazı kullanımında veya odyolojik testlerde kullanılan, sesi hava yoluyla değil doğrudan kafatası kemiklerini titreştirerek ileten alete (transdüsere) ne ad verilir?",
            options: ["Supra-aural kulaklık", "İnsert kulaklık", "Kemik vibratör (Bone oscillator)", "Hoparlör"],
            correctIndex: 2,
            exp: "Kemik vibratörü, genellikle mastoid çıkıntıya yerleştirilerek sesi doğrudan iç kulağa iletir."
        },
        {
            n: 43,
            q: "Kulak zarına gelen bir ses dalgasının zarın tamamını eşzamanlı olarak titreştirmemesi durumuna fiziksel olarak ne ad verilir?",
            options: ["Tonotopi", "Modal titreşim (Complex vibration)", "Doğrusal olmayan distorsiyon", "Empedans uyumu"],
            correctIndex: 1,
            exp: "Kulak zarı yüksek frekanslarda bütün olarak değil, farklı bölgeleri (modları) farklı şekillerde titreşerek karmaşık bir hareket yapar."
        },
        {
            n: 44,
            q: "Odyolojide sıklıkla kullanılan bir terim olan 'Bilateral' kelimesinin tıbbi anlamı nedir?",
            options: ["Tek taraflı", "İki taraflı (Her iki kulakta)", "Sonradan oluşan", "Doğuştan gelen"],
            correctIndex: 1,
            exp: "Bilateral her iki tarafı/kulağı etkileyen demektir, tek taraflı olan durumlara 'Unilateral' denir."
        },
        {
            n: 45,
            q: "Hangi anatomik yapı orta kulak boşluğunun (cavum tympani) tavanını oluşturur ve orta kulağı beyin zarından (dura mater) ayırır?",
            options: ["Tegmen tympani", "Promontoryum", "Juguler bulbus", "Mastoid antrum"],
            correctIndex: 0,
            exp: "Tegmen tympani, temporal kemiğin ince bir tabakasıdır ve orta kulak boşluğunun tavanını oluşturur."
        },
        {
            n: 46,
            q: "İşitme korteksindeki (Heschl girusu) nöronların, kokleadaki baziler membrana benzer şekilde frekanslara göre dizilmesine (alçak frekanslar bir yerde, yüksek frekanslar başka yerde) ne ad verilir?",
            options: ["Somatotopi", "Retinotopi", "Tonotopik organizasyon", "Plastisite"],
            correctIndex: 2,
            exp: "Tonotopik organizasyon, işitme sisteminin kokleadan kortekse kadar koruduğu frekansa özgü dizilim kuralıdır."
        },
        {
            n: 47,
            q: "Klinik işitme testlerinde, test edilen (kötü) kulağa verilen sesin, kafatası kemikleri üzerinden geçerek test edilmeyen (iyi) kulak tarafından duyulmasına ne ad verilir?",
            options: ["Gölge işitme (Çapraz işitme / Cross-hearing)", "Maskeleme", "Akustik refleks", "Binaural duyma"],
            correctIndex: 0,
            exp: "Sesin karşı kulağa geçmesine çapraz işitme (cross-hearing) denir ve bunu önlemek için maskeleme yapılır."
        },
        {
            n: 48,
            q: "Supra-aural (kulak üstü) standart kulaklıklar kullanılarak yapılan hava yolu testlerinde, iki kulak arasındaki 'İnteraural Atenüasyon' (sesin karşıya geçerken kaybettiği enerji) değeri ortalama kaç desibel kabul edilir?",
            options: ["0 dB", "40 dB", "60 dB", "100 dB"],
            correctIndex: 1,
            exp: "Supra-aural kulaklıklarda ses 40 dB'lik bir enerjiyle karşı kulağa ulaşabilir, insert kulaklıklarda bu değer 60-70 dB'dir."
        },
        {
            n: 49,
            q: "Kemik vibratörü ile yapılan testlerde İnteraural Atenüasyon (IA) değeri pratikte kaç desibel (dB) olarak kabul edilir?",
            options: ["0 dB", "20 dB", "40 dB", "60 dB"],
            correctIndex: 0,
            exp: "Kemik vibratörü kafatasını bir bütün olarak titreştirdiği için ses karşı kulağa hiç enerji kaybetmeden (0 dB zayıflamayla) geçer."
        },
        {
            n: 50,
            q: "Akustik nöroma gibi 8. kranial siniri etkileyen kitleler (Retrokoklear patolojiler), en sık hangi frekanslarda işitme kaybına ve konuşmayı anlama skorunda düşüşe neden olur?",
            options: ["Alçak frekanslar", "Orta frekanslar", "Yüksek (Tiz) frekanslar", "Tüm frekanslarda eşit"],
            correctIndex: 2,
            exp: "Sinirin dış kısımlarında yüksek frekans lifleri yer aldığı için tümör baskısı öncelikle yüksek frekansları ve konuşma ayırt etmeyi bozar."
        },
        {
            n: 51,
            q: "Fourier analizi fizikte ne amaçla kullanılır?",
            options: ["Sesi yükseltmek için", "Sesin yönünü bulmak için", "Karmaşık bir sesi (complex wave) kendisini oluşturan saf seslere (sinüs dalgalarına) ayırmak için", "Sesin hızını ölçmek için"],
            correctIndex: 2,
            exp: "Fourier teoremine göre her karmaşık dalga, farklı frekans ve genliklerdeki basit sinüs dalgalarının toplamından oluşur."
        },
        {
            n: 52,
            q: "Orta kulaktaki stapes (üzengi) kasının spazmı (miyoklonusu) hastada hangi şikayete neden olabilir?",
            options: ["Baş dönmesi (Vertigo)", "Objektif tinnitus (Kulak çınlaması)", "Kulak akıntısı", "Kulak zarı delinmesi"],
            correctIndex: 1,
            exp: "Orta kulak kaslarının ritmik kasılmaları, dışarıdan da duyulabilen pıt-pıt tarzı seslere (objektif tinnitus) neden olur."
        },
        {
            n: 53,
            q: "Hangi anatomik yapı dış kulak yolunun kıkırdak ve kemik bölümlerinin birleşim yerinde bulunur ve dış kulak yolunun en dar kısmını oluşturur?",
            options: ["İstmus (Isthmus)", "Umbo", "Heliks", "Annulus"],
            correctIndex: 0,
            exp: "İstmus, dış kulak yolunda yabancı cisimlerin sıkışmaya en meyilli olduğu en dar kısımdır."
        },
        {
            n: 54,
            q: "Odyolojide konuşma testlerinde (Speech Audiometry), hastanın konuşmayı algıladığı en düşük ses şiddetine (farkında olma eşiği) ne ad verilir?",
            options: ["SRT (Speech Reception Threshold)", "SDT/SAT (Speech Detection Threshold)", "WRS (Word Recognition Score)", "MCL (Most Comfortable Loudness)"],
            correctIndex: 1,
            exp: "SDT, hastanın sesi anladığı değil, sadece bir konuşma sesi olduğunu fark ettiği en düşük şiddettir."
        },
        {
            n: 55,
            q: "SRT (Konuşmayı Alma Eşiği) testi yapılırken genellikle ne tür kelimeler kullanılır?",
            options: ["Tek heceli kelimeler", "Üç heceli anlamsız kelimeler", "Sponde (İki heceli ve her hecesi eşit vurgulu) kelimeler", "Sessiz harf kümeleri"],
            correctIndex: 2,
            exp: "Masa, kapı, orman gibi iki heceli ve her iki hecesine eşit vurgu yapılan sponde kelimeler eşik bulmada kullanılır."
        },
        {
            n: 56,
            q: "Gürültüye Bağlı İşitme Kaybında (NIHL), odyogramda genellikle hangi frekansta karakteristik bir 'çentik' (düşüş) görülür?",
            options: ["1000 Hz", "2000 Hz", "4000 Hz (veya 3000-6000 Hz arası)", "8000 Hz"],
            correctIndex: 2,
            exp: "Akustik travma ve gürültüye bağlı kayıplar genellikle en belirgin hasarı 4000 Hz çevresinde verir (4 kHz çentiği)."
        },
        {
            n: 57,
            q: "Endolenf sıvısının aşırı üretimi veya emilimindeki bozukluk sonucu iç kulakta basınç artışına (Hidrops) neden olan hastalığın klinik adı nedir?",
            options: ["Meniere Hastalığı", "Otoskleroz", "Akut Otitis Media", "Kolesteatom"],
            correctIndex: 0,
            exp: "Meniere hastalığı; ataklar halinde gelen baş dönmesi, çınlama ve alçak frekanslarda dalgalanan işitme kaybı ile karakterizedir."
        },
        {
            n: 58,
            q: "Dış ve orta kulaktaki yapıların tamamen normal oluştuğu, ancak iç kulakta (koklea) anatomik bir gelişim geriliği veya yokluğu durumuna genel olarak ne ad verilir?",
            options: ["Mondini displazisi veya Koklear aplazi", "Mikrotia", "Atrezi", "Timpanoskleroz"],
            correctIndex: 0,
            exp: "Mondini displazisi, kokleanın normal 2.5 turu yerine 1.5 tur attığı konjenital iç kulak anomalisidir."
        },
        {
            n: 59,
            q: "Ses dalgalarının bir engele çarptıktan sonra yön değiştirerek engelin etrafından dolaşmasına (özellikle düşük frekanslı seslerde belirgindir) fizikte ne denir?",
            options: ["Yansıma (Reflection)", "Kırılma (Refraction)", "Kırınım (Diffraction)", "Soğurma (Absorption)"],
            correctIndex: 2,
            exp: "Kırınım (diffraction), dalga boyu uzun olan bas seslerin engellerin arkasına kolayca geçebilmesini açıklar."
        },
        {
            n: 60,
            q: "Odyolojide işitme sınırını belirleyen eğrilerden, insan kulağının en hassas olduğu ve en düşük ses basıncıyla duyabildiği frekans aralığı hangisidir?",
            options: ["100 - 500 Hz", "1000 - 4000 Hz", "5000 - 8000 Hz", "10000 - 20000 Hz"],
            correctIndex: 1,
            exp: "İnsan kulağı evrimsel olarak insan konuşma seslerini (özellikle sessiz harfleri) barındıran 1000-4000 Hz aralığına en duyarlıdır."
        },
        {
            n: 61,
            q: "Kulak zarı (Timpanik membran) anatomik olarak kaç tabakadan oluşur?",
            options: ["Tek tabaka", "İki tabaka", "Üç tabaka", "Beş tabaka"],
            correctIndex: 2,
            exp: "Kulak zarı dışta deri (epidermal), ortada lifli (fibröz) ve içte mukoza tabakası olmak üzere üç katmandır."
        },
        {
            n: 62,
            q: "Kulak zarının üst kısmında yer alan ve orta (fibröz) tabakası bulunmadığı için daha gevşek olan bölgeye ne ad verilir?",
            options: ["Pars Tensa", "Pars Flaccida (Shrapnell zarı)", "Umbo", "Annulus"],
            correctIndex: 1,
            exp: "Pars flaccida, lifli tabakadan yoksundur ve orta kulaktaki basınç değişimlerine (özellikle negatif basınca) çok duyarlıdır."
        },
        {
            n: 63,
            q: "Odyometride kullanılan 'Oktav' terimi neyi ifade eder?",
            options: ["Sesin şiddetinin iki katına çıkmasını", "Bir frekansın kendisinin iki katı olan frekansa olan aralığını", "Testin süresini", "Kulaklığın empedansını"],
            correctIndex: 1,
            exp: "Oktav müzikal ve akustik bir terimdir; örneğin 1000 Hz ile 2000 Hz arası bir oktavlık mesafedir."
        },
        {
            n: 64,
            q: "Aşağıdakilerden hangisi dış kulak yolunun bezleri tarafından salgılanan ve halk arasında 'kulak kiri' olarak bilinen maddenin tıbbi adıdır?",
            options: ["Serümen", "Endolenf", "Perilenf", "Mukus"],
            correctIndex: 0,
            exp: "Serümen, dış kulak yolunu enfeksiyonlardan, böceklerden ve tozdan koruyan asidik ve antibakteriyel bir salgıdır."
        },
        {
            n: 65,
            q: "Orta kulaktaki stapes (üzengi) kemikçiğini tutan ve sabitleyen tendon (kiriş) hangi kasın uzantısıdır?",
            options: ["Tensor tympani", "Stapedius", "Masseter", "Digastrik kas"],
            correctIndex: 1,
            exp: "Stapedius kası, piramidal eminensten çıkarak stapesin boynuna tutunur."
        },
        {
            n: 66,
            q: "Kokleanın dış duvarında yer alan ve endolenf sıvısını üreterek kokleanın 'pili' gibi çalışan damardan zengin yapı hangisidir?",
            options: ["Reissner membranı", "Striya Vaskülaris", "Tektoryal membran", "Spiral ligaman"],
            correctIndex: 1,
            exp: "Striya vaskülaris, endolenfteki yüksek potasyum seviyesini koruyan yaşamsal metabolik yapıdır."
        },
        {
            n: 67,
            q: "Tüy hücrelerinin üzerindeki stereosilyaların uçlarını örten ve titreşim anında sürtünme ile stereosilyaları büken jelatinöz zar hangisidir?",
            options: ["Tektoryal Membran", "Baziler Membran", "Timpanik Membran", "Retiküler Lamina"],
            correctIndex: 0,
            exp: "Tektoryal membran, dış tüy hücrelerinin en uzun silyalarının içine gömülü olduğu üst zardır."
        },
        {
            n: 68,
            q: "Sesin gürlüğünü (Loudness) ölçmek için kullanılan psikofiziksel birim aşağıdakilerden hangisidir?",
            options: ["Hertz (Hz)", "Desibel (dB)", "Sone veya Phon", "Paskal (Pa)"],
            correctIndex: 2,
            exp: "Phon ve Sone, insan beyninin sesi ne kadar gür algıladığını (örneğin 40 dB'lik 1000 Hz sesi referans alarak) ifade eden birimlerdir."
        },
        {
            n: 69,
            q: "Perdenin (Pitch) psikofiziksel ölçü birimi nedir?",
            options: ["Mel", "Desibel", "Watt", "Joule"],
            correctIndex: 0,
            exp: "Mel ölçeği, dinleyiciler tarafından eşit olarak algılanan müzikal perde (pitch) aralıkları için kullanılan psikofiziksel bir birimdir."
        },
        {
            n: 70,
            q: "Orta kulak boşluğu ile mastoid hava hücreleri (kemik içindeki boşluklar) arasındaki geçişi sağlayan kanalın adı nedir?",
            options: ["Aditus ad antrum", "Östaki borusu", "İç kulak yolu (Meatus acusticus internus)", "Koklear su kemeri"],
            correctIndex: 0,
            exp: "Aditus ad antrum, orta kulağın arka duvarında bulunur ve mastoid havalanmasını sağlar."
        },
        {
            n: 71,
            q: "Çocuklarda Östaki borusunun anatomik konumu yetişkinlere kıyasla nasıldır ve bu durum neye yol açar?",
            options: ["Daha diktir, daha iyi havalanır.", "Daha yatay, daha kısa ve daha geniştir, orta kulak enfeksiyonlarına zemin hazırlar.", "Tümüyle kapalıdır.", "Daha uzundur."],
            correctIndex: 1,
            exp: "Bebeklerde/çocuklarda Östaki borusunun daha yatay olması, genizdeki bakterilerin orta kulağa kaçmasını kolaylaştırır."
        },
        {
            n: 72,
            q: "Hangi anatomik yapı işitme siniri (8. sinir) ve fasyal sinirin (7. sinir) beyin sapından iç kulağa doğru ilerlerken içinden geçtiği kemik kanaldır?",
            options: ["Dış kulak yolu", "İç kulak yolu (Meatus acusticus internus)", "Foramen ovale", "Fallop kanalı"],
            correctIndex: 1,
            exp: "İç kulak yolu (IAC), temporal kemik içinde yer alan ve sinirlerin geçişini sağlayan tüneldir."
        },
        {
            n: 73,
            q: "Sıvıların sıkıştırılamaz olması prensibinden dolayı, stapes oval pencereyi içe ittiğinde iç kulaktaki sıvının hareket edebilmesi için dışa doğru esneyen yapı hangisidir?",
            options: ["Yuvarlak pencere", "Tegmen tympani", "Helikotrema", "Kulak zarı"],
            correctIndex: 0,
            exp: "Oval penceredeki içe doğru hareket, yuvarlak pencerenin orta kulağa doğru şişmesiyle kompanse edilir; bu dalga hareketini sağlar."
        },
        {
            n: 74,
            q: "Sensörinöral işitme kayıplı bir hastada ses şiddetindeki çok küçük artışların, hasta tarafından anormal derecede fazla/rahatsız edici algılanması durumuna ne ad verilir?",
            options: ["Adaptasyon", "Rekruitment (İşe alım fenomeni)", "Yorgunluk", "Maskeleme"],
            correctIndex: 1,
            exp: "Rekruitment, kokleadaki dış tüy hücre hasarında görülen ve gürlük algısının anormal hızlı artması durumudur."
        },
        {
            n: 75,
            q: "Hastanın işitme eşiklerini daha iyi göstermek amacıyla kasten yanlış/abartılı cevaplar vermesi (Rol yapma) durumuna klinik odyolojide ne ad verilir?",
            options: ["Presbiakuzi", "Fonksiyonel (Non-organik / Pseudohipoakuzi) İşitme Kaybı", "Merkezi sağırlık", "Ototoksisite"],
            correctIndex: 1,
            exp: "Organik bir lezyon olmaksızın testlerde kasıtlı veya psikolojik nedenlerle yüksek eşik çıkarılmasına denir."
        },
        {
            n: 76,
            q: "Belli bazı antibiyotiklerin (örn. Gentamisin) veya kemoterapi ilaçlarının iç kulaktaki tüy hücrelerine zarar vererek işitme kaybına yol açmasına ne isim verilir?",
            options: ["Ototoksisite", "Otoskleroz", "Barotravma", "Akustik travma"],
            correctIndex: 0,
            exp: "Kulak için zehirli (toksik) olan ilaçların yarattığı hasara ototoksisite denir."
        },
        {
            n: 77,
            q: "Dış ortam basıncındaki ani değişikliklerin (örneğin tüplü dalış veya uçak inişi) orta kulak basıncını dengeleyememesi sonucu kulak zarı ve orta kulakta oluşan fiziksel hasara ne ad verilir?",
            options: ["Akustik travma", "Barotravma", "Presbiakuzi", "Kolesteatom"],
            correctIndex: 1,
            exp: "Baro (basınç) kökenli fiziksel yaralanmadır, zar delinmesi veya orta kulakta kanamaya yol açabilir."
        },
        {
            n: 78,
            q: "Odyogramda sol kulak MASKELİ hava yolu eşikleri hangi renk ve sembolle gösterilir?",
            options: ["Mavi Kare", "Kırmızı Üçgen", "Mavi X", "Kırmızı O"],
            correctIndex: 0,
            exp: "Maskeli testlerde sol kulak hava yolu Mavi renkli bir Kare (square) ile işaretlenir."
        },
        {
            n: 79,
            q: "Bir desibel hesaplamasında güç oranı 10 katına çıkarsa, bu desibel (dB) ölçeğinde kaç birimlik bir artışa denk gelir?",
            options: ["3 dB", "10 dB", "20 dB", "100 dB"],
            correctIndex: 1,
            exp: "Güç formülü 10*log(Güç Oranı) şeklindedir. log(10) = 1 olduğundan 10 x 1 = 10 dB'lik artış olur."
        },
        {
            n: 80,
            q: "Aşağıdakilerden hangisi odyologların temel çalışma ve ilgi alanlarından biri DEĞİLDİR?",
            options: ["İşitme cihazı uygulaması yapmak", "Yenidoğan işitme taramalarını yönetmek", "Kulak zarı ameliyatı (Timpanoplasti) yapmak", "Vestibüler (Denge) testlerini yorumlamak"],
            correctIndex: 2,
            exp: "Odyologlar teşhis, rehabilitasyon ve cihazlandırma ile ilgilenir. Kulak cerrahisi (ameliyatlar) Kulak Burun Boğaz (KBB) hekimlerinin alanıdır."
        },
        {
            n: 81,
            q: "Kokleanın bazal membranında bir ilerleyen dalga (traveling wave) oluşurken, dalganın maksimum genliğe ulaştığı noktadan sonra sönümlenmesi (azalması) nasıl bir seyir izler?",
            options: ["Çok yavaş sönümlenir", "Aniden ve asimetrik olarak sönümlenir", "Hiç sönümlenmez", "Geldiği yöne geri döner"],
            correctIndex: 1,
            exp: "İlerleyen dalga kendi frekansına uygun noktada maksimum yüksekliğe ulaştıktan sonra aniden çöker (asimetrik zarf eğrisi)."
        },
        {
            n: 82,
            q: "İşitme fizyolojisinde 'Efferent' sinir yollarının görevi nedir?",
            options: ["Sesi beyinden kokleaya (aşağı doğru) taşıyarak inhibitör (baskılayıcı/düzenleyici) kontrol sağlamak", "Sesi kokleadan beyne (yukarı doğru) taşımak", "Orta kulak kaslarını gevşetmek", "Dengeyi sağlamak"],
            correctIndex: 0,
            exp: "Afferent lifler bilgiyi merkeze taşırken, Efferent (örneğin olivokoklear demet) lifler merkezden iç kulağa inerek dış tüy hücrelerinin aktivitesini kontrol eder."
        },
        {
            n: 83,
            q: "Weber testinde ses hastanın SOL kulağına lateralize oluyorsa (yöneliyorsa), bu durum aşağıdakilerden hangisini GÖSTEREMEZ?",
            options: ["Sol kulakta iletim tipi işitme kaybı vardır", "Sağ kulakta sensörinöral tip işitme kaybı vardır", "Sağ kulakta iletim tipi işitme kaybı vardır", "İşitmesi simetrik değildir"],
            correctIndex: 2,
            exp: "Eğer sağ kulakta iletim tipi kayıp olsaydı, ses sağ kulağa (hasta kulağa) lateralize olurdu."
        },
        {
            n: 84,
            q: "Klinikte kullanılan standart bir diyapazon (tuning fork) genellikle hangi frekanstadır?",
            options: ["128 Hz", "512 Hz", "4000 Hz", "8000 Hz"],
            correctIndex: 1,
            exp: "İşitme testlerinde aşırı titreşim (dokunma hissi) ve hızlı sönümlenmeyi önlemek için klinikte en sık 512 Hz diyapazon kullanılır."
        },
        {
            n: 85,
            q: "Dış kulağın şekli ve konumu sayesinde, sesin önden mi arkadan mı yoksa yukarıdan mı geldiğini ayırt edebilmemizi sağlayan akustik filtreleme etkisine ne ad verilir?",
            options: ["Akustik refleks", "Baş gölgesi etkisi (Head shadow effect)", "Kulak kepçesi (Pinna) etkisi / HRTF", "Oklüzyon etkisi"],
            correctIndex: 2,
            exp: "Pinna'nın kıvrımları, sesin geliş açısına göre yüksek frekanslarda mikro-gecikmeler ve yankılar yaratarak (HRTF - Head Related Transfer Function) sesin yönünü tayin etmemizi sağlar."
        },
        {
            n: 86,
            q: "Orta kulaktaki stapesin (üzenginin) tabanı (footplate) iç kulağa hangi pencereden bağlanır?",
            options: ["Yuvarlak pencere (Fenestra rotunda)", "Oval pencere (Fenestra vestibuli)", "Kohlear pencere", "Apikal pencere"],
            correctIndex: 1,
            exp: "Stapesin tabanı annular ligaman aracılığıyla oval pencereye tutunur."
        },
        {
            n: 87,
            q: "Akustikte bir ses kaynağı hareket ederken, yaklaşırken frekansın ince (tiz), uzaklaşırken kalın (bas) duyulması olayına ne isim verilir?",
            options: ["Doppler Etkisi", "Rezonans", "Yankı", "Maskeleme"],
            correctIndex: 0,
            exp: "Ambulans sireninin yaklaşırken ve uzaklaşırken sesinin değişmesini sağlayan bu fiziksel olaya Doppler etkisi denir."
        },
        {
            n: 88,
            q: "Saf ses odyometrisinde hastanın cevabını kontrol etmek ve testin güvenilirliğini artırmak için sesi her verdiğimizde uyguladığımız sunum süresi ortalama ne kadar olmalıdır?",
            options: ["0.1 saniye", "1 - 2 saniye", "5 - 6 saniye", "10 saniye"],
            correctIndex: 1,
            exp: "Test sırasında uyaran (saf ses), hastanın algılaması için yeterli ama ritmik tahminleri önleyecek şekilde 1-2 saniye uzunluğunda verilir."
        },
        {
            n: 89,
            q: "Sesin fiziksel özelliklerinden olan 'Faz' genellikle hangi birimle ifade edilir?",
            options: ["Hertz", "Desibel", "Derece (°)", "Paskal"],
            correctIndex: 2,
            exp: "Bir dalga döngüsü dairesel bir hareket olarak kabul edilir ve başlangıç noktası veya diğer dalgalarla ilişkisi derece (0-360°) olarak ölçülür."
        },
        {
            n: 90,
            q: "Kendi sesimizi hem dışarıdan hava yoluyla hem de içeriden kafatası titreşimleriyle (kemik yoluyla) duyarız. Sesimizi bir kayıttan dinlediğimizde bize farklı/ince gelmesinin asıl sebebi nedir?",
            options: ["Mikrofonların sesi bozması", "Kayıttan dinlerken kemik yolu iletiminin devre dışı kalması", "Havanın ses hızını yavaşlatması", "Psikolojik yanılsama"],
            correctIndex: 1,
            exp: "Konuşurken kendi kafatasımızdaki titreşimler bas (kalın) sesleri kemik yoluyla iç kulağa iletir. Kayıtta bu kalın tını kaybolduğu için sesimiz bize ince gelir."
        },
        {
            n: 91,
            q: "Dış tüy hücreleri (OHC) kokleada toplam olarak yaklaşık kaç adettir?",
            options: ["3.500", "12.000", "30.000", "50.000"],
            correctIndex: 1,
            exp: "Sağlıklı bir insan kokleasında yaklaşık 12.000 (12.000 - 15.000 arası) dış tüy hücresi 3-4 sıra halinde bulunur."
        },
        {
            n: 92,
            q: "Perilenf sıvısının iyonik bileşimi vücuttaki hangi diğer sıvıya çok benzerdir?",
            options: ["Kan plazması", "Hücre içi sıvısı", "Beyin Omurilik Sıvısı (BOS)", "Tükürük"],
            correctIndex: 2,
            exp: "Perilenf, sodyum açısından zengin yapısıyla serebrospinal sıvıya (BOS) çok benzer ve anatomik olarak bu sistemle bağlantılıdır (koklear akuadukt yoluyla)."
        },
        {
            n: 93,
            q: "Bir sesin havadaki dalga boyu, frekans arttıkça nasıl değişir?",
            options: ["Artar (Uzar)", "Değişmez", "Azalır (Kısalır)", "Önce artar sonra azalır"],
            correctIndex: 2,
            exp: "Frekans ve dalga boyu ters orantılıdır. Tiz seslerin (yüksek frekans) dalga boyu çok kısadır."
        },
        {
            n: 94,
            q: "Timpanik membranın (kulak zarı) ışık refleksinin (cone of light) sağ kulakta görüldüğü pozisyon bir saat kadranına benzetilirse, saat kaç hizasındadır?",
            options: ["Saat 5", "Saat 7", "Saat 12", "Saat 3"],
            correctIndex: 0,
            exp: "Sağlam bir kulak zarına otoskopla bakıldığında ışık refleksi sağ kulakta saat 5, sol kulakta saat 7 yönünde görülür."
        },
        {
            n: 95,
            q: "Kafatasının tam arkasındaki mastoid kemik çıkıntısına konulan bir diyapazon ile yapılan ve hastanın kemik yolu eşiği ile muayene edenin kemik yolu eşiğini karşılaştıran tarihi testin adı nedir?",
            options: ["Rinne Testi", "Weber Testi", "Schwabach Testi", "Bing Testi"],
            correctIndex: 2,
            exp: "Schwabach testi, normal işiten bir odyolog ile hastanın işitmesini saniye cinsinden karşılaştırmaya dayanır."
        },
        {
            n: 96,
            q: "Bing testi neyi saptamak için kullanılır?",
            options: ["Oklüzyon (kapanma) etkisinin olup olmadığını", "İç kulaktaki sıvı basıncını", "Akustik refleksi", "Konuşmayı ayırt etmeyi"],
            correctIndex: 0,
            exp: "Bing testi, dış kulak yolu parmakla kapatıldığında (oklüzyon) kemik yoluyla duyulan diyapazon sesinin artıp artmadığını kontrol ederek iletim veya sensörinöral ayrımı yapar."
        },
        {
            n: 97,
            q: "Aşağıdakilerden hangisi iç kulağa (kokleaya) kan sağlayan ana arterdir?",
            options: ["Karotis arteri", "Labirentin arter", "Juguler ven", "Fasyal arter"],
            correctIndex: 1,
            exp: "Labirentin arter (AICA'nın bir dalı), iç kulağın hem işitme hem de denge bölümlerinin tek kan kaynağıdır."
        },
        {
            n: 98,
            q: "İşitme cihazlarında 'Gain' (Kazanç) terimi ne anlama gelir?",
            options: ["Cihazın pil ömrü", "Cihazın mikrofona giren sesi kaç desibel yükselttiği", "Kulak kalıbının büyüklüğü", "Cihazın fiyatı"],
            correctIndex: 1,
            exp: "Kazanç (Gain), cihazın çıkış şiddeti ile giriş şiddeti arasındaki farktır (Çıkış - Giriş = Kazanç)."
        },
        {
            n: 99,
            q: "Mikrotia tanısı almış bir çocukta dışarıdan bakıldığında ne tür bir anatomik bozukluk görülür?",
            options: ["Gözlerin farklı renk olması", "Kulak kepçesinin (Pinna) anormal derecede küçük veya gelişmemiş olması", "Boyunda şişlik", "Ağız yarığı"],
            correctIndex: 1,
            exp: "Mikrotia, 'küçük kulak' anlamına gelir ve dış kulak kepçesinin konjenital olarak tam gelişmemesi durumudur."
        },
        {
            n: 100,
            q: "Modern odyolojinin temelleri atılırken, alanın 'Odyoloji' adını almasına öncülük eden ve klinik olarak gelişmesini sağlayan asıl tarihi olay aşağıdakilerden hangisidir?",
            options: ["Birinci Dünya Savaşı öncesi odyometrenin icadı", "İkinci Dünya Savaşı sonrası askerlerin işitme kayıplarının rehabilitasyon ihtiyacı", "1990'larda koklear implantın yaygınlaşması", "Röntgen cihazının icadı"],
            correctIndex: 1,
            exp: "İkinci Dünya Savaşı'ndan dönen çok sayıda askerin sese/patlamaya bağlı işitme kayıpları, bu alanın bağımsız bir bilim dalı olarak kurulmasına (özellikle Raymond Carhart öncülüğünde) neden olmuştur."
        }
];

const s1_20 = [
        {
            n: 1,
            q: "İşitme ve denge ile görevli olan 8. kranial sinirin (Nervus Vestibulocochlearis) beyin sapına girdiği bölge aşağıdakilerden hangisidir?",
            options: ["Serebellopontin köşe", "Foramen magnum", "İnferior kollikulus", "Medulla oblangata"],
            correctIndex: 0,
            exp: "8. kranial sinir, beyin sapına pons ve serebellum (beyincik) arasında kalan serebellopontin köşe (CPA) bölgesinden girer."
        },
        {
            n: 2,
            q: "Dış kulak yolu (Meatus acusticus externus) yetişkin bir insanda yaklaşık olarak kaç santimetre uzunluğundadır?",
            options: ["1.0 - 1.5 cm", "2.5 - 3.0 cm", "4.0 - 4.5 cm", "0.5 - 1.0 cm"],
            correctIndex: 1,
            exp: "Yetişkin bir insanda dış kulak yolunun uzunluğu yaklaşık 2.5 ile 3.0 cm arasındadır."
        },
        {
            n: 3,
            q: "Aşağıdakilerden hangisi orta kulakta bulunan kaslardan biridir ve yüksek şiddetli seslere karşı kulağı koruyan 'akustik refleks' mekanizmasında temel rol oynar?",
            options: ["Musculus temporalis", "Musculus masseter", "Musculus stapedius", "Musculus sternocleidomastoideus"],
            correctIndex: 2,
            exp: "Stapedius kası, yüksek seste kasılarak stapes kemikçiğinin hareketini kısıtlar ve iç kulağı korur."
        },
        {
            n: 4,
            q: "Musculus stapedius kası hangi kranial sinir tarafından uyarılır (innerve edilir)?",
            options: ["Nervus Trigeminus (V. Sinir)", "Nervus Facialis (VII. Sinir)", "Nervus Vagus (X. Sinir)", "Nervus Vestibulocochlearis (VIII. Sinir)"],
            correctIndex: 1,
            exp: "Yüz siniri olan fasyal sinirin bir dalı stapedius kasını innerve eder."
        },
        {
            n: 5,
            q: "İnsan kulağının doğal rezonans frekansı (dış kulak yolunun şekli ve uzunluğundan dolayı en iyi güçlendirdiği frekans) yaklaşık olarak hangi aralıktadır?",
            options: ["500 - 1000 Hz", "2500 - 3000 Hz", "6000 - 8000 Hz", "100 - 250 Hz"],
            correctIndex: 1,
            exp: "Dış kulak yolu bir ucu kapalı bir tüp gibi davranır ve rezonans frekansı ortalama 2700 Hz civarındadır."
        },
        {
            n: 6,
            q: "Odyolojide işitme kaybının türlerini belirlemek için hava yolu ve kemik yolu ölçümleri yapılır. Kemik yolu ölçümü hangi yapının işitme kapasitesini doğrudan test eder?",
            options: ["Dış kulak yolu", "Orta kulak kemikçikleri", "Sensörinöral sistem (Koklea ve işitme siniri)", "Kulak zarı"],
            correctIndex: 2,
            exp: "Kemik vibratörü kafatası kemiklerini titreştirerek sesi doğrudan kokleaya ulaştırır, böylece iç kulak ve sinirin durumu doğrudan görülür."
        },
        {
            n: 7,
            q: "Bir ses dalgasının bir tam döngüsünü (siklusunu) tamamlaması için geçen süreye fizikte ne ad verilir?",
            options: ["Frekans", "Periyot", "Dalga boyu", "Genlik"],
            correctIndex: 1,
            exp: "Periyot (T), bir tam dalga döngüsünün oluşması için geçen zamandır ve frekansın tersidir (T = 1/f)."
        },
        {
            n: 8,
            q: "Aşağıdakilerden hangisi dış kulak kepçesinin (aurikula) anatomik kısımlarından biri DEĞİLDİR?",
            options: ["Tragus", "Heliks", "Lobül", "Umbo"],
            correctIndex: 3,
            exp: "Umbo, dış kulak kepçesinde değil, kulak zarının (timpanik membranın) tam ortasında çekiç kemikçiğinin zarı içe çektiği çukur noktadır."
        },
        {
            n: 9,
            q: "Kokleadaki tüy hücrelerinin (hair cells) üzerinde yer alan ve ses titreşimleriyle bükülerek hücrenin elektriksel olarak uyarılmasını sağlayan mikroskobik tüycüklere ne ad verilir?",
            options: ["Stereosilya", "Mikrovillüs", "Akson", "Kinosilyum"],
            correctIndex: 0,
            exp: "Stereosilyalar, tüy hücrelerinin apikal yüzeyinde bulunan ve mekanik hareketi elektriksel sinyale dönüştüren yapılardır."
        },
        {
            n: 10,
            q: "Sıfır Desibel (0 dB HL), odyolojide ne anlama gelir?",
            options: ["Ortamda hiçbir ses olmaması durumu", "Sağlıklı gençlerin duyabildiği en düşük ortalama ses şiddeti", "Sesin hızının sıfıra düşmesi", "İnsanın sese karşı hissettiği acı eşiği"],
            correctIndex: 1,
            exp: "0 dB Hearing Level (HL), normal işiten kişilerin işitme eşiğinin ortalaması olarak kabul edilen klinik bir referans değeridir."
        },
        {
            n: 11,
            q: "Fizikte ses şiddeti formülü gereği, sesin genliği (basıncı) 2 katına çıkarsa, desibel cinsinden Ses Basınç Seviyesindeki (SPL) artış ne kadar olur?",
            options: ["2 dB artar", "6 dB artar", "10 dB artar", "100 dB artar"],
            correctIndex: 1,
            exp: "Ses basıncı kuralına göre 20 * log(2) formülü hesaplandığında, basıncın iki katına çıkması yaklaşık 6 dB SPL'lik bir artış sağlar."
        },
        {
            n: 12,
            q: "Kulak zarına (timpanik membran) dışarıdan bakıldığında, zarın orta kulak boşluğuna doğru en çok çökük olduğu merkeze ne ad verilir?",
            options: ["Pars tensa", "Pars flaccida", "Umbo", "Annulus"],
            correctIndex: 2,
            exp: "Umbo, malleus'un (çekiç kemiğinin) manubrium (sap) kısmının zarı orta kulağa doğru çektiği en çukur noktadır."
        },
        {
            n: 13,
            q: "Orta kulaktaki kemikçik zinciri, havadaki ses dalgalarının iç kulaktaki sıvı ortama geçerken yaşayacağı empedans uyumsuzluğunu (enerji kaybını) önlemek için sesi ortalama kaç desibel güçlendirir?",
            options: ["Yaklaşık 10 dB", "Yaklaşık 30 dB", "Yaklaşık 60 dB", "Güçlendirmez"],
            correctIndex: 1,
            exp: "Kulak zarı ile oval pencere arasındaki alan farkı ve kemikçiklerin kaldıraç etkisi, yaklaşık 30-33 dB'lik bir kazanç sağlar."
        },
        {
            n: 14,
            q: "Aşağıdaki frekanslardan hangisi standart saf ses odyometrisinde (işitme testinde) test edilen oktav frekanslarından biri DEĞİLDİR?",
            options: ["250 Hz", "1000 Hz", "4000 Hz", "10000 Hz"],
            correctIndex: 3,
            exp: "Standart klinik odyometride rutin test genellikle 125-8000 Hz arasındadır; 10000 Hz yüksek frekans odyometrisi kapsamındadır."
        },
        {
            n: 15,
            q: "Georg von Békésy'nin Nobel ödüllü 'İlerleyen Dalga Teorisi'ne göre, koklea içindeki baziler membranın TİZ (yüksek frekanslı) seslere en iyi tepki veren bölgesi neresidir?",
            options: ["Kokleanın apeksi", "Kokleanın bazali (oval pencereye yakın kısım)", "Baziler membranın tam ortası", "Helikotrema"],
            correctIndex: 1,
            exp: "Bazal kısım dar ve serttir, bu yüzden yüksek frekanslı (tiz) ses dalgaları bu bölgede en yüksek titreşime ulaşır."
        },
        {
            n: 16,
            q: "Yaşlanmaya bağlı olarak doğal olarak gelişen ve genellikle sensörinöral tipte, tiz frekansları daha çok etkileyen işitme kaybı durumuna ne ad verilir?",
            options: ["Otoskleroz", "Presbiakuzi", "Meniere hastalığı", "Akustik nörinom"],
            correctIndex: 1,
            exp: "Presbiakuzi, ilerleyen yaşla birlikte iç kulaktaki tüy hücrelerinin ve işitme sinirinin yıpranması sonucu oluşan yaşlılık işitme kaybıdır."
        },
        {
            n: 17,
            q: "Odyogram kâğıdında sol kulak hava yolu işitme eşikleri uluslararası standartlara göre hangi renk ve sembolle işaretlenir?",
            options: ["Kırmızı renkli Yuvarlak (O)", "Mavi renkli Çarpı (X)", "Kırmızı renkli Üçgen", "Mavi renkli Kare"],
            correctIndex: 1,
            exp: "Uluslararası standartlarda SOL kulak hava yolu eşikleri Mavi renkli bir Çarpı (X) ile işaretlenir."
        },
        {
            n: 18,
            q: "Sesin yayılma hızı fiziksel ortama bağlı olarak değişir. Buna göre ses en hızlı hangi ortamda yayılır?",
            options: ["Havada", "Tatlı suda", "Vakum ortamında", "Katı maddelerde (ör. çelik)"],
            correctIndex: 3,
            exp: "Katılarda moleküller birbirine çok daha sıkı bağlı olduğu için mekanik titreşim (ses) en hızlı katılarda iletilir."
        },
        {
            n: 19,
            q: "Corti organında yer alan Dış Tüy Hücrelerinin (Outer Hair Cells) asıl fizyolojik görevi aşağıdakilerden hangisidir?",
            options: ["İşitsel sinyalleri doğrudan beyne iletmek", "Koklear amplifikatör olarak çalışarak zayıf sesleri şiddetlendirmek", "Endolenf sıvısının potasyum dengesini sağlamak", "Sesi toplayıp orta kulağa iletmek"],
            correctIndex: 1,
            exp: "Dış tüy hücreleri, boylarını uzatıp kısaltabilme yetenekleri sayesinde düşük şiddetli seslerde baziler membran hareketini fiziksel olarak güçlendirirler."
        },
        {
            n: 20,
            q: "Sağ kulağında iletim tipi işitme kaybı (örneğin kulak kiri tıkanıklığı) olan bir hastada Weber testinin sonucu nasıl beklenir?",
            options: ["Ses sol kulağa lateralize olur.", "Ses sağ kulağa (hasta kulağa) lateralize olur.", "Ses her iki kulakta eşit duyulur.", "Ses hiç duyulmaz."],
            correctIndex: 1,
            exp: "İletim tipi kayıplarda kemik yoluyla gelen ses ortam gürültüsünden maskelenmediği için hasta olan kulakta daha şiddetli duyulur."
        }
];

const butunSorular = [...s1_20, ...s21_100];
const sonucJSObjesi = {
    1: {
        1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
    },
    2: {
        1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
    },
    3: {
        1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
    },
    4: {
        1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
    }
};

butunSorular.forEach((soru, index) => {
    // 100 soruyu 10 zorluk derecesine bölelim (her birinde 10 soru olacak)
    // 0-9 -> seviye 1, 10-19 -> seviye 2
    let zorluk = Math.floor(index / 10) + 1;
    
    sonucJSObjesi[1][zorluk].push({
        soru: soru.q,
        siklar: soru.options,
        dogru: soru.correctIndex,
        aciklama: soru.exp
    });
});

let metin = `const tumSoruHavuzlari = ${JSON.stringify(sonucJSObjesi, null, 4)};`;
fs.writeFileSync('C:/Users/Ahmet Talha/Desktop/site/yeni_havuz.js', metin, 'utf-8');
console.log("Dosya oluşturuldu.");

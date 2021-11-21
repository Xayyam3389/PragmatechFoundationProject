###  Display-flex
Display-flexin bir neçə alt xüsusiyyəti var. Elementləri sütunlar və sətirlər üzrə düzmək üçün istifadə olunur.
Defaul olaraq sətirlər üzrə bölünür bu  zaman "row" dəyərini alır və səhifənin solundan sağa qutular düzülür. Sağından sola düzülüş  olması üçün isə row-reverse xüsusiyyətindən istifadə olunur. Sütunlar üzrə bölmək üçün isə "column" xüsusiyyətindən istifadə olunur. oda öz növbəsində iki alt xüsusiyyətə bölünür. Yuxarında aşağı bölmək üçün default column, tərsinə bölmək üçün "column-reverse" istifadə olunur.

Display flexin başqa bir xüsusiyyəti isə elementləri vertical və horizantal formada düzməkdir. Justify-content elementləri verticalda bölmək üçün istifadə olunur.Oda öz növbəsində elementləri verticalda centere yığmaq üçün "center" , səhifədə sağda və solda yığmaq üçün space-between, səhifədə solda və sağda fərqli formada yığmaq üçün isə spacee-around funksiyanınnan istifadə olunur və s kimi flex-end çflex start . Elementlərin horizontalda düzülməsinə isə "align-item" nəzarət edir. Oda öz növbəsində elementləri alt xüsusiyyətlərə- mərkəzə çəkmək üçün center, defaul olaraq flex-startç sona çəkmək üçün flex-end vəs bölünür.


### Grid Layout

Display:grid eyni vaxtda həm sütünlara həmə sətirlərə ölçü və forma vermək üçün istifadə olunur. Flexdən fərqli olaraq tək sətirə və tək sütuna yox  bütün səhifəni sutun və sətir formasına bölməyə imkan verir.Grid-column-sütun üzrə, grid-row sətir üzrə dəyərlər verir. gap-araliq təyin etmək üçündür(həm sütünlara həm sətirlərə). column-gap sütunlara, row-gap sətirlərə aralıq verir. Elementlər arasında cizgilər çəkilir və adlandırılır(nömrələnir), grid-column-start və grid-column-end (grid-row-start və grid-row-end) kodlarına verdiyimiz cizgi adları boyunca elementin ölçüsünü dəyişir. grid-template-columns sütunlar üzrə, grid-row-columns sətirlər üzrə ölçülər verir.

### Display flex və  Grid Layout arasındakı fərqlər

Mənə görə aralarındakı ən böyük fərq responsivlikdir.Grid layoutda daha respondiv sayt yaratmaq mümkündür. Həmçinin  display flex-də tək sətir  və tək sütun üzərində əməliyyatlar apardığımız halda, Grid layoutda istədiyimiz qədər sətir və sütuna forma verə bilirik. 



### display:inline-block,display:flex və display:grid xüsusiyyətlər hansı hallarda istifadə olunmalıdı və səbəbləri nələrdir?

Display:inline-block köhnə versiyadır, yəni bütün sətiri tutan elementin özü qədər yer tutması üçün istifadə olunur.Bu bizim daha çox kod yazmağımıza və dağınıq iş görməyimizə səbəb olurdu.(elementlər arasında məsafələri paddingləri,margiləri vermək üçün) Daha sonra gələn texnologiya display-flex işimizi bir qədərdə asanlaşdırdı. Eyni qutuda olan eyni ölçülü  eyni xüsusiyyətli qutuları flex daxilində yazaraq işimizi asanlaşdırdıq. Ən son keçdiyimiz  texnologiya Grid Layout isə  daha responsiv daha dağınıq olmayaq iş görməyimizə şərait yaradır.Beləki eyni ölçülü olan və ya olmayan qutuları grid ilə sətir və sütun məntiqi ilə yaradıb daha az görünümlü və daha az kod yazaraq responsiv səhifələr hazırlamağımıza şərait yaradır.


### 21.11.2021 
### 1. Display:inline və display:inline-block arasında fərqlər nədir?
Block elementləri bütün sətiri tutur, və özündın sonrakı elementi yanında yerləşməyə qoymur aşağı atır (p,h,div və s.)
İnline-block elementi isə elementi isə bütün sətiri tutmur ,lakin elementin ölçü almasına imkan verir və həmin ölçü qədər(width,heigth) yer tutur.
Elemente inline verdikdı isə o artıq uzunluq və en götürə bilmir. Sıfr orda olan hərf, rəqəm sayı,boyutu qədər məsafə götürür, margin padding ,width,heigth  vermək olmur.

### Semantik veb nə deməkdir izah edin
Semantik veb informasiyanin insanlar və maşın emalı üçün qəbul edilmiş müəyyən sintaksis ilə yazılmasıdır. Misal üçün semantik html-dan danışaq. Qısa şəkildə izah etsəm yazdığımız kodu daha oxunaqlı daha başa düşülən formada yazmaqdan söhbət gedir. Misal üçün bir səhifə götürək. Səhifənin başlıq hissəsini Header təqinin içində yazsaq,menyunu Nav təqi içərisində yazsaq daha düzgün olar.Veb saytın müəyyən hissələrinə müraciət üçün İd vermək(o təkraralanmır) daha məqsədəuyğundur. Əsas hissəni yalnız bir dəfə yazılmaqla  Main təqi içərisində yazırıq və  mətni,məzmunu və s ona istinad etməklə yazmaq lazımdır, Qıraq  yəni yan məlumatları(reklamlar ,bannerlər və s.) Aside təqi içərisində, səhifənin sonunu isə Footer içərisində yazmaq lazımdır. Bununlada koda baxanda hamı tərəfindən həmçinin insanlar, robotexnika ,maşınlar tərəfindəndə  daha oxunaqlı ,daha asan başa düşülən olur. Google ,Yandex  kimi böyük axtarış sistemlərinində xoşuna gəlir. Bu cür kod yazdığımız halda biz daha profesional daha dolğun kod yazmış sayılırıq.

### HTML taq ve attribute arasındakı fərqlər nələrdir?
HTML-da istifadə etdiyimiz elementlər bizim təqlərimizdir. Yazılar üçün h,p,span , şəkillər üçün img, keçidlər üçün a, ikonlar üçün i, qutular üçün div və sairə və sairə belə dəvam edir. Həmin bu elementlərə yəni təqlərin xüsusiyyətləri , xassələri və s isə onların atributlrı sayılır. Misal üçün div təq, classı və ia id isə onun atributu sayılır .İmg təqinə yazdığımız src ,a təqinə yazdığımız title və yaxud style yazıb css özəlliklərini orda versək  yəni onun atributlarını yazmışq oluruq.

### <!DOCTYPE html> nədir? Nə üçün istifadə edilir?
Hər bir HTML sənədində tələb olunan və yazılan ilk sətir kodudur. Sənədin tip bəyənnaməsini bildirir. Yəni kodumuzun hansı HTML versiyasında (HTML 5, HTML 4.01, XHTML 1.0  və s.) olduğunu brauzerə məlumat verir və onun düzgün yüklənməsinə və işlənməsinə köməklik görsədir. <!DOCTYPE html> — bəyannaməsi əvvəlki versiyalar ilə müqayisədə ən sadə və qısa olandır.
Ancaq HTML4-də DOCTYPE bəyannaməsi HTML5-ə nisbətən nisbətən daha uzun və daha ətraflı idi. Bu, bütün HTML elementləri və atributlarını əhatə edirdi.Lakin onunda özünə görə çatışmamazlıqları idi.
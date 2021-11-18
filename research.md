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
// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroCard from "./HeroCard";

const heroesData = [
    {
        name: "Бетмен",
        universe: "DC Comics",
        alterego: "Брюс Уэйн",
        occupation: "борец с преступностью, филантроп, миллиардер",
        friends: "Робин, Бэтгерл",
        superpowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
        url: "../../assets/img/547x397_0xac120002_8752067681540468870_B.jpg",
        info: "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций.",
      },
      {
        name: "Человек-Паук",
        universe: "Marvel Comics",
        alterego: "Питер Паркер",
        occupation: "студент, супергерой",
        friends: "Мэри Джейн, Железный Человек, Тор",
        superpowers: "паучья ловкость, лазание по стенам, паучьи способности",
        url: "../../assets/img/547x397_0xac120002_9548247751540468871_SP.jpg",
        info: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание",
      },
      {
        name: "Супермен",
        universe: "DC Comics",
        alterego: "Кларк Кент",
        occupation: "репортер, супергерой",
        friends: "Чудо-женщина, Бэтмен",
        superpowers: "сверхчеловеческая сила, полет, лазерный взгляд",
        url: "../../assets/img/547x397_0xac120002_45567661540468871_SM.jpg",
        info: "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты.",
      },
      {
        name: "Тор",
        universe: "Marvel Comics",
        alterego: "Тор Одиссиан",
        occupation: "бог грома, воин",
        friends: "Халк, Черная вдова, Железный человек",
        superpowers: "сила бога, управление молнией",
        url: "../../assets/img/547x397_0xac120002_19311926741540468872_TOP.jpg",
        info: "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии.",
      },
      {
        name: "Чудо-женщина",
        universe: "DC Comics",
        alterego: "Диана Принс",
        occupation: "воительница, посланница Амазонок",
        friends: "Супермен, Бэтмен",
        superpowers: "сила амазонок, полет, волшебный пояс",
        url: "../../assets/img/547x397_0xac120002_6444132261540468872_SW.jpg",
        info: "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Своё настоящее имя Диана она получила в честь древнегреческой богини охоты, а суперспособности от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)",
      },
      {
        name: "Халк",
        universe: "Marvel Comics",
        alterego: "Брюс Беннер",
        occupation: "ученый, супергерой",
        friends: "Тор, Черная вдова",
        superpowers: "сверхчеловеческая сила, неуязвимость в состоянии ярости",
        url: "../../assets/img/547x397_0xac120002_20162335021540468872_Hl.jpg",
        info: "Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках.",
      },
      {
        name: "Капитан Америка",
        universe: "Marvel Comics",
        alterego: "Стивен Роджерс",
        occupation: "супер-солдат",
        friends: "Мстители",
        superpowers:
          "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
        url: "../../assets/img/547x397_0xac120002_20106541761540468871_CA.jpg",
        info: "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)",
      },
      {
        name: "Черная вдова",
        universe: "Marvel Comics",
        alterego: "Наташа Романофф",
        occupation: "супергероиня, шпионка",
        friends: "Мстители",
        superpowers:
          "пик человеческого физического потенциала, замедленное старение, знание многих языков",
        url: "../../assets/img/547x397_0xac120002_744074131540468872_B.jpg",
        info: "Супергероиня российского происхождения, родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал её опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата, как у Капитана Америки, но в советском варианте. Благодаря ей, Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка даёт эффект замедленного старения. По мнению фанатов, самое главное преимущество Чёрной Вдовы — то, что её сыграла красотка Скарлетт Йоханссон :)",
      },
];

const HeroList = () => {
  return (
    <div className="hero-list">
      {heroesData.map((hero) => (
        <HeroCard key={hero.name} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;

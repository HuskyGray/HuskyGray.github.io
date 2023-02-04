$(document).ready(new function(){
    
    //localStorage.clear();
    
    // Initialize Count Variables
    var lavashbread = 0;
    var oats = 0;
    
    var dishsoap = 0;
    var dishwashertablets = 0;
    var dryersheets = 0;
    var tide = 0;
    var trashbags = 0;
    
    var eggs = 0;
    var mozzarella = 0;
    var yogurtplain = 0;
    
    var babaganoush = 0;
    var vinegar = 0;
    var croutons = 0;
    var garlicpaste = 0;
    var ghee = 0;
    var hummus = 0;
    var italianseasoning = 0;
    var ketchup = 0;
    var lemonjuice = 0;
    var oil = 0;
    var soysauce = 0;
    
    var almondmilk = 0;
    var proteinpowder = 0;
    var redbull = 0;
    var sparklingwater = 0;
    
    var frozenchicken = 0;
    var frozenpeas = 0;
    
    var avocados = 0;
    var bananas = 0;
    var cauliflower = 0;
    var chilis = 0;
    var eggplant = 0;
    var onions = 0;
    var tomatoes = 0;
    
    var fennel = 0;
    var flaxseeds = 0;
    var gingerpowder = 0;
    var mustardseeds = 0;
    var oldbay = 0;
    var oregano = 0;
    var peanuts = 0;
    var redpepperflakes = 0;
    var salt = 0;
    var turmeric = 0;
    
    var floss = 0;
    var mouthwash = 0;
    var papertowels = 0;
    var razors = 0;
    var suntanlotion = 0;
    var toiletpaper = 0;
    
    
    // Setup of Sub-pages
    $(".lavashbreadSUB").hide();
    $(".oatsSUB").hide();
    
    $(".dishsoapSUB").hide();
    $(".dishwashertabletsSUB").hide();
    $(".dryersheetsSUB").hide();
    $(".tideSUB").hide();
    $(".trashbagsSUB").hide();
    
    $(".eggsSUB").hide();
    $(".mozzarellaSUB").hide();
    $(".yogurtplainSUB").hide();
    
    $(".babaganoushSUB").hide();
    $(".vinegarSUB").hide();
    $(".croutonsSUB").hide();
    $(".garlicpasteSUB").hide();
    $(".gheeSUB").hide();
    $(".hummusSUB").hide();
    $(".italianseasoningSUB").hide();
    $(".ketchupSUB").hide();
    $(".lemonjuiceSUB").hide();
    $(".oilSUB").hide();
    $(".soysauceSUB").hide();
    
    $(".almondmilkSUB").hide();
    $(".proteinpowderSUB").hide();
    $(".redbullSUB").hide();
    $(".sparklingwaterSUB").hide();
    
    $(".frozenchickenSUB").hide();
    $(".frozenpeasSUB").hide();
    
    $(".avocadosSUB").hide();
    $(".bananasSUB").hide();
    $(".cauliflowerSUB").hide();
    $(".chilisSUB").hide();
    $(".eggplantSUB").hide();
    $(".onionsSUB").hide();
    $(".tomatoesSUB").hide();
    
    $(".fennelSUB").hide();
    $(".flaxseedsSUB").hide();
    $(".gingerpowderSUB").hide();
    $(".mustardseedsSUB").hide();
    $(".oldbaySUB").hide();
    $(".oreganoSUB").hide();
    $(".peanutsSUB").hide();
    $(".redpepperflakesSUB").hide();
    $(".saltSUB").hide();
    $(".turmericSUB").hide();
    
    $(".flossSUB").hide();
    $(".mouthwashSUB").hide();
    $(".papertowelsSUB").hide();
    $(".razorsSUB").hide();
    $(".suntanlotionSUB").hide();
    $(".toiletpaperSUB").hide();
    
    // Recall from storage
    var lavashbread = parseInt(localStorage.getItem('lavashbread'));
    var oats = parseInt(localStorage.getItem('oats'));
    
    var dishsoap = parseInt(localStorage.getItem('dishsoap'));
    var dishwashertablets = parseInt(localStorage.getItem('dishwashertablets'));
    var dryersheets = parseInt(localStorage.getItem('dryersheets'));
    var tide = parseInt(localStorage.getItem('tide'));
    var trashbags = parseInt(localStorage.getItem('trashbags'));
    
    var eggs = parseInt(localStorage.getItem('eggs'));
    var mozzarella = parseInt(localStorage.getItem('mozzarella'));
    var yogurtplain = parseInt(localStorage.getItem('yogurtplain'));
    
    var babaganoush = parseInt(localStorage.getItem('babaganoush'));
    var vinegar = parseInt(localStorage.getItem('vinegar'));
    var croutons = parseInt(localStorage.getItem('croutons'));
    var garlicpaste = parseInt(localStorage.getItem('garlicpaste'));
    var ghee = parseInt(localStorage.getItem('ghee'));
    var hummus = parseInt(localStorage.getItem('hummus'));
    var italianseasoning = parseInt(localStorage.getItem('italianseasoning'));
    var ketchup = parseInt(localStorage.getItem('ketchup'));
    var lemonjuice = parseInt(localStorage.getItem('lemonjuice'));
    var oil = parseInt(localStorage.getItem('oil'));
    var soysauce = parseInt(localStorage.getItem('soysauce'));
    
    var almondmilk = parseInt(localStorage.getItem('almondmilk'));
    var proteinpowder = parseInt(localStorage.getItem('proteinpowder'));
    var redbull = parseInt(localStorage.getItem('redbull'));
    var sparklingwater = parseInt(localStorage.getItem('sparklingwater'));
    
    var frozenchicken = parseInt(localStorage.getItem('frozenchicken'));
    var frozenpeas = parseInt(localStorage.getItem('frozenpeas'));
    
    var avocados = parseInt(localStorage.getItem('avocados'));
    var bananas = parseInt(localStorage.getItem('bananas'));
    var cauliflower = parseInt(localStorage.getItem('cauliflower'));
    var chilis = parseInt(localStorage.getItem('chilis'));
    var eggplant = parseInt(localStorage.getItem('eggplant'));
    var onions = parseInt(localStorage.getItem('onions'));
    var tomatoes = parseInt(localStorage.getItem('tomatoes'));
    
    var fennel = parseInt(localStorage.getItem('fennel'));
    var flaxseeds = parseInt(localStorage.getItem('flaxseeds'));
    var gingerpowder = parseInt(localStorage.getItem('gingerpowder'));
    var mustardseeds = parseInt(localStorage.getItem('mustardseeds'));
    var oldbay = parseInt(localStorage.getItem('oldbay'));
    var oregano = parseInt(localStorage.getItem('oregano'));
    var peanuts = parseInt(localStorage.getItem('peanuts'));
    var redpepperflakes = parseInt(localStorage.getItem('redpepperflakes'));
    var salt = parseInt(localStorage.getItem('salt'));
    var turmeric = parseInt(localStorage.getItem('turmeric'));
    
    var floss = parseInt(localStorage.getItem('floss'));
    var mouthwash = parseInt(localStorage.getItem('mouthwash'));
    var papertowels = parseInt(localStorage.getItem('papertowels'));
    var razors = parseInt(localStorage.getItem('razors'));
    var suntanlotion = parseInt(localStorage.getItem('suntanlotion'));
    var toiletpaper = parseInt(localStorage.getItem('toiletpaper'));
    
    // Setup from storage
    if (lavashbread == 1){
        $(".lavashbreadSUB").show();
    }
    if (oats == 1){
        $(".oatsSUB").show();
    }
    
    if (dishsoap == 1){
        $(".dishsoupSUB").show();
    }
    if (dishwashertablets == 1){
        $(".dishwashertabletSUB").show();
    }
    if (dryersheets == 1){
        $(".dryersheetsSUB").show();
    }
    if (tide == 1){
        $(".tideSUB").show();
    }
    if (trashbags == 1){
        $(".trashbagsSUB").show();
    }
    
    if (eggs == 1){
        $(".eggsSUB").show();
    }
    if (mozzarella == 1){
        $(".mozzarellaSUB").show();
    }
    if (yogurtplain == 1){
        $(".yogurtplainSUB").show();
    }
    
    if (babaganoush == 1){
        $(".babaganoushSUB").show();
    }
    if (vinegar == 1){
        $(".vinegarSUB").show();
    }
    if (croutons == 1){
        $(".croutonsSUB").show();
    }
    if (garlicpaste == 1){
        $(".garlicpasteSUB").show();
    }
    if (ghee == 1){
        $(".gheeSUB").show();
    }
    if (hummus == 1){
        $(".hummusSUB").show();
    }
    if (italianseasoning == 1){
        $(".italianseasoningSUB").show();
    }
    if (ketchup == 1){
        $(".ketchupSUB").show();
    }
    if (lemonjuice == 1){
        $(".lemonjuiceSUB").show();
    }
    if (oil == 1){
        $(".oilSUB").show();
    }
    if (soysauce == 1){
        $(".soysauceSUB").show();
    }
    
    if (almondmilk == 1){
        $(".almondmilkSUB").show();
    }
    if (proteinpowder == 1){
        $(".proteinpowderSUB").show();
    }
    if (redbull == 1){
        $(".redbullSUB").show();
    }
    if (sparklingwater == 1){
        $(".sparklingwaterSUB").show();
    }
    
    if (frozenchicken == 1){
        $(".frozenchickenSUB").show();
    }
    if (frozenpeas == 1){
        $(".frozenpeasSUB").show();
    }
    
    if (avocados == 1){
        $(".avocadosSUB").show();
    }
    if (bananas == 1){
        $(".bananasSUB").show();
    }
    if (cauliflower == 1){
        $(".cauliflowerSUB").show();
    }
    if (chilis == 1){
        $(".chilisSUB").show();
    }
    if (eggplant == 1){
        $(".eggplantSUB").show();
    }
    if (onions == 1){
        $(".onionsSUB").show();
    } 
    if (tomatoes == 1){
        $(".tomatoesSUB").show();
    }
    
    if (fennel == 1){
        $(".fennelSUB").show();
    }
    if (flaxseeds == 1){
        $(".flaxseedsSUB").show();
    }
    if (gingerpowder == 1){
        $(".gingerpowderSUB").show();
    }
    if (mustardseeds == 1){
        $(".mustardseedsSUB").show();
    }
    if (oldbay == 1){
        $(".oldbaySUB").show();
    }
    if (oregano == 1){
        $(".oreganoSUB").show();
    }
    if (peanuts == 1){
        $(".peanutsSUB").show();
    }
    if (redpepperflakes == 1){
        $(".redpepperflakesSUB").show();
    }
    if (salt == 1){
        $(".saltSUB").show();
    }
    if (turmeric == 1){
        $(".turmericSUB").show();
    }
    
    if (floss == 1){
        $(".flossSUB").show();
    }
    if (mouthwash == 1){
        $(".mouthwashSUB").show();
    }
    if (papertowels == 1){
        $(".papertowelsSUB").show();
    }
    if (razors == 1){
        $(".razorsSUB").show();
    }
    if (suntanlotion == 1){
        $(".suntanlotionSUB").show();
    }
    if (toiletpaper == 1){
        $(".toiletpaperSUB").show();
    }
    
    // Items
    $(".lavashbreadML").click(function(){
        $(".lavashbreadSUB").show();
        lavashbread = 1;
        localStorage.setItem('lavashbread', lavashbread);
    })
    $(".lavashbreadSUB").click(function(){
        $(".lavashbreadSUB").hide();
        lavashbread = 0;
        localStorage.setItem('lavashbread', lavashbread);
    })
    $(".oatsML").click(function(){
        $(".oatsSUB").show();
        oats = 1;
        localStorage.setItem('oats', oats);
    })
    $(".oatsSUB").click(function(){
        $(".oatsSUB").hide();
        oats = 0;
        localStorage.setItem('oats', oats);
    })
    
    $(".dishsoapML").click(function(){
        $(".dishsoapSUB").show();
        dishsoap = 1;
        localStorage.setItem('dishsoap', dishsoap);
    })
    $(".dishsoapSUB").click(function(){
        $(".dishsoapSUB").hide();
        dishsoap = 0;
        localStorage.setItem('dishsoap', dishsoap);
    })
    $(".dishwashertabletsML").click(function(){
        $(".dishwashertabletsSUB").show();
        dishwashertablets = 1;
        localStorage.setItem('dishwashertablets', dishwashertablets);
    })
    $(".dishwashertabletsSUB").click(function(){
        $(".dishwashertabletsSUB").hide();
        dishwashertablets = 0;
        localStorage.setItem('dishwashertablets', dishwashertablets);
    })
    $(".dryersheetsML").click(function(){
        $(".dryersheetsSUB").show();
        dryersheets = 1;
        localStorage.setItem('dryersheets', dryersheets);
    })
    $(".dryersheetsSUB").click(function(){
        $(".dryersheetsSUB").hide();
        dryersheets = 0;
        localStorage.setItem('dryersheets', dryersheets);
    })
    $(".tideML").click(function(){
        $(".tideSUB").show();
        tide = 1;
        localStorage.setItem('tide', tide);
    })
    $(".tideSUB").click(function(){
        $(".tideSUB").hide();
        tide = 0;
        localStorage.setItem('tide', tide);
    })
    $(".trashbagsML").click(function(){
        $(".trashbagsSUB").show();
        trashbags = 1;
        localStorage.setItem('trashbags', trashbags);
    })
    $(".trashbagsSUB").click(function(){
        $(".trashbagsSUB").hide();
        trashbags = 0;
        localStorage.setItem('trashbags', trashbags);
    })

    
    $(".eggsML").click(function(){
        $(".eggsSUB").show();
        eggs = 1;
        localStorage.setItem('eggs', eggs);
    })
    $(".eggsSUB").click(function(){
        $(".eggsSUB").hide();
        eggs = 0;
        localStorage.setItem('eggs', eggs);
    })
    $(".mozzarellaML").click(function(){
        $(".mozzarellaSUB").show();
        mozzarella = 1;
        localStorage.setItem('mozzarella', mozzarella);
    })
    $(".mozzarellaSUB").click(function(){
        $(".mozzarellaSUB").hide();
        mozzarella = 0;
        localStorage.setItem('mozzarella', mozzarella);
    })
    $(".yogurtplainML").click(function(){
        $(".yogurtplainSUB").show();
        yogurtplain = 1;
        localStorage.setItem('yogurtplain', yogurtplain);
    })
    $(".yogurtplainSUB").click(function(){
        $(".yogurtplainSUB").hide();
        yogurtplain = 0;
        localStorage.setItem('yogurtplain', yogurtplain);
    })
    
    $(".babaganoushML").click(function(){
        $(".babaganoushSUB").show();
        babaganoush = 1;
        localStorage.setItem('babaganoush', babaganoush);
    })
    $(".babaganoushSUB").click(function(){
        $(".babaganoushSUB").hide();
        babaganoush = 0;
        localStorage.setItem('babaganoush', babaganoush);
    })
    $(".vinegarML").click(function(){
        $(".vinegarSUB").show();
        vinegar = 1;
        localStorage.setItem('vinegar', vinegar);
    })
    $(".vinegarSUB").click(function(){
        $(".vinegarSUB").hide();
        vinegar = 0;
        localStorage.setItem('vinegar', vinegar);
    })
    $(".croutonsML").click(function(){
        $(".croutonsSUB").show();
        croutons = 1;
        localStorage.setItem('croutons', croutons);
    })
    $(".croutonsSUB").click(function(){
        $(".croutonsSUB").hide();
        croutons = 0;
        localStorage.setItem('croutons', croutons);
    })
    $(".garlicpasteML").click(function(){
        $(".garlicpasteSUB").show();
        garlicpaste = 1;
        localStorage.setItem('garlicpaste', garlicpaste);
    })
    $(".garlicpasteSUB").click(function(){
        $(".garlicpasteSUB").hide();
        garlicpaste = 0;
        localStorage.setItem('garlicpaste', garlicpaste);
    })
    $(".gheeML").click(function(){
        $(".gheeSUB").show();
        ghee = 1;
        localStorage.setItem('ghee', ghee);
    })
    $(".gheeSUB").click(function(){
        $(".gheeSUB").hide();
        ghee = 0;
        localStorage.setItem('ghee', ghee);
    })
    $(".hummusML").click(function(){
        $(".hummusSUB").show();
        hummus = 1;
        localStorage.setItem('hummus', hummus);
    })
    $(".hummusSUB").click(function(){
        $(".hummusSUB").hide();
        hummus = 0;
        localStorage.setItem('hummus', hummus);
    })
    $(".italianseasoningML").click(function(){
        $(".italianseasoningSUB").show();
        italianseasoning = 1;
        localStorage.setItem('italianseasoning', italianseasoning);
    })
    $(".italianseasoningSUB").click(function(){
        $(".italianseasoningSUB").hide();
        italianseasoning = 0;
        localStorage.setItem('italianseasoning', italianseasoning);
    })
    $(".ketchupML").click(function(){
        $(".ketchupSUB").show();
        ketchup = 1;
        localStorage.setItem('ketchup', ketchup);
    })
    $(".ketchupSUB").click(function(){
        $(".ketchupSUB").hide();
        ketchup = 0;
        localStorage.setItem('ketchup', ketchup);
    })
    $(".lemonjuiceML").click(function(){
        $(".lemonjuiceSUB").show();
        lemonjuice = 1;
        localStorage.setItem('lemonjuice', lemonjuice);
    })
    $(".lemonjuiceSUB").click(function(){
        $(".lemonjuiceSUB").hide();
        lemonjuice = 0;
        localStorage.setItem('lemonjuice', lemonjuice);
    })
    $(".oilML").click(function(){
        $(".oilSUB").show();
        oil = 1;
        localStorage.setItem('oil', oil);
    })
    $(".oilSUB").click(function(){
        $(".oilSUB").hide();
        oil = 0;
        localStorage.setItem('oil', oil);
    })
    $(".soysauceML").click(function(){
        $(".soysauceSUB").show();
        soysauce = 1;
        localStorage.setItem('soysauce', soysauce);
    })
    $(".soysauceSUB").click(function(){
        $(".soysauceSUB").hide();
        soysauce = 0;
        localStorage.setItem('soysauce', soysauce);
    })
    
    $(".almondmilkML").click(function(){
        $(".almondmilkSUB").show();
        almondmilk = 1;
        localStorage.setItem('almondmilk', almondmilk);
    })
    $(".almondmilkSUB").click(function(){
        $(".almondmilkSUB").hide();
        almondmilk = 0;
        localStorage.setItem('almondmilk', almondmilk);
    })
    $(".proteinpowderML").click(function(){
        $(".proteinpowderSUB").show();
        proteinpowder = 1;
        localStorage.setItem('proteinpowder', proteinpowder);
    })
    $(".proteinpowderSUB").click(function(){
        $(".proteinpowderSUB").hide();
        proteinpowder = 0;
        localStorage.setItem('proteinpowder', proteinpowder);
    })
    $(".redbullML").click(function(){
        $(".redbullSUB").show();
        redbull = 1;
        localStorage.setItem('redbull', redbull);
    })
    $(".redbullSUB").click(function(){
        $(".redbullSUB").hide();
        redbull = 0;
        localStorage.setItem('redbull', redbull);
    })
    $(".sparklingwaterML").click(function(){
        $(".sparklingwaterSUB").show();
        sparklingwater = 1;
        localStorage.setItem('sparklingwater', sparklingwater);
    })
    $(".sparklingwaterSUB").click(function(){
        $(".sparklingwaterSUB").hide();
        sparklingwater = 0;
        localStorage.setItem('sparklingwater', sparklingwater);
    })
    
    $(".frozenchickenML").click(function(){
        $(".frozenchickenSUB").show();
        frozenchicken = 1;
        localStorage.setItem('frozenchicken', frozenchicken);
    })
    $(".frozenchickenSUB").click(function(){
        $(".frozenchickenSUB").hide();
        frozenchicken = 0;
        localStorage.setItem('frozenchicken', frozenchicken);
    })
    $(".frozenpeasML").click(function(){
        $(".frozenpeasSUB").show();
        frozenpeas = 1;
        localStorage.setItem('frozenpeas', frozenpeas);
    })
    $(".frozenpeasSUB").click(function(){
        $(".frozenpeasSUB").hide();
        frozenpeas = 0;
        localStorage.setItem('frozenpeas', frozenpeas);
    })
    
    $(".avocadosML").click(function(){
        $(".avocadosSUB").show();
        avocados = 1;
        localStorage.setItem('avocados', avocados);
    })
    $(".avocadosSUB").click(function(){
        $(".avocadosSUB").hide();
        avocados = 0;
        localStorage.setItem('avocados', avocados);
    })
    $(".bananasML").click(function(){
        $(".bananasSUB").show();
        bananas = 1;
        localStorage.setItem('bananas', bananas);
    })
    $(".bananasSUB").click(function(){
        $(".bananasSUB").hide();
        bananas = 0;
        localStorage.setItem('bananas', bananas);
    })
    $(".cauliflowerML").click(function(){
        $(".cauliflowerSUB").show();
        cauliflower = 1;
        localStorage.setItem('cauliflower', cauliflower);
    })
    $(".cauliflowerSUB").click(function(){
        $(".cauliflowerSUB").hide();
        cauliflower = 0;
        localStorage.setItem('cauliflower', cauliflower);
    })
    $(".chilisML").click(function(){
        $(".chilisSUB").show();
        chilis = 1;
        localStorage.setItem('chilis', chilis);
    })
    $(".chilisSUB").click(function(){
        $(".chilisSUB").hide();
        chilis = 0;
        localStorage.setItem('chilis', chilis);
    })
    $(".eggplantML").click(function(){
        $(".eggplantSUB").show();
        eggplant = 1;
        localStorage.setItem('eggplant', eggplant);
    })
    $(".eggplantSUB").click(function(){
        $(".eggplantSUB").hide();
        eggplant = 0;
        localStorage.setItem('eggplant', eggplant);
    })
    $(".onionsML").click(function(){
        $(".onionsSUB").show();
        onions = 1;
        localStorage.setItem('onions', onions);
    })
    $(".onionsSUB").click(function(){
        $(".onionsSUB").hide();
        onions = 0;
        localStorage.setItem('onions', onions);
    })
    $(".tomatoesML").click(function(){
        $(".tomatoesSUB").show();
        tomatoes = 1;
        localStorage.setItem('tomatoes', tomatoes);
    })
    $(".tomatoesSUB").click(function(){
        $(".tomatoesSUB").hide();
        tomatoes = 0;
        localStorage.setItem('tomatoes', tomatoes);
    })
    
    $(".fennelML").click(function(){
        $(".fennelSUB").show();
        fennel = 1;
        localStorage.setItem('fennel', fennel);
    })
    $(".fennelSUB").click(function(){
        $(".fennelSUB").hide();
        fennel = 0;
        localStorage.setItem('fennel', fennel);
    })
    $(".flaxseedsML").click(function(){
        $(".flaxseedsSUB").show();
        flaxseeds = 1;
        localStorage.setItem('flaxseeds', flaxseeds);
    })
    $(".flaxseedsSUB").click(function(){
        $(".flaxseedsSUB").hide();
        flaxseeds = 0;
        localStorage.setItem('flaxseeds', flaxseeds);
    })
    $(".gingerpowderML").click(function(){
        $(".gingerpowderSUB").show();
        gingerpowder = 1;
        localStorage.setItem('gingerpowder', gingerpowder);
    })
    $(".gingerpowderSUB").click(function(){
        $(".gingerpowderSUB").hide();
        gingerpowder = 0;
        localStorage.setItem('gingerpowder', gingerpowder);
    })
    $(".mustardseedsML").click(function(){
        $(".mustardseedsSUB").show();
        mustardseeds = 1;
        localStorage.setItem('mustardseeds', mustardseeds);
    })
    $(".mustardseedsSUB").click(function(){
        $(".mustardseedsSUB").hide();
        mustardseeds = 0;
        localStorage.setItem('mustardseeds', mustardseeds);
    })
    $(".oldbayML").click(function(){
        $(".oldbaySUB").show();
        oldbay = 1;
        localStorage.setItem('oldbay', oldbay);
    })
    $(".oldbaySUB").click(function(){
        $(".oldbaySUB").hide();
        oldbay = 0;
        localStorage.setItem('oldbay', oldbay);
    })
    $(".oreganoML").click(function(){
        $(".oreganoSUB").show();
        oregano = 1;
        localStorage.setItem('oregano', oregano);
    })
    $(".oreganoSUB").click(function(){
        $(".oreganoSUB").hide();
        oregano = 0;
        localStorage.setItem('oregano', oregano);
    })
    $(".peanutsML").click(function(){
        $(".peanutsSUB").show();
        peanuts = 1;
        localStorage.setItem('peanuts', peanuts);
    })
    $(".peanutsSUB").click(function(){
        $(".peanutsSUB").hide();
        peanuts = 0;
        localStorage.setItem('peanuts', peanuts);
    })
    $(".redpepperflakesML").click(function(){
        $(".redpepperflakesSUB").show();
        redpepperflakes = 1;
        localStorage.setItem('redpepperflakes', redpepperflakes);
    })
    $(".redpepperflakesSUB").click(function(){
        $(".redpepperflakesSUB").hide();
        redpepperflakes = 0;
        localStorage.setItem('redpepperflakes', redpepperflakes);
    })
    $(".saltML").click(function(){
        $(".saltSUB").show();
        salt = 1;
        localStorage.setItem('salt', salt);
    })
    $(".saltSUB").click(function(){
        $(".saltSUB").hide();
        salt = 0;
        localStorage.setItem('salt', salt);
    })
    $(".turmericML").click(function(){
        $(".turmericSUB").show();
        turmeric = 1;
        localStorage.setItem('turmeric', turmeric);
    })
    $(".turmericSUB").click(function(){
        $(".turmericSUB").hide();
        turmeric = 0;
        localStorage.setItem('turmeric', turmeric);
    })
    
    $(".flossML").click(function(){
        $(".flossSUB").show();
        floss = 1;
        localStorage.setItem('floss', floss);
    })
    $(".flossSUB").click(function(){
        $(".flossSUB").hide();
        floss = 0;
        localStorage.setItem('floss', floss);
    })
    $(".mouthwashML").click(function(){
        $(".mouthwashSUB").show();
        mouthwash = 1;
        localStorage.setItem('mouthwash', mouthwash);
    })
    $(".mouthwashSUB").click(function(){
        $(".mouthwashSUB").hide();
        mouthwash = 0;
        localStorage.setItem('mouthwash', mouthwash);
    })
    $(".papertowelsML").click(function(){
        $(".papertowelsSUB").show();
        papertowels = 1;
        localStorage.setItem('papertowels', papertowels);
    })
    $(".papertowelsSUB").click(function(){
        $(".papertowelsSUB").hide();
        papertowels = 0;
        localStorage.setItem('papertowels', papertowels);
    })
    $(".razorsML").click(function(){
        $(".razorsSUB").show();
        razors = 1;
        localStorage.setItem('razors', razors);
    })
    $(".razorsSUB").click(function(){
        $(".razorsSUB").hide();
        razors = 0;
        localStorage.setItem('razors', razors);
    })
    $(".suntanlotionML").click(function(){
        $(".suntanlotionSUB").show();
        suntanlotion = 1;
        localStorage.setItem('suntanlotion', suntanlotion);
    })
    $(".suntanlotionSUB").click(function(){
        $(".suntanlotionSUB").hide();
        suntanlotion = 0;
        localStorage.setItem('suntanlotion', suntanlotion);
    })
    $(".toiletpaperML").click(function(){
        $(".toiletpaperSUB").show();
        toiletpaper = 1;
        localStorage.setItem('toiletpaper', toiletpaper);
    })
    $(".toiletpaperSUB").click(function(){
        $(".toiletpaperSUB").hide();
        toiletpaper = 0;
        localStorage.setItem('toiletpaper', toiletpaper);
    })
    
    
    // Continually Update the Totals
    setInterval(function(){
        
           // Item Totals 
            var allitemsTotal = lavashbread + oats + dishsoap + dishwashertablets + dryersheets + tide + trashbags + eggs + mozzarella + yogurtplain + babaganoush + vinegar + croutons + garlicpaste + ghee + hummus + italianseasoning + ketchup + lemonjuice + oil + soysauce + almondmilk + proteinpowder + redbull + sparklingwater + frozenchicken + frozenpeas + avocados + bananas + cauliflower + chilis + eggplant + onions + tomatoes + fennel + flaxseeds + gingerpowder + mustardseeds + oldbay + oregano + peanuts + redpepperflakes + salt + turmeric + floss + mouthwash + papertowels + razors + suntanlotion + toiletpaper;
            var safewayTotal = lavashbread + oats + dishsoap + dishwashertablets + dryersheets + tide + trashbags + eggs + mozzarella + yogurtplain + babaganoush + vinegar + croutons + garlicpaste + hummus + italianseasoning + ketchup + lemonjuice + oil + soysauce + almondmilk + proteinpowder + sparklingwater + frozenchicken + frozenpeas + avocados + bananas + cauliflower + chilis + eggplant + onions + tomatoes + fennel + flaxseeds + gingerpowder + mustardseeds + oldbay + oregano + peanuts + redpepperflakes + salt + floss + razors + suntanlotion;
            var patelbrosTotal = ghee + eggplant + fennel + flaxseeds + gingerpowder + mustardseeds + peanuts + turmeric;
            var costcoTotal = lavashbread + oats + dishsoap + dishwashertablets + dryersheets + tide + trashbags + eggs + mozzarella + yogurtplain + babaganoush + vinegar + croutons + garlicpaste + hummus + italianseasoning + oil + almondmilk + redbull + sparklingwater + frozenchicken + frozenpeas + floss + mouthwash + papertowels + razors + toiletpaper;
            var amazonTotal = proteinpowder;
            document.getElementById("allitemsDisp").innerHTML = "All Items (" + allitemsTotal + ")";
            document.getElementById("safewayDisp").innerHTML = "Safeway (" + safewayTotal + ")";
            document.getElementById("patelbrosDisp").innerHTML = "Patel Bros (" + patelbrosTotal + ")";
            document.getElementById("costcoDisp").innerHTML = "Cost Co (" + costcoTotal + ")";
            document.getElementById("amazonDisp").innerHTML = "Amazon (" + amazonTotal + ")";
        localStorage.setItem("", "");

        }, 1000);    
    
    
})
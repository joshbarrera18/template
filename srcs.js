var head = document.getElementsByTagName('head')[0];

var vendors =['angular'];
time=0;
vendors.forEach(function(item){

        script = document.createElement('script');
        head.appendChild(script);
        script.src = 'vendor/'+item +'.js';
        time+=1;

    if (time == vendors.length){
        apps();
    }

});

function apps (){

    var scripts =['home'];
    script = document.createElement('script');
    head.appendChild(script);
    script.src = 'app/app.js';


    scripts.forEach(function(item){


            script = document.createElement('script');
            head.appendChild(script);
            script.src = 'app/'+item +'/'+item +'.module.js';

            script = document.createElement('script');
            head.appendChild(script);
            script.src = 'app/'+item +'/'+item +'.controllers.js';

            script = document.createElement('script');
            head.appendChild(script);
            script.src = 'app/'+item +'/'+item +'.services.js';


    });



}






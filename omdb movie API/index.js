
var name=document.querySelector('#movieId').value;
var apikey='826bafc9';
let url='http://www.omdbapi.com/?apikey=826bafc9'+'&t='+name;

// http://www.omdbapi.com/?i=tt3896198&apikey=826bafc9
var container=document.querySelector('#container');

function search(){

    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function(res){
        console.log('res:',res);
        // console.log('res')
        appendData(res);
    })
    .catch(function(err){
        console.log('err:',err);
    })
}

    function appendData(data){
        data.forEach(function (e){
            if(name==e.Title){
                var box=document.createElement('div');
                var poster=document.createElement('img');
                poster.src=e.Poster;

                var title=document.createElement('p');
                title.innerText=e.Title;

                var year=document.createElement('p');
                year.innerHTML=e.DVD;

                var rating=document.createElement('p');
                rating.innerHTML=e.imdbRating;
                
                var boxoffice=document.createElement('p');
                boxoffice.innerHTML=e.BoxOffice;

                box.append(poster,title,year,rating,boxoffice);
                container.append(box);

            }
            


        })

    }



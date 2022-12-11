myPopFn = () => {
    document.getElementById('category-Pop').style.display = 'grid';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
    document.getElementById('catagory-items-pop').style.backgroundColor = '#000';
    document.getElementById('catagory-items-rock').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-90s').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-soundtrack').style.backgroundColor = '#1E1E1E';
}
myRockFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'grid';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
    document.getElementById('catagory-items-pop').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-rock').style.backgroundColor = '#000';
    document.getElementById('catagory-items-90s').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-soundtrack').style.backgroundColor = '#1E1E1E';
}
my90sFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'grid';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
    document.getElementById('catagory-items-pop').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-rock').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-90s').style.backgroundColor = '#000';
    document.getElementById('catagory-items-soundtrack').style.backgroundColor = '#1E1E1E';
}
mySoundtracksFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'grid';
    document.getElementById('category-Main').style.display = 'none';
    document.getElementById('catagory-items-pop').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-rock').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-90s').style.backgroundColor = '#1E1E1E';
    document.getElementById('catagory-items-soundtrack').style.backgroundColor = '#000';
}

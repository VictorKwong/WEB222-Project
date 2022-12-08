myPopFn = () => {
    document.getElementById('category-Pop').style.display = 'grid';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
}
myRockFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'grid';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
}
my90sFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'grid';
    document.getElementById('category-Soundtracks').style.display = 'none';
    document.getElementById('category-Main').style.display = 'none';
}
mySoundtracksFn = () => {
    document.getElementById('category-Pop').style.display = 'none';
    document.getElementById('category-Rock').style.display = 'none';
    document.getElementById('category-90s').style.display = 'none';
    document.getElementById('category-Soundtracks').style.display = 'grid';
    document.getElementById('category-Main').style.display = 'none';
}

myResetFn = () => {
    console.log('test');
}

function crazytitle(frames) {
    i = 0;
    setInterval(()=>{
        document.title = frames[i % frames.length]
        i++;
    }, 1000);
}
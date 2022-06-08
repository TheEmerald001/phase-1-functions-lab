//Write your code here
function distanceFromHqInBlocks(start){
    const schuberHq = 42;
    if (start > schuberHq){
        return (start - schuberHq);
    }else{
        return (schuberHq - start);
    }
}
function distanceFromHqInFeet(start){
    return (parseInt(distanceFromHqInBlocks(start), 10) * 264);
}
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        let distance = start - destination;
    }else{
        let distance= destination - start;
    }
    return (parseInt(distance, 10) * 264)
}
function calculatesFarePrice(start, destination){
    let chargableDist = (parseInt((distanceTravelledInFeet(start, destination)), 10))
    if (chargableDist <= 400){
        return 0;
    }else if (chargableDist <= 2000){
        return ((chargableDist - 400) * 0.02)
    }else if (chargableDist <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
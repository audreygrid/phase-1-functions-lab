function distanceFromHqInBlocks(blocks){
    const headquarters = 42;
    return Math.abs(headquarters - blocks);
}

function distanceFromHqInFeet(blocks){
    const feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);
    
    if (distance <=400){
        return 0;
    } else if (distance >400 && distance <=2000){
        return (distance-400)*0.02;
    } else if (distance >200 && distance <=2500){
        return 25;
    }else if (distance >2500) {
        return 'cannot travel that far'
    }
}
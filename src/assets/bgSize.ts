export const bgSize = (target: any):string =>{
    const min = target.min;
    const max = target.max;
    const val = +target.value;

    const size = Math.round(((val - min) * 100 / (max - min))-2) + "% 100%"

    return size;
}
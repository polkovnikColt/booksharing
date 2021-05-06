export const cut = (text:string) => {
    if(text.length < 20) return text;
    const split = text
        .split('')
        .filter((item, index) => {
        if(index >= 0 && index <= 20) return item;
    });
    return split.join('').concat('...');
}
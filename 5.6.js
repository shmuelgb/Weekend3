function maskify (str) {
    let i = str.length-4;
    let mask = ``;
    for (let i = 0; i < str.length-4; i++) {
        mask = `# ${mask}`;
    }
    str = str.substring(str.length-4, str.length);
    mask = `${mask}${str}`;
    mask = mask.replace(/\s+/g, '');
    return mask;
}
console.log(maskify("4556364607935616"));
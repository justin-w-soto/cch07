export const sortByChildren = (charArray) => {
    return charArray.sort((a, b)=>{
        return a.children.length - b.children.length;
    });
};


export const containsW = (str) => {
    let re = /w/g;
    return re.test(str);

};

export const isNum = (input) => {
    let re = /\d/;
    return re.test(input);
};

export const containsWorld = (input) => {
    let re = /world/g;
    return re.test(input);
};


const languages = {
    js: "JavaScript",
    cpp: "C++",
    swift: "Swift"
}
for (const key in languages) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        // console.log( key, ":",  languages[key]);    
    // }
}
for (const key in languages) {
    // console.log(`${key} shortcut is for ${languages[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //0, 1, 2, 3, 4, 5 
    // console.log(programming[key]); // js, .. values will print
}
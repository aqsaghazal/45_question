let person: string = "rumaisa";
console.log("lowercase:", person.toLocaleLowerCase());
console.log("uppercase:", person.toLocaleUpperCase());
console.log("titlecase:", person.replace(/\bw/g,c => c.toUpperCase()));
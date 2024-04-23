var person = "rumaisa";
console.log("lowercase:", person.toLocaleLowerCase());
console.log("uppercase:", person.toLocaleUpperCase());
console.log("titlecase:", person.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

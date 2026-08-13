import path from 'path'

            //join two or more files

const fullPath = path.join('C:','Users','Saksh','Desktop','Backend');
console.log("Joint files : ", fullPath);

            //absolute path

const absolutePath = path.resolve();
console.log("you're here: ", absolutePath);

            //extension check

const extName = path.extname('resume.pdf');
console.log("extension name: ", extName);

if(extName == '.pdf') {
    console.log("file uploaded");
}
else {
    console.log("file not supported");
}


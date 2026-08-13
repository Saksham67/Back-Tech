import {readFile, writeFile, appendFile, mkdir, rmdir} from 'fs/promises'
import { dirname } from 'path'

            //Read file content

// const read_file = async (fileName) =>{
//     const data = await readFile(fileName, "utf-8");
//     console.log(data);
// }
// read_file('test.txt');

            //Create file

// const create_file = async (fileName, content) => {
//     await writeFile(fileName, content);
//     console.log("File created successfully");
// }
// create_file('sample.txt', "hey there!");

            //Append content in files
// const append_file = async (fileName, content) =>{
//     await appendFile(fileName, content);
//     console.log("Content Added successfully");
// }
// append_file('sample.txt', " I'm EW");

           //let's read after appending text to sample.txt

// const read_file = async (fileName) => {
//     const data = await readFile(fileName, "utf-8");
//     console.log(data);  
// }
// read_file('sample.txt');

        //Create folders(directory)
    
// const create_dir = async (dirName) =>{
//     await mkdir(dirName);
//     console.log("Folder created successfully");
    
// }
// create_dir('Testing');

        //make sub-folders
// const create_dir = async (dirName) =>{
//     await mkdir(dirName, {recursive: true});
//     console.log("Folder created successfully");
    
// }
// // create_dir('Testing/test1');
// create_dir('Testing/samples');

        //Remove directories
const remove_file = async (fileName) =>{
    await rmdir(fileName);
    console.log("Folder removed successfully");
    
}
remove_file('Testing/test1');



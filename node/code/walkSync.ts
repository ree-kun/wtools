import path from 'path';
import fs from 'fs';

const walkRecursive = (dirPath: string): string[] =>
    fs.readdirSync(dirPath)
        .map(item => path.join(dirPath, item))
        .flatMap(filePath =>
            fs.statSync(filePath).isDirectory() ? walkRecursive(filePath) : [filePath])
        .filter(filePath => filePath.endsWith('.txt'))

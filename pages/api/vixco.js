// Add a new api route to handle the request from /api/vixco?q=xxx

//if q = totalSupply, return totalSupply
//if q = circulatingValue, return circulatingValue

import { Octokit } from '@octokit/core';
import fs from 'fs';
import path from 'path';


const btoa = (str) => Buffer.from(str).toString('base64');
const totalSupply = "totalSupply";
const circulatingValue = "circulatingValue";
const publicPath = "public";
const owner = "Ibexlab-Webmaster";
const repo = "vixco";
const headers = { 'X-GitHub-Api-Version': '2022-11-28' };
const token = "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";
const commiterEmail = "komiljonov@ibexlab.com";
const now = new Date().toISOString();


export default async (req, res) => {
    const { q, value } = req.query;

    const getContentFromFile = (fileName) => {
        const filePath = path.join(process.cwd(), publicPath, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return fileContents;
    }

    const editFileContent = async (fileName, content) => {
        const octokit = new Octokit({
            auth: token
        });

        try {
            const circVal = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: owner,
                repo: repo,
                path: `${publicPath}/${fileName}`,
                headers: headers
            });

            const sha = circVal.data.sha;
            const res = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
                owner: owner,
                repo: repo,
                path: `${publicPath}/${fileName}`,
                message: `[AUTO COMMIT API] ${now}`,
                committer: {
                    name: '[AUTO COMMIT API]',
                    email: commiterEmail,
                },
                content: btoa(content),
                sha: sha,
                headers: headers
            });
            return res.status === 200;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    switch (q) {
        case totalSupply:
            const ts = getContentFromFile(`${totalSupply}.txt`);
            res.status(200).send(ts);
            break;
        case circulatingValue:
            const cv = getContentFromFile(`${circulatingValue}.txt`);
            res.status(200).send(cv);
            break;
        case 'editCirculatingValue':
            if (value == undefined || value == null || value == '') {
                res.status(200).send("Value is empty");
                break;
            }
            const edCv = await editFileContent(`${circulatingValue}.txt`, value);

            if (!edCv) res.status(200).send("Error editing circulating value");

            res.status(200).send("Edit circulating value SUCCESS");
            break;
        case 'editTotalSupply':
            if (value == undefined || value == null || value == '') {
                res.status(200).send("Value is empty");
                break;
            }
            const editedTs = await editFileContent(`${totalSupply}.txt`, value);

            if (!editedTs) res.status(200).send("Error editing total value");

            res.status(200).send("Edit circulating value");
            break;
        default:
            res.status(200).send("No query");
    }


    // if (q === 'totalSupply') {
    //     const totalSupply = getContentFromFile('totalSupply.txt');
    //     res.status(200).send(totalSupply);
    // } else if (q === 'circulatingValue') {
    //     const circulatingValue = getContentFromFile('circulatingValue.txt');
    //     res.status(200).send(circulatingValue);
    // }
}

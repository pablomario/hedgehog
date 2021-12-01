const expressjs = require('express');
const cors = require('cors');
const axios = require('axios');

const server = expressjs();
const puerto = 3000;

server.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

logger = (level, message) => {
    switch (level) {
        case 'debug':
            console.log('[DEBUG] ' + message );
            break;
        case 'info':
            console.log('[INFO] ' + message );
            break;
        case 'error':
            console.log('[ERROR] ' + message );
            break;
        default:
            console.log('[=>] ' + message );
            break;
    }
}

/**
 * ENDPOINTs
 */
server.get('/', (request, response) => {
    logger('info', 'Request received at endpoint "/"');
    response.json({status: 'ok'})
});



/**
 * Get All report from GitHub by username
 * https://api.github.com/users/pablomario/repos
 */

server.get('/repos', async (request, response) => {
    logger('info', 'Request received at endpoint "/repos"');
    let owner = request.query.owner;
    if( owner ){
        let baseurl = `https://api.github.com/users/${owner}/repos`;
        logger('info', 'Get respository from ' + baseurl);
        let respuesta = await axios.get(baseurl).then( (respuesta) => {
            return respuesta.data;
        }).catch( (error) => {
            logger('error', 'Error en /repos');
            return error;
        });

        console.log(respuesta.status);

        if( respuesta.status === 200 ){
            logger('info', 'Response from /repos');
            response.json(respuesta.data);
        } else {
            logger('info', 'No data from /repos');
            response.json({status: 'error', message: 'No data'});
        }

    } else {
        logger('error', 'Query param "owner" is undefined');
    }
});

/**
 * /repos/{owner}/{repo}/branches'
 */
server.get('/branches', async (request, response) => {
    logger('info', 'Request received at endpoint "/branches"');
    let owner = request.query.owner;
    let repo = request.query.repo;
    if( owner && repo){
        let baseurl = `https://api.github.com/repos/${owner}/${repo}/branches`;
        logger('info', 'Get respository from ' + baseurl);
        let respuesta = await axios.get(baseurl).then( (respuesta) => {
            return respuesta.data;
        }).catch( (error) => {
            logger('error', 'Error en /branches');
            return error;
        });
        
        if( respuesta.status === 200 ){
            logger('info', 'Response from /branches');
            response.json(respuesta);
        } else {
            logger('info', 'No data from /branches');
            response.json({status: 'error', message: 'No data'});
        }

    } else {
        logger('error', 'Query param "owner" or "repo" are undefined');
    }
});


/**
 * /repos/{owner}/{repo}/commits?sha={branchname}
 */
server.get('/commits', async (request, response) => {
    logger('info', 'Request received at endpoint "/commits"');
    let owner = request.query.owner;
    let repo = request.query.repo;
    let branchname = request.query.branchname;
    if( owner && repo){
        let baseurl = '';
        if( branchname ) {
            baseurl = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branchname}`;
        } else {
            baseurl = `https://api.github.com/repos/${owner}/${repo}/commits?sha=master`;
        }
        logger('info', 'Get respository from ' + baseurl);
        let respuesta = await axios.get(baseurl).then( (respuesta) => {
            return respuesta.data;
        }).catch( (error) => {
            logger('error', 'Error en /commits');
            return error;
        });

        if( respuesta.status === 200 ){
            logger('info', 'Response from /commits');
            response.json(respuesta);
        } else {
            logger('info', 'No data from /commits');   
            response.json({status: 'error', message: 'No data'});
        }

    } else {
        logger('error', 'Query param "owner" or "repo" are undefined');
    }
});



/**
 * Server 
 */
server.listen(puerto, function() {
    console.log('Servidor ready!');
});
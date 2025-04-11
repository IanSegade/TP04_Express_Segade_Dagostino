import axios from "axios";
const APIKEY = "310660df"; 
const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


    try {
      const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
      const apiResponse = await axios.get(requestString);
  
      if (apiResponse.data.Response === "True") {
        returnObject.respuesta = true;
        returnObject.cantidadTotal = apiResponse.data.totalResults;
        returnObject.datos = apiResponse.data.Search;
      } else {
        returnObject.respuesta = false;
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }

    return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };

    try {
      const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
      const apiResponse = await axios.get(requestString);
  
      if (apiResponse.data.Response === "True") {
        returnObject.respuesta = true;
        returnObject.cantidadTotal = apiResponse.data.totalResults;
        returnObject.datos = apiResponse.data.Search;
      } else {
        returnObject.respuesta = false;
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}

    };


    try {
      const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
      const apiResponse = await axios.get(requestString);
  
      if (apiResponse.data.Response === "True") {
        returnObject.respuesta = true;
        returnObject.datos = apiResponse.data;
      } else {
        returnObject.respuesta = false;
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
    return returnObject;

};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
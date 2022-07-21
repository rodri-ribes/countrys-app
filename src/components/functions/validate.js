export default function validate(input) {
    let error = {};
  
    if(!input.name){
        error.name = "Name is required";
    }else if(!/^[a-z ,.'-]+$/i.test(input.name)){
        error.name = "Numbers are not allowed in the name";
    }else if(input.name.length < 5){
        error.name = "Must be at least 5 characters";
    }

    if(!input.dificulty){
      error.dificulty = "Dificulty is required";
    }else if(input.dificulty < 1 || input.dificulty > 5){
      error.dificulty = "Must be a value between 1 and 5";
    }

    if(!input.duration){
      error.duration = "Duration is required";
    }else if(input.duration < 10){
        error.duration = "The duration must be greater than 10 minutes";
    }

    if(input.season !== "Summer" && input.season !== "Fall" && input.season !== "Winter" && input.season !== "Spring"){
        error.season = "It has to be a valid season";
    }

    return error
}
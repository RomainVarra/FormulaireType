import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";



function Form () {
    const onSubmit = (d: any) => alert(JSON.stringify(d));
    const {register,handleSubmit}= useForm()
    const [change, setChange] = useState("Tapez ici");
    const handleChange = (e: { target: { value: any; }; }) => setChange(e.target.value);
    const [age,setAge] = useState("18");
    const handleAge = (a: { target: { value: SetStateAction<string>; }; }) => setAge(a.target.value);

    return (
        <>
        <h1>Mon formulaire</h1>
        <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="Nom">Nom</label>
         <input {...register("Nom")}type="text" defaultValue={change} />
         <label htmlFor="Prénom">Prénom</label>
         <input {...register("prénom")}type="text" defaultValue={change} onChange={handleChange}/>
         <label htmlFor="Age">Age</label>
         <input {...register("Age")}type="number" defaultValue={age} onChange={handleAge} />
         <select {...register("Sexe")}> 
         <option value="Homme">Homme</option>
         <option value="Femme">Femme</option>
         <option value="Autre">Autre</option>   
         </select>
         <label htmlFor="Commentaire">Commentaire</label>
         <input {...register("Commentaire")}type="text-area" />
         <button type="reset">Reset</button>
         <button type="submit">Soumettre</button>
        </form>
        </>
    )
}
export default Form ;
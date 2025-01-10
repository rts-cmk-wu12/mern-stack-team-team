export default function NewPage() {

    function submitEvent(event) {
         event.preventDefault();

         const form = event.target;

         const formData = new FormData(form);
         const formDataObject = Object.fromEntries(formData.entries());

         const fetchOptions = {
               method: "POST",
               headers: {
                "Content-Type": "application/json"
               },
               body: JSON.stringify(formDataObject)
         }

         console.log(formDataObject);

         const response = fetch('/api/blog', fetchOptions);
    }
    return (
        <>
        <form onSubmit={submitEvent}>
            <input type="text" placeholder="Title..." />
            <input type="date" name="date" />
            <textarea name="text" placeholder="Message..."/>

           <input type="submit" value="Send"/>
        </form>
        </>
    )
}
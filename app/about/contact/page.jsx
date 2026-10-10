const Contact = async () => {
    return <h1>Contact 8397845783</h1>
};
export default Contact; // now when i click /about i see about page and when i click /about/contact then i see this page.
// if i want hide /about/contanct full route in url we use route grouping = when we create folder like this (foldername) then folder became route group now i route /about/conctact like this /contact 
// (user) - folder
// about -nested folder inside user
// contact - other nested folder now /contat go direct to contact 
// usefull when we have user about and abmin about so this became messay so we use this diffrent (user) group and ( admin) group 
// both route group independent from each other 
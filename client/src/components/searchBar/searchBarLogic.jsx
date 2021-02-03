import React from 'react'

const searchBarLogic = () => {
    return (
        <script>
            $(document).ready(function() {
                $("#recipe").autocomplete({
                    source: async (req, res)=>{
                        let data = await fetch(`http://localhost:3000/search/${req.term}`)
                            .then(results=>results.json())
                            .then(results => results.map(result => {
                                return { label: result.title, value: result.name, id: result._id };
                            }));
                        res(data)
                        minLength: 2,
                        sele 
                    }
                })
            })
        </script>
    )
}

export default searchBarLogic

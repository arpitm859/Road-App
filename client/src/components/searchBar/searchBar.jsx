import {React, useEffect} from 'react';
import $ from 'jquery';

const SearchBar = () => {
    const jqueryCode = () => {
        $("#recipe").autocomplete({
            source: async (req, res)=>{
                let data = await fetch(`http://localhost:5000/search/${req.term}`)
                    .then(results=>results.json())
                    .then(results => results.map(result => {
                        return { label: result.title, value: result.name, id: result._id };
                    }));
                res(data)
            },
            minLength: 2,
            select: (event, ui)=>{
                console.log(ui.item); 
            }
        })
    }

    return (
        <div className="ui-widget">
            <label for="recipe"></label>
            <input id="recipe" />
            {jqueryCode()}
        </div>
    )
}

export default SearchBar

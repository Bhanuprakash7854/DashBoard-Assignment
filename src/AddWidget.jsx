import { useState } from "react"
import './AddWidget.css'

export default function AddWidget({ data, closeAddWidget, deleteWidget ,AddNewWidget}) {

    const [activeCategory, setActiveCategory] = useState(2);
    const [newTitle,setNewTitle] = useState("");
    const [newInfo,setNewInfo] = useState("");


    return (
        <div id="add-widget-menu">
            <div id="heading">
                <p>Add Widget</p>
                <i className="fa-solid fa-xmark" onClick={closeAddWidget}></i>
            </div>
            {
                data.categories.map((cat) => (
                    <div id="categories" onClick={() => setActiveCategory(cat.id)} key={cat.id}>
                        <p>{cat.name}</p>
                        {activeCategory === cat.id ? cat.widgets.map((wid) =>
                        (<label key={wid.id}>
                            <input type="checkbox" defaultChecked="true" onChange={() => deleteWidget(cat.id, wid.id)}></input>{wid.title}</label>
                        )) : null}
                        {activeCategory === cat.id?
                            <div id="new-widget-input">
                                <p>Add New Widget</p>
                                <input type="text" placeholder="Enter widget title" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></input>
                                <input type="text" placeholder="Enter widget info" value={newInfo} onChange={(e)=>setNewInfo(e.target.value)}></input>
                                <button onClick={()=>AddNewWidget(cat.id,newTitle,newInfo)}>Add Widget</button>
                            </div>:null
                        }
                    </div>
                )

                )
            }
        </div>
    )
}
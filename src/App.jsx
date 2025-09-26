import { useState, useEffect } from 'react'
import './App.css'
import WidgetBar from './WidgetBar'
import WidgetCategory from './WidgetCategory'
import json_data from './Data.json'
import AddWidget from './AddWidget'
import Navbar from './Navbar'

function App() {

  const [data,setData] = useState(json_data);
  const [isAddWidgetVisible,setIsAddWidgetVisible] = useState(false);
  const [search,setSearch]= useState("")

  const deleteWidget = (catId, widgetId) => {
  setData(prev => ({
    ...prev, 
    categories: prev.categories.map(cat => ({
      ...cat,
      widgets: cat.id === catId
        ? cat.widgets.filter(wid => wid.id !== widgetId)
        : cat.widgets
    }))
  }));
};

    const filteredCategories = data.categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(
      wid =>
        wid.title.toLowerCase().includes(search.toLowerCase()) ||
        wid.info.toLowerCase().includes(search.toLowerCase())
    )
  }));

  const AddNewWidget = (catId, title, info) => {
    setData(prev => ({
      ...prev,
      categories: prev.categories.map(cat =>
        cat.id === catId
          ? {
              ...cat,
              widgets: [
                ...cat.widgets,
                {
                  id: Date.now(),
                  title,
                  info
                }
              ]
            }
          : cat
      )
    }));
  };


  return (
    <div>
      <Navbar search={search} setSearch={setSearch}></Navbar>
      <WidgetBar enableAddWidget={()=>setIsAddWidgetVisible(true)}></WidgetBar>
      {filteredCategories.map((cat)=>(
        <WidgetCategory category={cat} deleteWidget={deleteWidget} key={cat.id} enableAddWidget={()=>setIsAddWidgetVisible(true)}></WidgetCategory>
      ))}
      {isAddWidgetVisible && <AddWidget data={data} closeAddWidget={()=>setIsAddWidgetVisible(false)} AddNewWidget={AddNewWidget} deleteWidget={deleteWidget}/>}
    </div>
  )
}

export default App

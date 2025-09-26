import './WidgetCategory.css'
import Widget from './Widget'

export default function WidgetCategory({ category , deleteWidget , enableAddWidget}) {
    return (
        <div className='widget-category'>
            <h3>{category.name}</h3>
            <div className='widgets-set'>
                {category.widgets.map((wid) => (
                    <Widget cat_id={category.id} widget={wid} deleteWidget={deleteWidget} key={wid.id}></Widget>
                ))}
                <div className="widget">
                    <button onClick={enableAddWidget}>+ Add Widget</button>
                </div>
            </div>

        </div>
    )
}
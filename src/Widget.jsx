import './Widget.css'

export default function Widget({cat_id,widget,deleteWidget})
{
    const handleClick = ()=>
    {
        deleteWidget(cat_id,widget.id)
    }
    return(
        <div className="widget">
            <div id='titlebox'>
                <p id="widget-title">{widget.title}</p>
                <i className="fa-solid fa-xmark" onClick={handleClick}></i>
            </div>
            <p id="widget-info">{widget.info}</p>
        </div>
    )
}
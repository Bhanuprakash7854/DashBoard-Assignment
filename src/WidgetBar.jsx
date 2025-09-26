import './WidgetBar.css'

export default function WidgetBar({enableAddWidget})
{
    return(
        <div id="widget-bar">
            <h2>CNAPP Dashboard</h2>
            <div id='dashboard-options'>
                <button onClick={enableAddWidget}>+ Add Widget</button>
                <i className="fa-solid fa-arrows-rotate"></i>
                <i className="fa-solid fa-ellipsis-vertical"></i>
                <select>
                    <option value="last-2-min">Last 2 min</option>
                </select>
            </div>
        </div>
    )
}
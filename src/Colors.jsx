import {toast } from "react-toastify"

function Colors({color,index}) {
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try { 
              
                await navigator.clipboard.writeText(`#${color.hex}`);
                toast.success('Color copied to clipboard');
            } catch (error) {
            toast.error('Failed to copy color to clipboard');
        }
    } else {
          toast.error('Clipboard access not available');
        }
    };
  
         
     
    
     
    return (
        <article className={index > 10 ?`color color-light`: "color"} style={{backgroundColor:`#${color.hex}`}} onClick={saveToClipboard}>
            {/* {color.hex}
             */}
             <p className="percent-value"> {color.weight}%</p>
             <p className="color-value">#{color.hex}</p>
        </article>
    )
}

export default Colors

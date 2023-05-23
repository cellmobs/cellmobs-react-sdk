import { useSelector } from "react-redux";
import { faEdit, faWindowClose, faSave, faImage, faSpinner, faCircleNotch, faTimes} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import PageContext from '../components/page-context';
import { ADMIN_BASE_URL } from "js/cellmobs/constants";
import { savePageContent } from "js/cellmobs/common";
import api from "js/cellmobs/api";

/**
 * Admin Toolbar for inline editing 
 */



export default function AdminTools({editorEnabled, setEditorEnabled} ) {

    let {page} = useContext(PageContext);
    const [savingPage, setSavingPage] = useState(false)
    const [editEnabled, setEditEnabled] = useState(editorEnabled)

    const saveChanges = () => {
        //console.log(page)
        setSavingPage(true)
        api.page.savePage(page).then(res => {
            setSavingPage(false)
            setEditEnabled(false)
        })
        //dispatch(savePage(page))
    }

    const enabledEditor = () => {
        setEditEnabled(true)
    }
    const disableEditor = () => {
        setEditEnabled(false)
    }
    
    useEffect(() => {
        setEditorEnabled(editEnabled)

    }, [editEnabled]);
    

    return (
        <div>
            <div className="admin-tools">
                <a href={ADMIN_BASE_URL+"/admin/pages/list"} title="View Pages" target="_blank" className="mr-3">Pages</a>
                <a href={ADMIN_BASE_URL+'/admin/pages/edit?id='+page.id} title="Page Settings" target="_blank" className="mr-3">Settings</a>
                {!editEnabled ?
                 <a onClick={enabledEditor} title="Edit inline" className="mr-3">
                    <FontAwesomeIcon icon={faEdit} height={22} />
                </a>
                :
                <a onClick={disableEditor} title="Suspend editing" className="mr-3">
                <FontAwesomeIcon icon={faTimes} height={22} />
                </a>
                }
                {savingPage ?
                <span className="mr-3">
                    <FontAwesomeIcon icon={faCircleNotch} height={22} className="fa-spin" />
                </span>
                : ''}
                {!savingPage && editEnabled ?
                <a onClick={saveChanges} title="Save inline changes" className="mr-3">
                    <FontAwesomeIcon icon={faSave} height={22}  />
                </a>
                :''}
            </div>
        </div>
    )
}
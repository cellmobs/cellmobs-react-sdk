import { useMemo, useState, useEffect, useContext } from 'react';
import { TINY_MCE_KEY } from "js/cellmobs/constants";
import PageContext from "components/page-context";
import { Editor } from '@tinymce/tinymce-react';
import { imageUploadHandler } from "js/cellmobs/api/file";
import { hasAdminRole } from "js/cellmobs/common";

export default function TinyEditor({editorEnabled}) {

    const { page } = useContext(PageContext)

    const [value, setValue] = useState(page.sections['content'].request);
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (hasAdminRole()) {
            setIsEditable(true);
        }
    }, [])

    return (
        <Editor
            disabled={!editorEnabled}
            apiKey={TINY_MCE_KEY}
            cloudChannel='6-dev'
            inline={true}
            value={value}
            onInit={(evt, editor) => {
                setText(editor.getContent({ format: 'text' }));
            }}
            onEditorChange={(newValue, editor) => {
                setValue(newValue);
                setText(editor.getContent({ format: 'text' }));
                page.sections['content'].request = newValue;
                delete page.sections['content'].data;
                delete page.sections['content'].html;
            }}
            init={{
                toolbar: ['styles | bold italic blockquote media bullist numlist alignleft aligncenter alignright alignjustify link unlink anchor undo redo',
                    'fontselect | fontsizeselect | outdent indent pastetext removeformat charmap emoticons pagebreak forecolor table code codesample'],
                plugins: 'advlist anchor autolink charmap code emoticons link image lists media pagebreak preview table template codesample',
                images_upload_handler: imageUploadHandler
            }}
        />
    );
};

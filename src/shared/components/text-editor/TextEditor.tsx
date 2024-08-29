import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface TextEditorProps {
  textEditorHeight: string;
  textEditorControls: object;
  onChangeText: (event) => void;
}

const TextEditor = ({
  textEditorHeight,
  textEditorControls,
  onChangeText
}: TextEditorProps) => {
  return (
    <>
      <ReactQuill
        className="textEditor"
        style={{ height: textEditorHeight }}
        modules={textEditorControls}
        onChange={onChangeText}
      />
    </>
  );
};

export default TextEditor;

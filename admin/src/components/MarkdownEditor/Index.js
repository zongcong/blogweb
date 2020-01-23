import React,{useState, useEffect, useRef, useImperativeHandle, forwardRef} from 'react';

import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content

import Editor from 'tui-editor';
import editorOptions from './default-options';

function MarkdownEditor(props, ref) {
  const {options, mode, height, language, value} = props;
  const childRef = useRef();
  let editorId = 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
  const [id, setId] = useState(editorId);

  useImperativeHandle(ref,() => {
    return {
      setValue,
      setHtml,
      getValue,
      getHtml
    }
  })
  const defaultProps = {
    options: options || editorOptions,
    mode: mode || 'markdown',
    height: height || '300px',
    language: language || 'en_US',
    value: value,
  }

  let editor = {};

  const init = () => {
    const options = Object.assign({}, editorOptions, defaultProps.options)
    options.initialEditType = defaultProps.mode
    options.height = defaultProps.height
    options.language = defaultProps.language
    editor = new Editor({
      el: document.getElementById(id),
      ...options
    });
    if (defaultProps.value) {
      editor.setValue(defaultProps.value);
    }
    editor.on('change', () => {
      getValue()
    });
  };

  useEffect(() => {
    init();
    return() => {
      if (!editor) return;
      editor.off('change');
      editor.remove();
    }
  }, []);

  const setValue = (value) => {
    editor.setValue(value)
  }

  const getValue = () => {
    return editor.getValue()
  }

  const setHtml = (value) => {
    editor.setHtml(value)
  }

  const getHtml = () => {
    return editor.getHtml()
  }

  return (
    <div ref={childRef} id={id}></div>
  )
}

export default forwardRef(MarkdownEditor);

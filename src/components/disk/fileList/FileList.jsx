import React from 'react';
import './fileList.css';
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
    // Убран комментарий, чтобы использовать данные из Redux store
    const files = useSelector(state => state.files.files).map(file => 
        <File key={file._id} file={file}/> // Используйте file._id как ключ и передайте file как проп
    );

    // Если вы всё ещё хотите использовать тестовые данные, исправьте дублирующиеся _id и передайте file как проп
    // const files = [
    //     {_id:1, name: 'direc', type: 'dir', size: '5gb', date:'20.05.2024'},
    //     {_id:2, name: 'direc2', type: 'dir', size: '5gb', date:'20.05.2024'} // Измените _id на уникальные значения
    // ].map(file => <File key={file._id} file={file}/>)

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;

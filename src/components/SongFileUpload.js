import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Grid, Icon, List, Segment} from "semantic-ui-react";
import {formatBytes} from "../utils/StringUtils";

const SongFileUpload = ({songId, songFiles}) => {

        const [files, setFiles] = useState([]);

        const onDrop = useCallback(acceptedFiles => {
            setFiles([...files, ...acceptedFiles]);
            console.log(`Files: ${JSON.stringify(files)}`);
        }, []);

        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

        const removeFile = (fileIndex) => {
            setFiles(files.filter((file, i) => fileIndex !== i));
        };

        const makeFilePrimary = (fileCode) => {
            console.log(`Make file song: ${songId} and code ${fileCode} primary`);
        };

        const renderFileList = (list, icon) => {
            return list.map((file, i) =>
                <List.Item key={i}>
                    <List.Content floated='right'>
                        <Icon name="trash alternate" color="red" style={{cursor: 'pointer'}} onClick={() => removeFile(i)}/>
                    </List.Content>
                    <List.Content floated='right'>
                        <Icon name="trash alternate" color="red" style={{cursor: 'pointer'}} onClick={() => removeFile(i)}/>
                    </List.Content>
                    <List.Content>
                        <List.Header> {icon} {file.name}</List.Header>
                        <List.Description>{formatBytes(file.size)}</List.Description>
                    </List.Content>
                </List.Item>)
        };
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div className="ui segment" {...getRootProps()} style={{cursor: 'pointer'}}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files <Icon name='file pdf outline'/></p>

                            }
                        </div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment basic>
                            <List celled>
                                {
                                    renderFileList(songFiles, <Icon name="file pdf outline" color="green"/>)
                                }
                                {files.map((file, i) =>
                                    <List.Item key={i}>
                                        <List.Content floated='right'>
                                            <Icon name="trash alternate" color="red" style={{cursor: 'pointer'}} onClick={() => removeFile(i)}/>
                                        </List.Content>
                                        <List.Content>
                                            <List.Header>{file.name}</List.Header>
                                            <List.Description>{formatBytes(file.size)}</List.Description>
                                        </List.Content>
                                    </List.Item>)
                                }
                            </List>

                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
;

export default SongFileUpload;
import React, {useState} from "react";
import {Document, Page} from 'react-pdf';
import {Button, Grid, Icon, Pagination, Segment} from "semantic-ui-react";

const PDFDocument = ({file}) => {

    const [numPages, setNumPages] = useState(0);

    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    return (
        <Segment>
            <Segment basic style={{margin: 0}}>
                <Grid stackable columns={2}>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Pagination totalPages={numPages}
                                        activePage={pageNumber}
                                        onPageChange={(e, {activePage}) => setPageNumber(activePage)}
                                        ellipsisItem={null}
                                        firstItem={null}
                                        lastItem={null}
                                        pointing
                                        secondary
                                        siblingRange={3}
                                        size='mini'
                            />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Button basic as='a' href={file}>
                                <Icon name="cloud download"/>
                                Herunterladen
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </Segment>
            <Document file={file}
                      onLoadError={console.error}
                      onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Seite {pageNumber} von {numPages}</p>
        </Segment>
    );
};

export default PDFDocument;
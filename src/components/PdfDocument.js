import React, {useState} from "react";
import {Document, Page} from 'react-pdf';
import {Pagination, Segment} from "semantic-ui-react";

const PDFDocument = () => {

    const [numPages, setNumPages] = useState();

    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    return (
        <Segment>
            <Segment basic style={{margin: 0}}>
                <Pagination totalPages={numPages}
                            activePage={pageNumber}
                            onPageChange={(e, {activePage}) => setPageNumber(activePage)}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            size='mini'
                />
            </Segment>
            <Document file="/pdf-file.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </Segment>
    );
};

export default PDFDocument;
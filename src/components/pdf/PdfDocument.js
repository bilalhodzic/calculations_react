import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useLocation } from "react-router";
import Page1 from "../report/Page1";
import Page2 from "../report/Page2";
import Page3 from "../report/Page3";
import Page4 from "../report/Page4";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

export default function PdfDocument(props) {
    if(!props.data){
        return "No pdf data";
    }

    const calculationData = props.data;

    return (
        <Document>
            <Page style={styles.page}>
                <Page1
                    type={calculationData.type}
                    title={calculationData.name}
                />
            </Page>
            <Page style={styles.page}>
                <Page2 calculationData={calculationData} />
            </Page>
            <Page style={styles.page}>
                <Page3 calculationData={calculationData} />
            </Page>
            <Page style={styles.page}>
                <Page4 calculationData={calculationData} />
            </Page>
        </Document>
    );
}

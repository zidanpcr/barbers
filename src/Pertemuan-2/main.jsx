import { createRoot } from "react-dom/client";
import ArtikelDetail from "./ArtikelDetail";
import './custom.css';
import Container from "./Container";
import ListProduct from "./ListProduct";
import QnASection from "./QnASection";

createRoot(document.getElementById("root"))
    .render(
        <Container>
            <ArtikelDetail/>
            <ListProduct/>
            <QnASection/>
        </Container>
    )